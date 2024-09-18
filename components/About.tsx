// About.tsx
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {AnimatedSection} from "./AnimatedSection";
import {Noto_Serif_JP} from "next/font/google";
import {AboutData} from "@/components/data";
import {Separator} from "@/components/ui/separator";

const noteSelifJP = Noto_Serif_JP({subsets: ["latin"], weight: ["400"]});

export const About: React.FC = () => {
  const data_ja = AboutData.ja;
  const data_en = AboutData.en;

  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-xl text-gray-300">
          {data_en.data_1}{" "}
          <span className="text-blue-400">
            <a
              href="https://kyoto-tech.ac.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data_en.school}
            </a>
          </span>{" "}
          {data_en.data_2}
        </p>
        <p className="text-xl text-gray-300">
          <span className="text-blue-400">{data_en.securityCircle}</span>{" "}
          {data_en.data_3}
        </p>
        <Separator className="my-4" />
        <div className={noteSelifJP.className}>
          <p className="text-xl text-gray-300">
            {data_ja.data_1}{" "}
            <span className="text-blue-400">
              <a
                href="https://kyoto-tech.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data_ja.school}
              </a>
            </span>{" "}
            {data_ja.data_2}
          </p>
          <p className="text-xl text-gray-300">
            <span className="text-blue-400">{data_ja.securityCircle}</span>{" "}
            {data_ja.data_3}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};
