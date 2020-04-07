# Electrate

## Installing

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/mmick66/electrate my-app
# Go into the repository
cd my-app
# Install dependencies
npm install
```

## Running

```
npm run start
```

## Packaging

Replace the icon inside the `build` folder and run

```bash
npm run release
```

Check the `dist` folder for the app


## How Electron Works with React

This template compiles all `*.js` files in `src` into standard JS and copies it to `app`. There it includes `*.html` and `*.css` together with the `main.js` start file. From then it runs and packages using `gulp` as run through `npm`.


<p align="center"> 
  <img src="https://preview.ibb.co/jF9Akx/electron_sequence.png" alt="electron_sequence" border="0">
</p>


## Extending the Template

Some useful tools include:

1. [Spectron](https://electronjs.org/spectron)
2. [Karma](https://karma-runner.github.io/2.0/index.html) + [Jasmine](https://jasmine.github.io/)
3. [Ant Design](https://ant.design/) (a React based UI Framework)
