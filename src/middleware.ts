import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/product"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("authToken")?.value || null;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (req.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname === "/register" && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname === "/dashboard") {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    try {
      const decodedToken = jwtDecode<{ role: string }>(token);
      const userRole = decodedToken.role;

      if (userRole !== "ADMIN") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  }

  return NextResponse.next();
}
