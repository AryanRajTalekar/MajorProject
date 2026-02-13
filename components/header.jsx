import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { Slack } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-black/70 backdrop-blur-md z-50 border-b border-black/10 dark:border-white/10">
      <nav className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="flex items-center gap-2 font-semibold text-2xl md:text-4xl text-black dark:text-white">
            <span>
              <Slack size={32} className="md:w-[50px] md:h-[50px]" />
            </span>
            BudgetPilot
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition" href="#features">
              Features
            </a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition" href="#testimonials">
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          
          <ThemeToggle />

          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline" className="dark:border-white/20">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="dark:border-white/20"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 md:w-10 md:h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
