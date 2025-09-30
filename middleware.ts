// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  const pathname = req.nextUrl.pathname;
  
  // Block suspicious paths that shouldn't exist
  const blockedPaths = [
    '/_not-found', '/admin', '/wp-admin', '/wp-login', '/phpmyadmin',
    '/.env', '/config', '/backup', '/test', '/api/test'
  ];
  
  if (blockedPaths.some(path => pathname.startsWith(path))) {
    return new NextResponse('Not Found', { status: 404 });
  }
  
  // Handle www redirect
  if (host?.slice(0, 4) !== 'www.' && !host?.includes('localhost')) {
    return NextResponse.redirect(`https://www.${host}${pathname}`, 301);
  }
  
  // Add security headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  
  return response;
}