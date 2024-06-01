import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/protected', request.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};
