"use client";
import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { faCalendar, faRss, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogList = ({ theme = "black", initialBlogData = null }) => {
  const { blog, loading, error, setBlog } = useBlogStore();
  const [hasError, setHasError] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  // Always call the hook at component level
  useFetchBlog();

  // Use server-side data if available
  useEffect(() => {
    if (initialBlogData && Array.isArray(initialBlogData) && initialBlogData.length > 0) {
      setBlog(initialBlogData);
      setIsUsingFallback(initialBlogData.some(item => item.id?.startsWith('vnoc-blog-') || item.author === 'VNOC Team'));
    }
  }, [initialBlogData, setBlog]);

  // Function to get a valid image URL with fallbacks
  const getValidImageUrl = (item) => {
    // Try to get image from various sources
    const possibleImages = [
      item.contents?.[0]?.imageUrl,
      item.imageUrl,
      item.image_url,
      item.contents?.[0]?.image_url,
    ].filter(Boolean);

    // If we have a valid image URL, use it
    for (const img of possibleImages) {
      if (img && img.startsWith('http') && !img.includes('placeholder')) {
        return img;
      }
    }

    // Return a working placeholder image
    return 'https://picsum.photos/400/300?random=1';
  };

  // Reset error state when blog data changes
  useEffect(() => {
    if (blog && Array.isArray(blog) && blog.length > 0) {
      setHasError(false);
      // Check if we're using fallback data (VNOC RSS feed)
      setIsUsingFallback(blog.some(item => item.id?.startsWith('vnoc-blog-') || item.author === 'VNOC Team'));
    }
  }, [blog]);

  // Handle errors gracefully
  useEffect(() => {
    if (error) {
      console.error("Blog fetch error:", error);
      setHasError(true);
    }
  }, [error]);

  // Safely handle blog data with proper null checking
  const blogPost = blog && Array.isArray(blog) && blog.length > 0
    ? blog.map((item) => ({
        id: item.id || `blog-${Math.random()}`,
        slug: item.contents?.[0]?.title || item.title || 'untitled',
        title: item.contents?.[0]?.title || item.title || 'Latest from VNOC Blog',
        image_url: getValidImageUrl(item),
        image_caption: item.contents?.[0]?.imageCaption || item.imageCaption || item.title || 'Blog image',
        createdAt: item.contents?.[0]?.createdAt || item.createdAt || 'Recent',
        tags: item.contents?.[0]?.blogPostTags || item.categories || ['Technology', 'Development'],
        link: item.link || 'https://blog.vnoc.com',
        isExternal: item.id?.startsWith('vnoc-blog-') || item.author === 'VNOC Team',
        description: item.description || 'Stay updated with the latest insights and developments from the VNOC team.',
      }))
    : [];

  const textColor = theme === "white" ? "tw-text-white" : "tw-text-black";
  const backgroundColor = theme === "white" ? "tw-bg-transparent" : "tw-bg-white";

  // Show error state
  if (hasError) {
    return (
      <section className={`tw-py-24 ${backgroundColor}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className={`tw-font-bold tw-text-3xl mb-4 text-center ${textColor}`}>
                Latest Blogs
              </h2>
              <div className="tw-text-center tw-py-8">
                <p className={`tw-text-lg ${textColor} tw-opacity-75`}>
                  Unable to load blog posts at the moment. Please try again later.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-mt-4"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`tw-py-24 ${backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tw-text-center tw-mb-8">
              <h2 className={`tw-font-bold tw-text-3xl ${textColor}`}>
                Latest Blogs
              </h2>
              {isUsingFallback && (
                <div className="tw-mt-2 tw-flex tw-items-center tw-justify-center tw-gap-2">
                  <FontAwesomeIcon icon={faRss} className="tw-text-blue-500" />
                  <span className={`tw-text-sm ${textColor} tw-opacity-75`}>
                    Powered by VNOC Blog
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-md-8">
                {loading ? (
                  <div className="tw-text-center tw-py-8">
                    <p className={`${textColor}`}>Loading blog posts...</p>
                    <div className="tw-inline-block tw-w-6 tw-h-6 tw-border-2 tw-border-current tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mt-2"></div>
                  </div>
                ) : blog && Array.isArray(blog) && blog.length > 0 ? (
                  blogPost.map((post, index) => (
                    <div
                      key={post.id || index}
                      className={`card tw-border-0 tw-rounded-xl tw-shadow-lg tw-overflow-hidden ${backgroundColor}`}
                      style={{ 
                        backgroundColor: theme === "white" ? "rgba(255,255,255,0.1)" : "white",
                        backdropFilter: theme === "white" ? "blur(10px)" : "none"
                      }}
                    >
                      <div className="row g-0">
                        <div className="col-md-4">
                          <div className="tw-relative tw-h-full tw-min-h-[200px]">
                            <Image
                              src={post.image_url}
                              alt={post.image_caption}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="tw-object-cover"
                              priority={index === 0}
                              onError={(e) => {
                                console.log("Image failed to load, using fallback");
                                e.target.src = 'https://picsum.photos/400/300?random=1';
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body tw-p-6 tw-flex tw-flex-col tw-h-full">
                            <div className="tw-flex tw-items-center tw-gap-2 tw-mb-3">
                              {post.isExternal && (
                                <span className="tw-bg-blue-100 tw-text-blue-800 tw-text-xs tw-px-2 tw-py-1 tw-rounded-full tw-flex tw-items-center tw-gap-1">
                                  <FontAwesomeIcon icon={faRss} className="tw-w-3 tw-h-3" />
                                  External
                                </span>
                              )}
                              <span className={`tw-text-xs ${textColor} tw-opacity-60`}>
                                {post.createdAt}
                              </span>
                            </div>
                            
                            <h3 className="card-title tw-text-xl tw-font-bold tw-mb-3">
                              {post.isExternal ? (
                                <a
                                  href={post.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${textColor} hover:tw-text-blue-600 tw-transition-colors tw-flex tw-items-center tw-gap-2`}
                                >
                                  {post.title}
                                  <FontAwesomeIcon icon={faExternalLinkAlt} className="tw-w-4 tw-h-4" />
                                </a>
                              ) : (
                                <a
                                  href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                  className={`${textColor} hover:tw-text-blue-600 tw-transition-colors`}
                                >
                                  {post.title}
                                </a>
                              )}
                            </h3>
                            
                            <p className={`tw-text-sm tw-mb-4 tw-flex-grow ${textColor} tw-opacity-80`}>
                              {post.description}
                            </p>
                            
                            <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-4">
                              {post.tags && Array.isArray(post.tags) && post.tags.length > 0 ? (
                                post.tags.slice(0, 3).map((tag, index) => (
                                  <span
                                    key={index}
                                    className={`tw-bg-gray-100 tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium ${textColor}`}
                                    style={{
                                      backgroundColor: theme === "white" ? "rgba(255,255,255,0.2)" : "#f3f4f6",
                                      border: theme === "white" ? "1px solid rgba(255,255,255,0.3)" : "none",
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))
                              ) : (
                                <span className={`tw-text-xs ${textColor} tw-opacity-50`}>No tags</span>
                              )}
                            </div>
                            
                            <div className="tw-flex tw-justify-between tw-items-center">
                              {post.isExternal ? (
                                <a
                                  className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg tw-font-medium tw-transition-colors tw-flex tw-items-center tw-gap-2"
                                  href={post.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Read on VNOC Blog
                                  <FontAwesomeIcon icon={faExternalLinkAlt} className="tw-w-4 tw-h-4" />
                                </a>
                              ) : (
                                <a
                                  className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-6 tw-py-2 tw-rounded-lg tw-font-medium tw-transition-colors"
                                  href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                >
                                  Read More
                                </a>
                              )}
                              
                              <div className="tw-flex tw-items-center tw-gap-2 tw-text-blue-500">
                                <FontAwesomeIcon icon={faCalendar} className="tw-w-4 tw-h-4" />
                                <span className="tw-text-sm tw-font-medium">{post.createdAt}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="tw-text-center tw-py-12">
                    <div className="tw-bg-gray-100 tw-rounded-full tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
                      <FontAwesomeIcon icon={faRss} className="tw-text-2xl tw-text-gray-400" />
                    </div>
                    <h3 className={`tw-text-lg tw-font-medium ${textColor} tw-mb-2`}>
                      No blog posts available
                    </h3>
                    <p className={`${textColor} tw-opacity-75 tw-mb-4`}>
                      Check back later for the latest updates and insights.
                    </p>
                    <a
                      href="https://blog.vnoc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-transition-colors"
                    >
                      Visit VNOC Blog
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="tw-w-4 tw-h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
