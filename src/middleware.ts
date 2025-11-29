import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; // Corrected import path

const SECRET_KEY = process.env.JWT_SECRET || 'your-super-secret-key';
// Encode the secret key to a Uint8Array, as required by jose
const encodedSecretKey = new TextEncoder().encode(SECRET_KEY);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionToken = request.cookies.get('session')?.value;

    if (!sessionToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      // The `jwtVerify` function will throw an error if the token is invalid
      await jwtVerify(sessionToken, encodedSecretKey);
      return NextResponse.next();
    } catch (error) {
      console.error('JWT Verification Error:', error);
      // Redirect to login if token is invalid or expired
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      // Clear the invalid cookie
      response.cookies.set('session', '', { expires: new Date(0) });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};