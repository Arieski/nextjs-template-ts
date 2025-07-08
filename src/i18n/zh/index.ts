import type { BaseTranslation } from "../i18n-types";

const zh = {
  // TODO: your translations go here
  HI: "你好 {name:string}！如果你喜欢这个项目请点个star: https://github.com/ivanhofer/typesafe-i18n",
  page: {
    getStarted: "开始编辑吧",
    by: "由",
    docs: {
      title: "文档",
      desc: "查找 Next.js 的特性和 API 的详细信息。",
    },
    learn: {
      title: "学习",
      desc: "通过互动课程和测验学习 Next.js！",
    },
    templates: {
      title: "模板",
      desc: "探索 Next.js 的入门模板。",
    },
    deploy: {
      title: "部署",
      desc: "使用 Vercel 即刻部署你的 Next.js 站点并获得可分享的链接。",
    },
  },
} satisfies BaseTranslation;

export default zh;
