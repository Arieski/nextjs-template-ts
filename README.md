# Next.js TypeScript Template

> **Current Versions:**
>
> - Next.js: ^14.2.30
> - React: ^18
> - Node.js: 22.15.0

This project is a highly extensible Next.js + TypeScript template, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is designed for rapid project initialization and best practices out of the box.

## Features & Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Tooling**: ESLint, Prettier
- **Internationalization**: Built-in i18n support (`src/i18n/`)
- **Structure**: Modular components (`src/components/`), context, and utilities for scalable development
- **Package Manager Support**: npm, yarn, pnpm, bun
- **Easy Customization**: Suitable for enterprise, personal, or prototyping needs

## Recommended Use Cases

- Enterprise web applications
- Personal websites and blogs
- MVPs and rapid prototyping

## Getting Started

1. **Create a new project from this template**
   - Click "Use this template" on GitHub, or run:
     ```bash
     npx degit <your-github-username>/nextjs-template-ts your-project-name
     cd your-project-name
     ```
2. **Install dependencies**
   - Use your preferred package manager:
     ```bash
     npm install
     # or
     yarn install
     # or
     pnpm install
     # or
     bun install
     ```
3. **Start the development server**

   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Recommended customizations**
   - Update project info in `package.json` (name, description, etc.)
   - Replace `src/app/page.tsx` with your own homepage content
   - Adjust the structure in `src/components`, `src/context`, `src/utils` as needed
   - Edit language files in `src/i18n/` for your own translations

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
