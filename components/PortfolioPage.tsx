// PortfolioPage.tsx
"use client";

import React, {useState} from "react";
import {Header} from "./Header";
import {MobileMenu} from "@/components/MobileMenu";
import {Hero} from "@/components/Hero";
import {Projects} from "@/components/Projects";
import {Skills} from "@/components/Skills";
import {About} from "@/components/About";
import {ContactForm} from "@/components/ContactForm";
import {Footer} from "@/components/Footer";
import {projects, languages, frameworks} from "./data";

export const PortfolioPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills languages={languages} frameworks={frameworks} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
