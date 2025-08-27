import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const feedUrl = searchParams.get('url') || "https://blog.vnoc.com/feed";
  
  try {
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NextJS-Lead-V2-Framework/1.0)',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xml = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "text",
    });
    
    const json = parser.parse(xml);
    
    // Transform RSS data to match our blog format - just get the first item
    const transformedData = transformRssToBlogFormat(json);
    
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("RSS Proxy Error:", error);
    return NextResponse.json({ 
      message: "Failed to fetch RSS feed",
      error: error.message 
    }, { status: 500 });
  }
}

function transformRssToBlogFormat(rssData) {
  try {
    const channel = rssData.rss?.channel || rssData.feed;
    if (!channel) return { items: [] };

    const items = channel.item || channel.entry || [];
    
    // Just return the first item to keep it simple
    if (items.length === 0) return { items: [] };
    
    const firstItem = items[0];
    
    return {
      items: [{
        id: `vnoc-blog-1`,
        title: firstItem.title?.['#text'] || firstItem.title || 'Latest from VNOC Blog',
        description: firstItem.description?.['#text'] || firstItem.summary?.['#text'] || firstItem.content?.['#text'] || 'Stay updated with the latest insights and developments from the VNOC team.',
        link: firstItem.link?.['#text'] || firstItem.link || 'https://blog.vnoc.com',
        pubDate: firstItem.pubDate?.['#text'] || firstItem.published?.['#text'] || firstItem.updated?.['#text'] || '',
        author: 'VNOC Team',
        categories: firstItem.category || ['Technology', 'Development'],
        imageUrl: extractImageFromContent(firstItem.description?.['#text'] || firstItem.content?.['#text'] || ''),
        imageCaption: firstItem.title?.['#text'] || firstItem.title || 'Blog image',
        contents: [{
          title: firstItem.title?.['#text'] || firstItem.title || 'Latest from VNOC Blog',
          imageUrl: extractImageFromContent(firstItem.description?.['#text'] || firstItem.content?.['#text'] || ''),
          imageCaption: firstItem.title?.['#text'] || firstItem.title || 'Blog image',
          blogPostTags: firstItem.category || ['Technology', 'Development'],
        }],
        createdAt: formatDate(firstItem.pubDate?.['#text'] || firstItem.published?.['#text'] || firstItem.updated?.['#text'] || ''),
      }]
    };
  } catch (error) {
    console.error("Error transforming RSS data:", error);
    return { items: [] };
  }
}

function extractImageFromContent(content) {
  if (!content) return 'https://picsum.photos/400/300?random=1';
  
  // Try to extract image from HTML content
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
  if (imgMatch) {
    const imgUrl = imgMatch[1];
    // Validate the image URL
    if (imgUrl.startsWith('http') && !imgUrl.includes('placeholder')) {
      return imgUrl;
    }
  }
  
  // Try to extract image from markdown-style content
  const markdownImgMatch = content.match(/!\[.*?\]\((.*?)\)/);
  if (markdownImgMatch) {
    const imgUrl = markdownImgMatch[1];
    if (imgUrl.startsWith('http') && !imgUrl.includes('placeholder')) {
      return imgUrl;
    }
  }
  
  // Return a working placeholder image from Picsum
  return 'https://picsum.photos/400/300?random=1';
}

function formatDate(dateString) {
  if (!dateString) return 'Recent';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Recent';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return 'Recent';
  }
}
