import { headers } from "next/headers";
import axios from "axios";
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

export async function getDomain() {
  const headersList = await headers();
  const referrer = headersList.get("host");
  const domainName = referrer?.includes("localhost") ? DOMAIN : referrer?.replace("www.", "") || "default";
  return domainName;
}

// Shared base data that applies to all domains
export async function getBaseData() {
  const res = await fetch(process.env.CONTRIB_API1 + `&domain=default`, {
    mode: "cors",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    next: { 
      revalidate: 86400, // 24 hours cache - shared across all domains
      tags: ['base-domain-data']
    }
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch base data");
  }
  
  return res.json();
}

// Domain-specific data (only fetch if domain has custom data)
export async function getDomainSpecificData(domain) {
  // Only fetch if domain is not in a list of known default domains
  const defaultDomains = ['default', 'localhost', 'example.com'];
  if (defaultDomains.includes(domain)) {
    return null;
  }
  
  try {
    const url = process.env.CONTRIB_API1 + `&domain=${domain}`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      next: { 
        revalidate: 86400, // 24 hours cache
        tags: [`domain-specific-${domain}`]
      }
    });
    
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.warn(`Failed to fetch domain-specific data for ${domain}:`, error);
  }
  
  return null;
}

// Main getData function that combines base + domain-specific
export async function getData() {
  const domain = await getDomain();
  
  // Get base data (shared across all domains)
  const baseData = await getBaseData();
  
  // Try to get domain-specific data
  const domainData = await getDomainSpecificData(domain);
  
  // Merge base data with domain-specific overrides
  if (domainData && domainData.data) {
    return {
      ...baseData,
      data: {
        ...baseData.data,
        ...domainData.data
      }
    };
  }
  
  return baseData;
}

export async function getTopsites() {
  // Use shared topsites data for all domains to reduce API calls
  const res = await fetch(process.env.CONTRIB_API1_TOPSITES + `&domain=default`, { 
    next: { 
      revalidate: 86400, // 24 hours cache - shared across all domains
      tags: ['shared-topsites']
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topsites data");
  }

  return res.json();
}

export async function getUserWidget() {
  // Use shared user widget data for all domains
  const res = await fetch(process.env.CONTRIB_USERS + `&domain=default`, { 
    next: { 
      revalidate: 86400, // 24 hours cache - shared across all domains
      tags: ['shared-users']
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user widget data");
  }

  return res.json();
}

export async function getRelatedDomains() {
  // Use shared related domains data for all domains
  const res = await fetch(process.env.RELATED_DOMAINS + `&domain=default`, { 
    next: { 
      revalidate: 86400, // 24 hours cache - shared across all domains
      tags: ['shared-related-domains']
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch related domains data");
  }

  return res.json();
}

export async function getScript(url) {
  try {
    const res = await fetch(url, {
      next: { 
        revalidate: 86400, // 24 hours cache
        tags: [`script-${url}`]
      }
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch script");
    }
    
    const data = await res.json();
    return data.data?.content || "";
  } catch (e) {
    console.log("error getScript", e);
    return { error: "error getScript" };
  }
}

// Shared blog data for all domains
export async function getBlogData() {
  // Use shared blog data to reduce API calls across thousands of domains
  try {
    const rssRes = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/rss-proxy?url=https://blog.vnoc.com/feed`, {
      next: { 
        revalidate: 1800, // 30 minutes cache - shared across all domains
        tags: ['shared-rss-blogs']
      }
    });
    
    if (rssRes.ok) {
      const rssData = await rssRes.json();
      return rssData.items || [];
    }
  } catch (error) {
    console.warn("RSS fallback failed");
  }
  
  return [];
}
