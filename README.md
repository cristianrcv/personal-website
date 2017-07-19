Cristian Ramon-Cortes Vilarrodona Personal Webpage
=============================

[Live Website](https://cristianrcv.netlify.com)


A personal webpage using Jekyll and Netify.

Based on Sleek Blog: https://github.com/bawn92/sleek_blog.git


## Sytem Preparation

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

**Build**

```shell
gulp
```


## Template customization

Under construction

