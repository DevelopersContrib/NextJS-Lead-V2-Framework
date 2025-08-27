import formatTimeAgo from "../formatTimeAgo";
import generateRandomProfile from "../randomAvatar";

export const fetchRssData = async () => {
  try {
    // Add timeout and better error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const res = await fetch("/api/rss-proxy", {
      signal: controller.signal,
      headers: {
        'Cache-Control': 'no-cache',
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!res || !res.ok) {
      throw new Error(`HTTP error! status: ${res?.status || 'unknown'}`);
    }
    
    const data = await res.json();
    
    // Handle the new RSS format with proper fallbacks
    if (!data || !data.items || !Array.isArray(data.items)) {
      console.warn("Invalid RSS data format, returning fallback data");
      return generateFallbackNotifications();
    }

    const items = await Promise.all(
      data.items.map(async (item, id) => {
        try {
          const amountMatch = item.description?.match(/Amount:\s*(\d+)/);
          const amount = amountMatch?.[1] || "some";

          const profile = generateRandomProfile();

          return {
            id: item.id || id,
            avatar: profile.avatar,
            pubDate: formatTimeAgo(item.pubDate || item.createdAt || new Date()),
            description: amount,
            name: profile.name,
          };
        } catch (itemError) {
          console.error("Error processing RSS item:", itemError);
          // Return a fallback item
          const profile = generateRandomProfile();
          return {
            id: `fallback-${id}`,
            avatar: profile.avatar,
            pubDate: "recently",
            description: "some",
            name: profile.name,
          };
        }
      })
    );

    return items;
  } catch (error) {
    console.error("Error fetching RSS data:", error);
    // Return fallback notifications
    return generateFallbackNotifications();
  }
};

// Generate fallback notifications when RSS fails
function generateFallbackNotifications() {
  return Array.from({ length: 5 }, (_, i) => {
    const profile = generateRandomProfile();
    return {
      id: `fallback-${i}`,
      avatar: profile.avatar,
      pubDate: "recently",
      description: "some",
      name: profile.name,
    };
  });
}
