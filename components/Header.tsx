// Header.tsx
import React from "react";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Github, Twitter, Menu} from "lucide-react";

interface HeaderProps {
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({toggleMenu}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/icon.png?height=32&width=32" alt="snow7y" />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
            <span className="font-bold sm:inline-block">snow7y</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-gray-300 text-gray-400"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="transition-colors hover:text-gray-300 text-gray-400"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="transition-colors hover:text-gray-300 text-gray-400"
              href="#about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-gray-300 text-gray-400"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/snow7y"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block"
          >
            <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://twitter.com/snow7y"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block"
          >
            <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
