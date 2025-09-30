import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const headersList = await headers();
    const host = headersList.get("host");

    let domainName = null;

    if (host) {
      if (host.includes("localhost")) {
        domainName = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost";
      } else {
        domainName = host.replace("www.", "");
      }
    }

    // Fallback if no domain is found
    if (!domainName) {
      domainName = process.env.NEXT_PUBLIC_VERCEL_URL || "default-domain.com";
    }

    return NextResponse.json({ 
      domain: domainName,
      success: true 
    });
  } catch (error) {
    console.error("Error in domain API route:", error);
    return NextResponse.json({ 
      domain: process.env.NEXT_PUBLIC_VERCEL_URL || "default-domain.com",
      success: false,
      error: "Failed to determine domain"
    }, { status: 500 });
  }
}
