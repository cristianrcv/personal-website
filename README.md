<!-- [![Build Status](https://travis-ci.org/XX)](https://travis-ci.org/XX) -->
<!-- [![Coverage Status](https://codecov.io/github/XX)](https://codecov.io/github/XX) -->
[![Code Status](https://api.codacy.com/project/badge/Grade/cb48abdc642a4c159705ae77188fbf5a)](https://www.codacy.com/app/cristianrcv/personal-webpage?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cristianrcv/personal-webpage&amp;utm_campaign=Badge_Grade)
<!-- [![Maven Central](https://maven-badges.herokuapp.com/maven-central/XX)](https://maven-badges.herokuapp.com/maven-central/XX) -->
[![Dependency Status](https://www.versioneye.com/user/projects/59f6eca40fb24f1f01ae45a1/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/59f6eca40fb24f1f01ae45a1)
<!-- [![Javadocs](http://javadoc.io/badge/XX.svg)](http://javadoc.io/doc/XX) -->
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/cristianrcv/personal-webpage/blob/master/LICENSE)
[![Language](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)

Cristian Ramon-Cortes Vilarrodona Personal Webpage
=============================

[Live Website](https://cristianrcv.netlify.com)


A personal webpage using Jekyll, Gulp and Netify.

Based on Sleek Blog: https://github.com/bawn92/sleek_blog.git


## Sytem Preparation

Since all the builds are performed on the Netlify platform you don't really need to run any system setup.

However, for local builds/test you will require to:

**Install NODE.JS**

```shell
sudo zypper ar http://download.opensuse.org/repositories/devel:/languages:/nodejs/openSUSE_Leap_42.2/ nodejs
sudo zypper in nodejs nodejs-devel
```

**Install jekyll**

```shell
sudo npn install jekyll
sudo ln -s jekyll.ruby2.1 jekyll
```

**Install webpage dependencies**

```shell
sudo npm install -g gulp gulp-cli
sudo npm install child_process browser-sync gulp-sass gulp-autoprefixer gulp-jade gulp-util jekyll --save-dev
sudo gem install redcarpet
```


## Template customization

\_jadefiles		: Change web content

\_posts/		: Add posts content

assets/img/		: Change images (background, face, etc.)

\_layouts/default.html	: Change webpage title

\_layouts/post.html	: Change Disqus link

assets/css/		: Change image names if required


## Building

**HTML Regeneration**
```shell
gulp jade
```

**Full local Build**
```shell
gulp
```

**Build in local browser**
```shell
gulp browser-sync watch 
```

## Deploying to Netlify

- Build locally
```shell
gulp
```

- Commit all changes
```shell
git add .
git commit -m "New version"
git push origin master
```

- Netlify triggers build on master commits so just check out the updated webpage

