// MobileMenu.tsx
import React from "react";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {X, Github, Twitter} from "lucide-react";

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
        <nav className="flex flex-col space-y-4 p-4">
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
            href="#about"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="text-lg font-medium hover:text-gray-300"
            href="#contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
        <div className="flex space-x-4 p-4 mt-auto">
          <Link
            href="https://github.com/snow7y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link
            href="https://twitter.com/snow7y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};
