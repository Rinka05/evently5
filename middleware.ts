// import { clerkMiddleware } from "@clerk/nextjs/server";
 
// export default clerkMiddleware({
//   publicRoutes: [
    
//   ],
//   ignoredRoutes: [
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing'
//   ]
// });
 
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};

