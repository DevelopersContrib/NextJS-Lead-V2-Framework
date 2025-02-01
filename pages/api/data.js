import { headers } from "next/headers";
import axios from "axios";

export default async function handler(req, res) {
  const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;
  // Your server-side logic here
  const response = await axios.get(`https://your-api-endpoint.com?domain=${DOMAIN}`);
  res.status(200).json(response.data);
} 