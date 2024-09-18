// Skills.tsx
import React from "react";
import {AnimatedSection} from "./AnimatedSection";
import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip} from "recharts";
import {Badge} from "@/components/ui/badge";

interface Language {
  name: string;
  value: number;
  color: string;
}

interface Framework {
  name: string;
  color: string;
}

interface SkillsProps {
  languages: Language[];
  frameworks: Framework[];
}

export const Skills: React.FC<SkillsProps> = ({languages, frameworks}) => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Programming Languages
          </h3>
          <div className="w-full h-[300px] md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languages}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {languages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Frameworks & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((framework, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-lg py-2 px-4"
                style={{backgroundColor: framework.color, color: "#ffffff"}}
              >
                {framework.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
