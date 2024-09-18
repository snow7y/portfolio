// data.ts
export interface Project {
  title: string;
  description: string;
}

export interface Language {
  name: string;
  value: number;
  color: string;
}

export interface Framework {
  name: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and Node.js",
  },
  {
    title: "Weather App",
    description: "A responsive weather application using OpenWeatherMap API",
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with user authentication and comments",
  },
];

export const languages: Language[] = [
  {name: "JavaScript", value: 30, color: "#F7DF1E"},
  {name: "Python", value: 25, color: "#3776AB"},
  {name: "Java", value: 20, color: "#007396"},
  {name: "C++", value: 15, color: "#00599C"},
  {name: "TypeScript", value: 10, color: "#3178C6"},
];

export const frameworks: Framework[] = [
  {name: "React", color: "#61DAFB"},
  {name: "Node.js", color: "#339933"},
  {name: "Express", color: "#000000"},
  {name: "Django", color: "#092E20"},
  {name: "Flutter", color: "#02569B"},
  {name: "Vue.js", color: "#4FC08D"},
  {name: "Angular", color: "#DD0031"},
  {name: "Spring Boot", color: "#6DB33F"},
  {name: "Flask", color: "#000000"},
  {name: "Ruby on Rails", color: "#CC0000"},
];
