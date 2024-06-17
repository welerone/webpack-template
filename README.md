# TS + React + SCSS + Jest Webpack template 

* PostCSS in production for autoprefixer.
* Babel for TypeScript.
* ESLint for ts files.
* Stylelint for SCSS.
* Prettier for everything.
* Jest + @testing-library/react for testing.
* React-refresh for development.

## Commands

`npm start`

`npm test`

`npm run test:ci`

`npm run lint` eslint

`npm run lint:css` stylelint

`npm run lint:ci` eslint + stylelint

`npm run build` production build

`npm run build:dev` development build

## TODO

* Update `jest` to v30 to exclude unsupported dependencies.
* Update `eslint` to v9 when all plugins will support it.
* Update ESLint config with React 19 release.
* Check for `typescript-plugin-css-module` update to exclude unsupported dependencies.
* Set up chunks.
