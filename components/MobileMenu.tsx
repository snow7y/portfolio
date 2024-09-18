// MobileMenu.tsx
import React from "react";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { X } from "lucide-react";
import { default as Zenn } from "@/components/icons/zenn/logo-only.svg";
import { default as Xlogo } from "@/components/icons/x/logo.svg";
import {default as Github} from "@/components/icons/github/github-mark.svg";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 md:hidden">
      <div className="flex flex-col h-full">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/icon.png?height=32&width=32" alt="snow7y" />
              <AvatarFallback>SY</AvatarFallback>
            </Avatar>
            <span className="font-bold text-md">snow7y</span>
          </div>
          <button onClick={toggleMenu}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close Menu</span>
          </button>
        </div>
        <div className="flex space-x-4 p-4 ">
          <Link
            href="https://github.com/snow7y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://x.com/snow7y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Xlogo className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://zenn.dev/snow7y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Zenn className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </Link>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            className="text-lg font-medium hover:text-gray-300"
            href="#about"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="text-lg font-medium hover:text-gray-300"
            href="#projects"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            className="text-lg font-medium hover:text-gray-300"
            href="#skills"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            className="text-lg font-medium hover:text-gray-300"
            href="#contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
