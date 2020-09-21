## Overview

This is currently in development and is not intended for use in production applications.

Consuming the API with [@arcgis/core ES modules](https://www.npmjs.com/package/@arcgis/core) will be an additional option alongside the existing AMD modules. We are looking for your help to ensure that the new modules work seamlessly with modern web developer tooling.
 
## Installation and usage

See https://www.npmjs.com/package/@arcgis/core

```
npm install @arcgis/core

// Example:
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

const webmap = new WebMap({
    portalItem: { id: itemId }
});

const view = new MapView({
    map: webmap,
      container: 'viewDiv'
});
```

## Feedback

Report issues for @arcgis/core at https://github.com/Esri/feedback-js-api-next/issues/new/choose

We are looking for feedback on these types of issues with 3rd party frameworks, module bundlers and Node.js:
* Installation/Configuration
* Usage with the JS API capabilities: 2D/3D, renderers, layers, etc.
* Any build or runtime errors
* Recommendations on doc needed for implementation/tips and tricks 
* If using Node.js, what are your use cases?
* Overall performance
* Initial load performance
* Post-load performance
* Comparisons between CDN, esri-loader, arcgis-webpack-plugin and ES modules

## FAQ

* What browsers are supported by the ES Modules? 
  - Edge/Chrome/Firefox/Safari latest. No support for IE 11 or Edge Legacy 
* Will the AMD modules continue to be supported and made available with each release?
  - Yes, it will be updated and made available with each release for the foreseeable future. 
* How will the ES Modules be made available to customers? 
  - NPM, possibly CDN in the future as an additional option.
* Why is there a difference between the on-disk bundle size versus the initial application load size? 
  - The JS API loads modules on demand. The initial load of an application will not require all of the modules that are bundled into the distribution build. 
