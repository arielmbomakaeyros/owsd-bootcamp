import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; 
    // get the language abreviation from path
    const mainLocal = path.split("/"); 
    // check if path does not start with /${locale} => /en or /fr
    // And check if path is different from /${locale} => /en or /fr
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !path.startsWith(`/${locale}`) && path !== `/${locale}`
    ); 


    // if en or fr missing
    if (pathnameIsMissingLocale) {
      // get en or fr from request body using above declared function
        const locale = getLocale(request);
        return NextResponse.redirect(
          new URL(
            `/${locale}${path.startsWith('/') ? '' : '/'}${path}`,
            request.nextUrl
          )
        );
    }

    // else check if path is public path as done below
    const isPublicPath = 
            path === `/en/` || 
            path === `/en/login` ||
            path === `/fr/` || 
            path === `/fr/login`
    const token = request.cookies.get("token")?.value || ""; 

    // We do not acces public pages when already login
    if (isPublicPath && token) {
      return NextResponse.redirect(new URL(`/${mainLocal[1]}/`, request.nextUrl)); 
    } 

    // We should not have access to private pages when not login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL(`/${mainLocal[1]}/login`, request.nextUrl)); 
    }
  // const pathname = request.nextUrl.pathname;
  // const pathnameIsMissingLocale = i18n.locales.every(
  //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  // );

  // // Redirect if there is no locale
  // if (pathnameIsMissingLocale) {
  //   const locale = getLocale(request);
  //   return NextResponse.redirect(
  //     new URL(
  //       `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
  //       request.url
  //     )
  //   );
  // }

  // const locale = getLocale(request);

  // const protectedPath = [
  //   `/${locale}/dashboard`,
  //   `/${locale}/dashboard/bulk-messages`,
  //   `/${locale}/dashboard/chatbot`,
  //   `/${locale}/dashboard/loyalty-program`,
  //   `/${locale}/dashboard/setting`,
  //   `/${locale}/dashboard/tombola-program`,
  // ];

  // const publicPath = [
  //   `/${locale}`,
  //   // `/${locale}/login`,
  //   `/${locale}/client-list`,
  //   `/${locale}/upload-user-list`,
  // ];

  // if (!request.cookies.get('user_dba_data') && publicPath.includes(pathname)) {
  //   return NextResponse.redirect(new URL(`/${locale}
  //   `, request.url));
  // } else if (request.cookies.get('user_dba_data')) {
  //   let user = JSON.parse(request.cookies.get('user_dba_data')?.value!);
  //   if (
  //     user &&
  //     user.token &&
  //     user.token.length < 1 &&
  //     !publicPath.includes(pathname)
  //   ) {
  //     return NextResponse.redirect(new URL(`/${locale}
  //     `, request.url));
  //   } else if (
  //     user &&
  //     user.token &&
  //     user.token.length > 0 &&
  //     !protectedPath.includes(pathname)
  //   ) {
  //     return NextResponse.redirect(
  //       new URL(`/${locale}/dashboard/`, request.url)
  //     );
  //   } else {
  //     return NextResponse.next();
  //   }
  // }
  
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
