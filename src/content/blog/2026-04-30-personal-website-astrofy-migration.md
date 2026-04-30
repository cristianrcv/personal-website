---
title: "Migrating my personal website to Astro"
description: "Why I decided to leave Hugo Academic behind and rebuild my personal website with Astro, Tailwind CSS, and DaisyUI — and how surprisingly painless it was."
pubDate: "2026-04-30"
tags: ["personal-website", "netlify", "astro", "tailwindcss"]
---

If you have been following this website for a while, you may have noticed the new look. This is the third time I have rebuilt my personal website, and as with the previous ones, I feel like writing a few words about the experience.

## Why change at all?

The previous version was built with [Hugo](https://gohugo.io/) and the [Hugo Academic](https://academic-demo.netlify.app/) theme, which I had been using since 2018. For a long time it worked great: it had a CV section, a publications list, a talks section, a blog, and project pages — everything I needed. However, over time it started showing its age.

Hugo Academic evolved into a full product called [Wowchemy](https://wowchemy.com/) and then [Hugo Blox](https://hugoblox.com/), and keeping up with the breaking changes between versions became increasingly painful. The last update I documented on this blog — back in 2019 — already required me to essentially rebuild the site from scratch. By 2025, the theme had drifted so far from what I had that simply upgrading Hugo to the latest version broke the build in several places: removed APIs, changed template syntax, raw HTML blocked by default. I was spending more time chasing compatibility issues than writing content.

On top of that, Hugo Academic was always opinionated in ways that did not quite fit me. The multi-language support, the widget system, the reliance on a Git submodule for the theme — it all added friction. I just wanted a clean, fast, good-looking personal site that I could understand and maintain without fighting the framework.

## Why Astro?

When I started looking at alternatives, my requirements were simple:

- **Fast and static** — I do not need a backend, just a good static site generator.
- **Modern tooling** — I wanted something that felt alive, with an active community and regular updates.
- **Easy to customise** — No magic theme system, no opaque configuration. Just components I can read and edit.
- **Same sections** — Home, CV, Projects, Publications, Talks, Blog. The same structure I had before.

I looked at a few options — Next.js, Gatsby, Nuxt — but they all felt like overkill for a personal site. [Astro](https://astro.build) stood out immediately. It is built for content-first sites, ships zero JavaScript by default, and has excellent support for Markdown and MDX. The community has also grown a lot in the last couple of years.

For the template, I went with [Astrofy](https://astrofy-template.netlify.app/) by Manuel Ernesto Garcia. It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [DaisyUI](https://daisyui.com/) for components, which gave me a clean base with a sidebar layout, blog support, and a CV page — very close to what I had with Hugo Academic.

## How was the migration?

Honestly, much easier than the 2019 Hugo update.

The content migration was mostly mechanical: copy Markdown files, adjust the frontmatter to match Astro's content collection schemas, and fix a few links. I added a couple of new pages (Publications, Talks) that did not exist as standalone pages in the Astrofy template, but adding them was straightforward — just a new `.astro` page and a content collection.

The biggest decisions were around what to simplify. I dropped the multi-language support entirely — the vast majority of visitors read English, and maintaining four languages for the same content was a burden I never truly kept up with. I also removed the Store section from the template since I have nothing to sell.

The theme took a bit of iteration. I tried a few DaisyUI themes before settling on **autumn**, which I think strikes a good balance between warm and professional.

Deployment was unchanged: Netlify picks up commits from GitHub and builds the site automatically. The only thing I needed to add was a `netlify.toml` pointing to the `dist/` folder and setting the Node version.

## What I like about the new setup

- **I understand every file.** There is no submodule, no theme magic. The components are plain `.astro` files I can open and edit.
- **Tailwind makes styling easy.** I am not a designer, but Tailwind lets me tweak spacing, colours, and layout without writing custom CSS.
- **Build times are fast.** Astro's build is noticeably quicker than Hugo Academic was with all its dependencies.
- **DaisyUI themes are great.** Switching the look of the entire site is a one-line change in `BaseLayout.astro`.

## What I would tell someone else considering the move

If you are running Hugo Academic and starting to feel the friction, Astro + Astrofy is a very reasonable migration path. The content model is similar (Markdown files with frontmatter), the deployment story is identical if you are already on Netlify or Vercel, and the result is a codebase you will actually enjoy working in.

The migration is not zero effort — you will need to adapt your content schemas and rebuild any custom pages — but it is a one-time cost that pays off quickly. And unlike chasing Hugo Academic compatibility fixes, you are unlikely to need another full rebuild for a long time.

As always: I am not a web developer or a designer, so if something looks off, feel free to reach out!
