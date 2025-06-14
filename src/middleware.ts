import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/login(.*)",
  "/register(.*)",
  "/apply-doctor(.*)",
]);

const isPatientDashboardRoute = createRouteMatcher(["/user/(.*)"]);
const isDoctorDashboardRoute = createRouteMatcher(["/doctor/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  if (userId) {
    const userRole =
      (sessionClaims?.metadata as { role?: "patient" | "doctor" })?.role ||
      "patient";

    if (isPublicRoute(req)) {
      let redirectUrl = "/user/doctors";
      if (userRole === "doctor") {
        redirectUrl = "/doctor/dashboard";
      }
      return NextResponse.redirect(new URL(redirectUrl, req.url));
    }

    // 2. Role-based access control for patient dashboard
    if (isPatientDashboardRoute(req) && userRole !== "patient") {
      const redirectTo = new URL("/doctor/dashboard", req.url);
      return NextResponse.redirect(redirectTo);
    }

    // 3. Role-based access control for doctor dashboard
    if (isDoctorDashboardRoute(req) && userRole !== "doctor") {
      const redirectTo = new URL("/user/doctors", req.url);
      return NextResponse.redirect(redirectTo);
    }

    return NextResponse.next();
  }

  if (!isPublicRoute(req)) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
