<!-- Automatic builds status -->
<!-- [![Build Status](https://travis-ci.org/XX)](https://travis-ci.org/XX) -->

<!-- Test coverage status -->
<!-- [![Coverage Status](https://codecov.io/github/XX)](https://codecov.io/github/XX) -->

<!-- Code status -->
[![Code Status](https://api.codacy.com/project/badge/Grade/cb48abdc642a4c159705ae77188fbf5a)](https://www.codacy.com/app/cristianrcv/personal-webpage?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cristianrcv/personal-webpage&amp;utm_campaign=Badge_Grade)

<!-- Maven central packages version -->
<!-- [![Maven Central](https://maven-badges.herokuapp.com/maven-central/XX)](https://maven-badges.herokuapp.com/maven-central/XX) -->

<!-- Dependencies update status -->
[![Dependency Status](https://www.versioneye.com/user/projects/5a1e79ae0fb24f7abcb1c5cd/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/5a1e79ae0fb24f7abcb1c5cd)

<!-- Java DOC status -->
<!-- [![Javadocs](http://javadoc.io/badge/XX.svg)](http://javadoc.io/doc/XX) -->

<!-- Main Repository language -->
[![Language](https://img.shields.io/badge/language-Shell-yellowgreen.svg)](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)

<!-- Repository License -->
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/cristianrcv/personal-webpage/blob/master/LICENSE.md)


Cristian Ramon-Cortes Vilarrodona Personal Website
=============================

[Live Website](https://cristianrcv.netlify.com)


A personal website using Academic, Hugo, and Netlify.

Based on [Academic Kickstart](https://github.com/sourcethemes/academic-kickstart.git)


## System Preparation

Since all the builds are performed on the Netlify platform you don't really need to run any system setup.

However, for local builds/test you will require to:

**Download and Install HUGO**

The steps for the HUGO installation depend on your system so please follow the instructions available in the [HUGO website](https://gohugo.io/getting-started/installing/).


## Template customization


- config.toml : General website configuration
- content
        - home : One entry per section on the main page
        - post : One entry per post
        - project : One entry per project
        - publication : One entry per publication
        - talk : One entry per talk

Multiple languages are supported by adding the language too each file entry.


## Building

```shell
hugo server --watch
firefox http://localhost:1313
```

## Deploying to Netlify

- Commit all changes
```shell
git add .
git commit -m "New version"
git push origin master
```

- Netlify triggers build on master commits so just check out the updated website

## License

Copyright 2017 [George Cushen](https://georgecushen.com).

Released under the [MIT](https://github.com/sourcethemes/academic-kickstart/blob/master/LICENSE.md) license.

