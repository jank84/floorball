# floorball

This template should help get you started developing with Vue 3 in Vite.


## hints jan

https://github.com/vuejs/awesome-vue

### install nvm (node version manager)
https://github.com/nvm-sh/nvm#installing-and-updating

Install & switch a new version to e.g. version 16
```
nvm install 16
nvm use 16
```

### (optional) install yarn package manager
With node comes npm (node package manager) which is slow
Yarn is faster and replaces it
```
npm install -g yarn@berry
```

### vscode plugins
Install for syntax highlighting and IDE features:
volar https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
_I have issues with it recognizing components in the project_

or 

velur: https://marketplace.visualstudio.com/items?itemName=octref.vetur

### project scripts
build tool script are in package.json under scripts. They can be executed with `npm run <script>` or `yarn run <script>`. Yarn also shows a overview with `yarn run`.

For further args scripts can provide help msgs (if underlaying tool provides it)
```
npm run dev -- --help
# or
yarn run dev --help
```

### dev build (using hotreload)
```
npm run dev -- --host
# or
yarn run dev --host
```

### release build
compiled into dist/
```
npm run build
# or
yarn run build
```

The content of dist/ can be servied wih any webserver or with
```
npm run preview
# or
yarn run preview
```

Or via https with
```
yarn run serve
```
see [yarn run preview does not work with](#yarn-run-preview-does-not-work-with-https)

### tests

#### unit tests
Tests if components logic works
Run in watch mode by default, executing on file changes.
```
npm run test:uni
# or
yarn run test:uni
```
#### unit e2e
Opens cypress app window to execute integration/e2e tests. Doing so opens a browser and lets the test navigate though the page.
Tests are in integration\*.spec.ts.

```
npm run test:e2e
# or
yarn run test:e2e
```

Headless run 
```
npm run test:e2e:ci
# or
yarn run test:e2e:ci
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## trouble shooting
### yarn run preview does not work with https
```
yarn run preview --https
```
Error: ` this._implicitHeader is not a function #2754`
https://github.com/vitejs/vite/issues/2754

caused by error in compression for https/2

fix: sirv-cli as server
https://github.com/Greenheart/pagecrypt/issues/6#issue-866730815

install sirv-cli
```
npm install sirv-cli -D
```

create https .pems
```
openssl req -new -x509 -keyout priv.pem -out cert.pem -days 365 -nodes
```
add to package.json
```
"scripts": {
    "serve": "sirv dist --http2 --key priv.pem --cert cert.pem --host",
}
```

### if yarn run build fails with  "Rollup failed to resolve import"

use npm

```
# install modules
npm install

# build & serve
npm run build
npm run preview -- --host
```

### service worker & offline

Only works with localhost: `npm run preview` not `npm run preview -- --host`

Or 

served on https