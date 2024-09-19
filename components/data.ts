// data.ts

export interface Project {
  title: string;
  description: string;
  url: string;
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


export const AboutData = {
  ja: {
    school: "京都デザイン＆テクノロジー専門学校",
    securityCircle: "セキュリティサークル",
    data_1: "私は",
    data_2:
      "に通う学生です。\nプログラミングの勉強をしており、特にAIについてのアプリ開発などをしています。\nフロントとバックを幅広く学んでいますが、メインはバックエンドです。",
    data_3:
      "に所属しており、その中で生成AIを用いたアプリケーション開発を行っています。",
  },
  en: {
    school: "Kyoto College of Design and Technology",
    securityCircle: "Security Circle",
    data_1: "I am a student at",
    data_2:
      ". I study programming, especially AI application development. I am learning a wide range of front and back, but my main focus is on the backend.",
    data_3:
      "and I am developing applications using generative AI.",
  },
};

export const projects: Project[] = [
  {
    title: "Intel 企業連携プロジェクト",
    description:
      "Intel株式会社様との連携プロジェクトにて、製品のプロモーション提案やIntelVinoを用いたAIアプリケーション開発をおこないました。",
    url: "https://forest.watch.impress.co.jp/docs/special/1598339.html",
  },
  {
    title: "Microsoft 企業連携プロジェクト",
    description: "生成AIを用いたアプリケーション開発をおこないました。",
    url: "https://www.microsoft.com/ja-jp/industry/blog/microsoft-in-business/2024/04/05/case-study-utilization-of-azure-openai-service-by-students/",
  },
  {
    title: "ポノス 企業連携プロジェクト",
    description:
      "ポノス株式会社様との連携プロジェクトにて、にゃんこ大戦争の新規ユーザー獲得を目的としたプロモーション提案をおこないました。",
    url: "https://www.ponos.jp/",
  },
  {
    title: "セキュリティサークル",
    description:
      "セキュリティサークルに所属し、生成AIを用いた学内用アプリの開発を行いました。",
    url: "https://github.com/KTC-Security-Circle",
  },
];

export const languages: Language[] = [
  {name: "Python", value: 35, color: "#3776AB"},
  {name: "html/css", value: 25, color: "#F7DF1E"},
  {name: "C#", value: 15, color: "#00599C"},
  {name: "Java", value: 10, color: "#007396"},
  { name: "JS/TS", value: 10, color: "#3178C6" },
  {name: "others", value: 5, color: "#333333"},
];

export const frameworks: Framework[] = [
  // できるだけ色は被らないように
  // python
  {name: "FastAPI", color: "#009688"},
  {name: "Django", color: "#092E20"},
  {name: "LangChain", color: "#339933"},

  // html/css
  {name: "Bootstrap", color: "#7952B3"},
  {name: "usebootstrap", color: "#38B2AC"},

  // JS/TS
  {name: "React", color: "#61DAFB"},
  {name: "Next.js", color: "#000000"},
  {name: "Vue.js", color: "#4FC08D"},
  {name: "Nuxt.js", color: "#00C58E"},

  // C#
  {name: ".NET", color: "#512BD4"},
  { name: "Unity", color: "#CC0000" },
  
  // others
  { name: "MySQL", color: "#02569B" },
  { name: "Azure", color: "#FFCA28" },
  { name: "Git", color: "#F05032" },
  { name: "Docker", color: "#2496ED" },
];

