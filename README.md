# template ts

A template for typescript *dependency* modules.

## use
1. Use the template button in github. Or clone this then `rm -rf .git && git init`. Then `npm i && npm init`.

2. Edit the source code in `src/index.mjs`.

## featuring

* compile the source to both ESM and CJS format, and put compiled files in `dist`.
* ignore `dist` and `*.js` in git, but don't ignore them in npm. That way we don't commit any compiled code to git, but it is available to consumers.
* use npm's prepublishOnly hook to compile the code before publishing to npm.
* use `exports` field in `package.json` to make sure the right format is used by consumers.
* `preversion` npm hook -- lint via `standardx`.
* `postversion` npm hook -- `git push && git push --tags && npm publish`
* eslint via [standardx](https://www.npmjs.com/package/standardx) -- `npm run lint`
* tests are designed for a browser environment. Build tests with `esbuild` and run them with `tape-run`. Includes `tap` tools -- [tapzero](https://github.com/socketsupply/tapzero) and [tap-arc](https://www.npmjs.com/package/tap-arc)
