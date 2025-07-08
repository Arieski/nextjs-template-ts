import type { BaseTranslation } from "../i18n-types";

const en = {
  // TODO: your translations go here
  HI: "Hi {name:string}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n",
  page: {
    getStarted: "Get started by editing",
    by: "By",
    docs: {
      title: "Docs",
      desc: "Find in-depth information about Next.js features and API.",
    },
    learn: {
      title: "Learn",
      desc: "Learn about Next.js in an interactive course with quizzes!",
    },
    templates: {
      title: "Templates",
      desc: "Explore starter templates for Next.js.",
    },
    deploy: {
      title: "Deploy",
      desc: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    },
  },
} satisfies BaseTranslation;

export default en;
