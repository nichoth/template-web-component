# template web component
![tests](https://github.com/nichoth/template-web-component/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@nichoth/catch-links?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A template for vanilla web components.

## use
1. Use the template button in github. Or clone this then
`rm -rf .git && git init`. Then `npm i && npm init`.

2. Edit the source code in `src/index.ts`.

3. Delete either `.github/workflows/gh-pages-docs.yml` or `.github/workflows/gh-pages.yml`, depending on whether you want to deploy an example or docs to github pages.

4. __Edit things__
    * Edit this readme
    * edit the `build-example` command in `package.json` so that it has the right
    namespace for github pages

## featuring

* compile the source to both ESM and CJS format, and put compiled files in `dist`.
* ignore `dist` and `*.js` in git, but don't ignore them in npm. That way we
  don't commit any compiled code to git, but it is available to consumers.
* use npm's `prepublishOnly` hook to compile the code before publishing to npm.
* use [exports](./package.json#L41) field in `package.json` to make sure the right format is used
  by consumers.
* `preversion` npm hook -- lint
* `postversion` npm hook -- `git push --follow-tags && npm publish`
* eslint -- `npm run lint`
* tests run in a browser environment via `tape-run` -- see [`npm test`](./package.json#L12).
  Includes `tap` testing tools -- [tapzero](https://github.com/bicycle-codes/tapzero)
  and [tap-spec](https://www.npmjs.com/package/tap-spec)
* CI via github actions

## the component

See *[Web Component lifecycle methods](https://gomakethings.com/the-web-component-lifecycle-methods/)*.

### [attributeChangedCallback](https://gomakethings.com/how-to-detect-when-attributes-change-on-a-web-component/#the-attributechangedcallback-method)

> runs whenever an attribute on the Web Component is added, removed, or changes in value.

> For performance reasons, the attributeChangedCallback() method only watches and reacts to attributes you tell it to. To do that, you create a `static` `observedAttributes` property, with an array of attributes to watch as its value.

> You can use any attributes you’d like, including non-standard ones.


### [disconnectedCallback](https://gomakethings.com/the-web-component-lifecycle-methods/#the-connectedcallback-and-disconnectedcallback-methods)


-----------------------------------------------------------


# package name here
![tests](https://github.com/substrate-system/icons/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

`<package description goes here>`

[See a live demo](https://namespace.github.io/package-name/)

## install

Installation instructions

```sh
npm i -S @namespace/package
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@namespace/package/module'
```

### Common JS
```js
require('@namespace/package/module')
```

## CSS

### Import CSS

```js
import '@namespace/package-name/css'
```

Or minified:
```js
import `@namespace/package-name/css/min
```

### Customize CSS via some variables

```css
component-name {
    --example: pink;
}
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@namespace/package/module'
```

### HTML
```html
<div>
    <example-component></example-component>
</div>
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@namespace/package/dist/module.min.js ./public
```

#### HTML
```html
<script type="module" src="./module.min.js"></script>
```
