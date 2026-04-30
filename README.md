# Cristian Ramon-Cortes Vilarrodona — Personal Website

Personal website built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/). Based on the [Astrofy](https://astrofy-template.netlify.app/) template. Deployed on [Netlify](https://app.netlify.com/).

## Live site

[https://cristianrcv.netlify.app](https://cristianrcv.netlify.app)

## Tech stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS
- [DaisyUI](https://daisyui.com/) — component library (autumn theme)
- [Netlify](https://www.netlify.com/) — hosting and CI/CD

## Project structure

```
├── src/
│   ├── components/
│   │   ├── cv/
│   │   │   └── TimeLine.astro
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HorizontalCard.astro
│   │   ├── SideBar.astro
│   │   ├── SideBarMenu.astro
│   │   └── SideBarFooter.astro
│   ├── content/
│   │   ├── blog/
│   │   ├── project/
│   │   ├── publication/
│   │   └── talk/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│       ├── blog/
│       ├── cv.astro
│       ├── index.astro
│       ├── projects.astro
│       ├── publications.astro
│       ├── talks.astro
│       └── rss.xml.js
├── public/
│   ├── favicon.svg
│   ├── profile.jpg
│   ├── files/
│   │   └── cv.pdf
│   └── img/
├── netlify.toml
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

## Pages

- **Home** — bio, featured projects, latest blog posts
- **CV** — full work experience, education, and skills
- **Projects** — research and open-source projects
- **Publications** — academic publications with abstracts and links
- **Talks** — conference talks with slides and PDFs
- **Blog** — personal blog posts

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder. Netlify runs this automatically on every push to `master`.

## Content

Content lives in `src/content/` as Markdown files, organized by collection (`blog`, `project`, `publication`, `talk`). Schemas are defined in `src/content/config.ts`.
