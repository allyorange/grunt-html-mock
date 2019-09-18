# HTML Mock Creator With Pug and Sass Running on Grunt

## Installation

```bash
git clone git@github.com:allyorange/grunt-html-mock.git
cd grunt-html-mock
npm ci
```

## Live Reloading

```bash
npx grunt
```

changes under `src/` folder immediately show in your browser

This is also available on other devices. When live reloading starts in your terminal you can see :

```bash
[Browsersync] Access URLs:
 ----------------------------------
       Local: http://localhost:3000
    External: http://xxxxxxxx:3000
 ----------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ----------------------------------
```

The External URL works on your phone if it is on the same network.

## Build

```bash
npx grunt build
```

output files under `public/` folder

## Expanded Build

```bash
npx grunt build:expanded
```

output CSS files with the expanded style

https://sass-lang.com/documentation/cli/dart-sass#style
