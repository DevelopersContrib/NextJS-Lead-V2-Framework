"use client";
import { useEffect } from "react";
import { ApiRoutes } from "../models/routes";
import { getEnvVar, ENV_VAR } from "../getEnvVar";
import axios from "axios";
import { useBlogStore } from "../store/useBlogStore";

const apiKey = getEnvVar(ENV_VAR.API_KEY);

export const getDomain = async () => {
  try {
    const response = await axios.get("/api/domain");
    return response.data;
  } catch (error) {
    console.error("Error fetching domain:", error);
    return { domain: null };
  }
};

// Fetch fallback blog posts from VNOC RSS feed
const fetchFallbackBlogs = async () => {
  try {
    console.log("Fetching fallback blogs from RSS feed...");
    const response = await fetch("/api/rss-proxy?url=https://blog.vnoc.com/feed");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("RSS feed data:", data);
    return data.items || [];
  } catch (error) {
    console.error("Error fetching fallback blogs:", error);
    return [];
  }
};

export const useFetchBlog = () => {
  const { setBlog, setLoading, setError } = useBlogStore();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // First try to get the domain
        const { domain } = await getDomain();
        
        if (!domain) {
          console.warn("No domain found, using fallback RSS feed");
          const fallbackBlogs = await fetchFallbackBlogs();
          setBlog(fallbackBlogs);
          return;
        }

        // Try the main API first
        try {
          const url = `${ApiRoutes.Blogs}?key=${apiKey}&domain=${domain}`;
          console.log("Trying main API:", url);
          
          const response = await axios.get(url, { timeout: 10000 });
          
          if (response && response.data) {
            const blogData = Array.isArray(response.data) ? response.data : [];
            
            if (blogData.length > 0) {
              console.log("Main API returned blog data:", blogData.length, "posts");
              setBlog(blogData);
              return;
            } else {
              console.log("Main API returned empty data, using fallback RSS feed");
            }
          } else {
            console.log("Main API returned invalid response, using fallback RSS feed");
          }
        } catch (apiError) {
          console.warn("Main API failed, using fallback RSS feed:", apiError.message);
        }

        // Always fall back to RSS feed if main API fails or returns no data
        const fallbackBlogs = await fetchFallbackBlogs();
        if (fallbackBlogs.length > 0) {
          console.log("Using fallback RSS feed with", fallbackBlogs.length, "posts");
          setBlog(fallbackBlogs);
        } else {
          console.log("No fallback blogs available, setting empty array");
          setBlog([]);
        }
        
      } catch (error) {
        console.error("Error in blog fetching:", error);
        setError("Failed to fetch Blog");
        
        // Final fallback - try RSS feed
        try {
          const fallbackBlogs = await fetchFallbackBlogs();
          setBlog(fallbackBlogs);
        } catch (fallbackError) {
          console.error("Final fallback also failed:", fallbackError);
          setBlog([]); // Set empty array if everything fails
        }
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [setLoading, setError, setBlog]);
};

export const useFetchBlogSlug = (id) => {
  const { blogSlug, setBlogSlug, setLoading, setError } = useBlogStore();
  
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id || (Array.isArray(blogSlug) && blogSlug.length > 0)) return;

      setLoading(true);
      setError(null);

      try {
        const { domain } = await getDomain();
        
        if (!domain) {
          console.warn("No domain found, skipping blog slug fetch");
          setBlogSlug([]);
          return;
        }

        const url = `${ApiRoutes.Blogs}?key=${apiKey}&domain=${domain}&id=${id}`;
        const response = await axios.get(url, { timeout: 10000 });

        if (response && response.data && response.data.contents) {
          setBlogSlug(response.data.contents);
        } else {
          console.warn("Invalid blog slug response format:", response);
          setBlogSlug([]);
        }
      } catch (error) {
        console.error("Error fetching blog slug:", error);
        setError(error.response?.data?.message || "Failed to fetch Blog");
        setBlogSlug([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, setBlogSlug, setLoading, setError, blogSlug]);
};
