import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = headers();
  const host = headersList.get("host");

  const domainName = host?.includes("localhost")
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : `https://${host?.replace("www.", "")}`;

  return NextResponse.json({ domain: domainName });
}
