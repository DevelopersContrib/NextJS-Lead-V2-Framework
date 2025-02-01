import { headers } from "next/headers";

export default function handler(req, res) {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost")
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : referrer.replace("www.", "");
  res.status(200).json({ domain: domainName });
} 