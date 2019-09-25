# ArcGIS API for JavaScript - next

**https://js.arcgis.com/next**

Welcome to the next version of the ArcGIS API for JavaScript (4.13). 
This version of the API is currently in development and will be updated frequently until the production release in October 2019. Try out new features, perform regression testing, and get a feel for the next release - then share your feedback with the development team. Please make sure that bugs and enhancement requests are specific to https://js.arcgis.com/next and not applicable to a released version.

Please note: ArcGIS API for JavaScript release management is dynamic. Some new features and updates that appear in js.arcgis.com/next might not be present in the final production release due to a variety of factors (but will likely be present in an upcoming release).

To read all about the current version of the JavaScript API at https://developers.arcgis.com/javascript/.

## Instructions

Try the next version at https://js.arcgis.com/next or with npm using `npm install --save arcgis-js-api@next`.

The CSS is available at https://js.arcgis.com/next/esri/css/main.css or https://js.arcgis.com/next/esri/themes/<theme-name>/main.css. 

Or, if you're using [esri-loader](https://github.com/Esri/esri-loader) to help load the library, you can specify this url as [an option](https://github.com/Esri/esri-loader#from-a-specific-version):
```javascript
const options = {
  css: 'https://js.arcgis.com/next/esri/css/main.css',
  url: 'https://js.arcgis.com/next'
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

Copyright 2019 Esri

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
