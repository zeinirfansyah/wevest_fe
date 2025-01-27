"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../atoms/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white shadow`}>
        <nav className="max-w-7xl mx-auto">
          <div className="lg:flex justify-start gap-20 items-center py-6 mx-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-3xl font-bold transition-all duration-700 bg-blue-500 bg-clip-text text-transparent"
              >
                WeVest
              </Link>
              <div className="lg:hidden">
                <Menu onClick={toggleMenu} className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div
              className={`lg:flex gap-5 lg:justify-between w-full overflow-hidden transition-all duration-700 lg:max-h-96 ${
                isMenuOpen ? "max-h-96" : "max-h-0"
              } text-navy `}
            >
              <div className="flex lg:items-center flex-col lg:flex-row gap-6 my-6 lg:my-3 text-sm">
                <Link
                  href="/#"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/#contact"
                  className="hover:text-blue-500 transition-all duration-300"
                >
                  Help
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-2">
                <Button
                  variant="filled_blue"
                  onClick={() => router.push("/register")}
                >
                  Register
                </Button>
                <Button variant="filled_blue" onClick={() => router.push("/#")}>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
