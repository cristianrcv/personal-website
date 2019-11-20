<!-- Code status -->
[![Code Status](https://api.codacy.com/project/badge/Grade/cb48abdc642a4c159705ae77188fbf5a)](https://www.codacy.com/app/cristianrcv/personal-webpage?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cristianrcv/personal-webpage&amp;utm_campaign=Badge_Grade)

<!-- Main Repository language -->
[![Language](https://img.shields.io/badge/language-Shell-yellowgreen.svg)](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)

<!-- Repository License -->
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/cristianrcv/personal-webpage/blob/master/LICENSE.md)


Cristian Ramon-Cortes Vilarrodona Personal Website
=============================

[Live Website](https://cristianrcv.netlify.com)


A personal website using Academic, Hugo, and Netlify.

Based on [Academic Kickstart](https://github.com/sourcethemes/academic-kickstart.git)


# System Preparation

Since all the builds are performed on the Netlify platform you don't really need to run any system setup.

However, for local builds/test you will require to:

**Download and Install HUGO**

The steps for the HUGO installation depend on your system so please follow the instructions available in the [HUGO website](https://gohugo.io/getting-started/installing/).


# Template customization


- config/ : General website configuration
- content/lang
    - authors : One entry per author
    - home : One entry per section on the main page
    - post : One entry per post
    - project : One entry per project
    - publication : One entry per publication
    - talk : One entry per talk

Multiple languages are supported by adding the content to different lang folders.


# Building

```shell
hugo server --watch
firefox http://localhost:1313
```

# Deploying to Netlify

- Commit all changes
```shell
git add .
git commit -m "New version"
git push origin master
```

- Netlify triggers build on master commits so just check out the updated website


# [Academic Kickstart](https://sourcethemes.com/academic/)

**Academic** makes it easy to create a beautiful website for free using Markdown, Jupyter, or RStudio. Customize anything on your site with widgets, themes, and language packs. [Check out the latest demo](https://academic-demo.netlify.com/) of what you'll get in less than 10 minutes, or [view the showcase](https://sourcethemes.com/academic/#expo).

**Academic Kickstart** provides a minimal template to kickstart your new website.

- [**Get Started**](#install)
- [View the documentation](https://sourcethemes.com/academic/docs/)
- [Ask a question](http://discuss.gohugo.io/)
- [Request a feature or report a bug](https://github.com/gcushen/hugo-academic/issues)
- Updating? View the [Update Guide](https://sourcethemes.com/academic/docs/update/) and [Release Notes](https://sourcethemes.com/academic/updates/)
- Support development of Academic:
  - [Donate a coffee](https://paypal.me/cushen)
  - [Become a backer on Patreon](https://www.patreon.com/cushen)
  - [Decorate your laptop or journal with an Academic sticker](https://www.redbubble.com/people/neutreno/works/34387919-academic)
  - [Wear the T-shirt](https://academic.threadless.com/)

[![Screenshot](https://raw.githubusercontent.com/gcushen/hugo-academic/master/academic.png)](https://github.com/gcushen/hugo-academic/)

## Install

You can choose from one of the following four methods to install:

* [**one-click install using your web browser (recommended)**](https://sourcethemes.com/academic/docs/install/#install-with-web-browser)
* [install on your computer using **Git** with the Command Prompt/Terminal app](https://sourcethemes.com/academic/docs/install/#install-with-git)
* [install on your computer by downloading the **ZIP files**](https://sourcethemes.com/academic/docs/install/#install-with-zip)
* [install on your computer with **RStudio**](https://sourcethemes.com/academic/docs/install/#install-with-rstudio)

Then [personalize your new site](https://sourcethemes.com/academic/docs/get-started/).

## Ecosystem

* **[Academic Admin](https://github.com/sourcethemes/academic-admin):** An admin tool to import publications from BibTeX or import assets for an offline site
* **[Academic Scripts](https://github.com/sourcethemes/academic-scripts):** Scripts to help migrate content to new versions of Academic


# License

Copyright 2017-present [George Cushen](https://georgecushen.com).

Released under the [MIT](https://github.com/sourcethemes/academic-kickstart/blob/master/LICENSE.md) license.
