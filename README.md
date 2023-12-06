# ArcGIS Maps SDK for JavaScript - next

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

**https://js.arcgis.com/next**

Welcome to the next version of the ArcGIS Maps SDK for JavaScript (4.29). This version of the SDK is currently in development and will be updated frequently until the production release in February 2024. Try out new features, perform regression testing, and get a feel for the next release - then share your feedback with the development team. Please make sure that bugs and enhancement requests are specific to https://js.arcgis.com/next, `@arcgis/core@next` or `@arcgis/core@rc` and not applicable to a released version.

Please note: ArcGIS Maps SDK for JavaScript release management is dynamic. Some new features and updates that appear in js.arcgis.com/next might not be present in the final production release due to a variety of factors (but will likely be present in an upcoming release).

Read about the current version of the SDK at https://developers.arcgis.com/javascript/.

Read the [CHANGELOG.md](CHANGELOG.md) to find about new functionality, bug fixes and any breaking changes in the next version.

## Instructions

Use CDN or npm to try the next version.

### CDN

To test the next version using the hosted version, simply reference the SDK and CSS from our CDN to start using them in your app.

    <link rel="stylesheet" href="https://js.arcgis.com/next/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/next/"></script>

Only production CDN builds are available for download.

### npm

To test the next version with npm, use `npm install @arcgis/core@next` or `npm install @arcgis/core@rc`. 
More information is available in the SDK's [Introduction to tooling](https://developers.arcgis.com/javascript/latest/tooling-intro/) guide topic.

### esri-loader 

If you are using [esri-loader](https://github.com/Esri/esri-loader) to load AMD modules, use [options.version](https://github.com/Esri/esri-loader#from-a-specific-version) and specify `next` as the value. You can also lazy-load [js.arcgis.com/next/esri/themes/light/main.css](js.arcgis.com/next/esri/themes/light/main.css) by adding the `css: true` option, or you can use [any of the other methods supported by esri-loader](https://github.com/Esri/esri-loader#loading-styles) instead.

```javascript
const options = {
  version: 'next',
  css: true
};
const [Map] = await loadModules(['esri/map'], options);
```

## TypeScript typings for ES modules

Typings are included with the npm install of ES modules. For most use cases, no special TypeScript configurations are required.

## TypeScript typings for AMD modules

The typings are also included with the npm install of AMD modules, and they can be used in two ways.

### Include a `///` directive in your main TypeScript file.

For more information on using the triple-slash directive refer to the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

*main.ts*

```ts
/// <reference types="arcgis-js-api" />
```

### Or add to the `include` of your `tsconfig.json`.

For more information on using `tsconfig.json` refer to the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content).

*tsconfig.json*

```json
{
  "include": [
    "node_modules/arcgis-js-api/index.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
}
```

## Licensing

Copyright 2023 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/Esri/feedback-js-api-next/blob/main/License.txt) file.
