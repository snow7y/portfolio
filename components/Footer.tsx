// Footer.tsx
import React from "react";
import Link from "next/link";
import {Github, Twitter, Mail} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 mt-32 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
          © 2023 snow7y. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
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
          <Link href="mailto:snow7y@example.com">
            <Mail className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
