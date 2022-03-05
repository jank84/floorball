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




## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

### vscode plugins
Install for syntax highlighting and IDE features:
volar https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
_I have issues with it recognizing components in the project_

or 

velur: https://marketplace.visualstudio.com/items?itemName=octref.vetur

## project scripts
build tool script are in package.json under scripts. They can be executed with `npm run <script>` or `yarn run <script>`. Yarn also shows a overview with `yarn run`.

For further args scripts can provide help msgs (if underlaying tool provides it)
```sh
npm run dev -- --help
```
Use `--` to pass args to the target script.
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production
compile project files into dist/

```sh
npm run build
```
The content of dist/ can be served wih any webserver or with
```sh
npm run preview
```

### Run Unit Tests with [Vitest](https://vitest.dev/)
Tests if components logic works.
Run in watch mode by default, executing on file changes.
```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)
Opens cypress app window to execute integration/e2e tests. Doing so opens a browser and lets the test navigate though the page.
Tests are in integration\*.spec.ts.
```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```
Headless run 
```
npm run test:e2e:ci
# or
yarn run test:e2e:ci
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
ServeWorker are disabled in development servers.
Service worker need to be served over HTTPS. Exception is localhost.

Only works with localhost: `npm run preview` but not when exposed to all network interfaces with `npm run preview -- --host`.

# deployment
add `src\firebase\config.ts from`

- prod: https://console.firebase.google.com/u/0/project/floorballstatsde/settings/general/web:ZTkxNjliZjItYjY1OS00ZDYwLWI3OTAtZTgxYjEyZDI2NDk4
- stage: https://console.firebase.google.com/u/0/project/staging-floorballstatede/settings/general/web:YzkwOTdjZDQtODhlMi00N2M1LWJhNzItYzEwNTY2NTNhNWMw



install firebase cli & `firebase init`


## list avaiable projects
```bash
firebase projects:list
```

```bash
# build project
npm run build && firebase deploy --only hosting
```
