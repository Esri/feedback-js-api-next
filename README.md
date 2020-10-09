# ArcGIS API for JavaScript - next

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

**https://js.arcgis.com/next**

Welcome to the next version of the ArcGIS API for JavaScript (4.17).
This version of the API is currently in development and will be updated frequently until the production release in October 2020. Try out new features, perform regression testing, and get a feel for the next release - then share your feedback with the development team. Please make sure that bugs and enhancement requests are specific to https://js.arcgis.com/next and not applicable to a released version.

Please note: ArcGIS API for JavaScript release management is dynamic. Some new features and updates that appear in js.arcgis.com/next might not be present in the final production release due to a variety of factors (but will likely be present in an upcoming release).

Read about the current version of the JavaScript API at https://developers.arcgis.com/javascript/.

Read the [CHANGELOG.md](CHANGELOG.md) to find about new functionality, bug fixes and any breaking changes in the `next` version.

## Instructions

Use CDN or npm to try the next version.

### CDN

Add references to the CDN and you are ready to get started.

    <link rel="stylesheet" href="https://js.arcgis.com/next/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/next/"></script>

### npm

Install using `npm install --save arcgis-js-api@next`.

### esri-loader

Or if you're using [esri-loader](https://github.com/Esri/esri-loader) to help load the library, use [options.version](https://github.com/Esri/esri-loader#from-a-specific-version) and specify `next` as the value. You can also lazy-load [js.arcgis.com/next/esri/themes/light/main.css](js.arcgis.com/next/esri/themes/light/main.css) by adding the `css: true` option, or you can use [any of the other methods supported by esri-loader](https://github.com/Esri/esri-loader#loading-styles) instead.

```javascript
const options = {
  version: 'next',
  css: true
};
const [Map] = await loadModules(['esri/map'], options);
```

## TypeScript Typings

You can use the typings included with `arcgis-js-api@next` two ways.

### Include a `///` directive in your main TypeScript file.
```ts
// main.ts
/// <reference types="arcgis-js-api" />
```

### Or add to the `include` of your `tsconfig.json`.
```json
// tsconfig.json
{
  "compilerOptions": {},
  "include": [
    "node_modules/arcgis-js-api/index.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```

## Issues

Report issues with next version at https://github.com/Esri/feedback-js-api-next/issues/new/choose

* Bugs: Bug reports should be specific to js.arcgis.com/next and not present in the current release.
* Enhancements: For this initiative, enhancement requests should be specific to a feature in js.arcgis.com/next.

## Licensing

Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/feedback-js-api-next/blob/master/LICENSE) file.
