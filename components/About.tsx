// About.tsx
import React from "react";
import {AnimatedSection} from "./AnimatedSection";

export const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-xl text-gray-300">
          I'm a{" "}
          <span className="text-blue-400">
            passionate Computer Science student
          </span>{" "}
          with a keen interest in web development and software engineering.
          Currently pursuing my degree at XY University, I'm constantly learning
          and applying new technologies to solve real-world problems.
        </p>
        <p className="text-xl text-gray-300">
          When I'm not coding, you can find me{" "}
          <span className="text-blue-400">
            contributing to open-source projects
          </span>
          , attending tech meetups, or exploring the latest in AI and machine
          learning.
        </p>
      </div>
    </AnimatedSection>
  );
};
