# ArcGIS Maps SDK for JavaScript - next

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

**https://js.arcgis.com/next**

Welcome to the next version of the ArcGIS Maps SDK for JavaScript (4.31). This version of the SDK is currently in development and will be updated frequently until the production release in October 2024. Try out new features, perform regression testing, and get a feel for the next release - then share your feedback with the development team. Please make sure that bugs and enhancement requests are specific to `next` or `rc` release candidate versions, and not applicable to a released version.

Please note: ArcGIS Maps SDK for JavaScript release management is dynamic. Some new features and updates that appear in next builds might not be present in the final production release due to a variety of factors (but will likely be present in an upcoming release).

Read about the current version of the SDK at https://developers.arcgis.com/javascript/.

Read the [CHANGELOG.md](CHANGELOG.md) to find about new functionality, bug fixes and any breaking changes in the next version.

## Instructions

Use CDN or npm to try the next version of the SDK.

### CDN

To test the next version using the ArcGIS CDN, simply reference the SDK and CSS to start using them in your app.

    <link rel="stylesheet" href="https://js.arcgis.com/next/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/next/"></script>

    <!--Add the following script tag when using map components -->
    <script type="module" src="https://js.arcgis.com/map-components/next/arcgis-map-components.esm.js"></script>

Only production CDN builds are available for download.

### npm

The next version is available for testing using npm with local builds.

#### Map components

Run `npm install @arcgis/map-components@next`. For CSS use [jsDelivr](https://www.jsdelivr.com/package/npm/@arcgis/core?tab=files):

    @import "https://cdn.jsdelivr.net/npm/@arcgis/core@next/assets/esri/themes/light/main.css";

To register the components with the custom elements registry and configure the SDK assets:

    import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
    defineMapElements(window, { resourcesUrl: "https://cdn.jsdelivr.net/npm/@arcgis/map-components@next/dist/arcgis-map-components/assets" }); 

For additional information see the SDK's [guide topic](https://developers.arcgis.com/javascript/latest/components-get-started-npm/).

#### Core API

Run `npm install @arcgis/core@next`. For CSS use [jsDelivr](https://www.jsdelivr.com/package/npm/@arcgis/core?tab=files):

    @import "https://cdn.jsdelivr.net/npm/@arcgis/core@next/assets/esri/themes/light/main.css";

For additional information see the SDK's [guide topic](https://developers.arcgis.com/javascript/latest/es-modules/).

## TypeScript typings

Typings are included with the npm installs. For most use cases, no special TypeScript configurations are required.

## Licensing

Use of the ArcGIS Maps SDK for JavaScript is subject to the terms and conditions described in SDK's Licensing & Attribution guide page: https://developers.arcgis.com/javascript/latest/licensing/.
