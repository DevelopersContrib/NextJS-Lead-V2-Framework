/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vnoc.com',
      },
      {
        protocol: 'https',
        hostname: 'vnoclogos.s3-us-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'tools.contrib.com',
      },
      {
        protocol: 'https',
        hostname: 'projectcafe.com',
      },
      {
        protocol: 'https',
        hostname: 'contrib.com',
      },
      {
        protocol: 'https',
        hostname: 'www.contrib.com',
      },
      {
        protocol: 'https',
        hostname: 'vbot-images.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@fortawesome/fontawesome-free', 'bootstrap'],
  },
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Webpack optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
