// Hero.tsx
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {AnimatedSection} from "./AnimatedSection";

export const Hero: React.FC = () => {
  return (
    <AnimatedSection id="hero">
      <div className="flex flex-col items-center space-y-8 text-center">
        <Avatar className="w-32 h-32">
          <AvatarImage src="/icon.png?height=128&width=128" alt="snow7y" />
          <AvatarFallback>SY</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            snow7y
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-400 text-xl md:text-2xl">
            Aspiring Software Developer |{" "}
            <span className="text-blue-400">Computer Science Student</span>
          </p>
        </div>
        <div className="space-x-4">
          <Link href="#contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
          <Link href="#projects">
            <Button variant="secondary" size="lg">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};
