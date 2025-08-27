/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "images.pexels.com",
      "cdn.vnoc.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "tools.contrib.com",
      "projectcafe.com",
      "contrib.com",
      "www.contrib.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "vbot-images.s3.us-east-1.amazonaws.com",
      "randomuser.me",
      "i.pravatar.cc",
      "localhost",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
