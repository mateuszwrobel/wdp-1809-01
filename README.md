# Project description

This is an online store project based on free PSD template. It uses the following technologies: HTML, CSS, JS and its purpose was to improve coding skills.

# Demo

See the demo version at this [link](https://affectionate-snyder-c9bfc8.netlify.com/)

# Project initialization

### Requirements:

[Node.js](https://nodejs.org/) v8.11.3 or upper (others not tested)

### Installation

Clone or download repository to your development environment:

```sh
$ git clone https://github.com/mateuszwrobel/wdp-1809-01.git
```

To install dependencies run:

```sh
$ cd wdp-1809-01
$ npm install
```

### Builds

To build the distribution run:

```sh
$ npm run build
```

# Tasks

Begin by running `npm install` to install all dependencies.
Then you can run some useful tasks:

```sh
$ npm run build
```

It makes a production version of the project, by copying all files from the `src/` directory to `dist/` and compiling sass files to compressed css file.

```sh
$ npm run watch
```

It's useful while working on the project. It runs a build task and starts a local server from the `dist/` directory. It also runs several parallel scripts that track changes in source files, update files on the local server and refresh a web browser.
