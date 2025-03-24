# ArcGIS Maps SDK for JavaScript - next

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

**https://js.arcgis.com/map-components/next/** and **https://js.arcgis.com/next**

Welcome to the next version of the ArcGIS Maps SDK for JavaScript (4.33). This version of the SDK is currently in development and will be updated frequently until the production release in June 2025. Try out new features, perform regression testing, and get a feel for the next release - then share your feedback with the development team. Please make sure that bugs and enhancement requests are specific to `next` or `rc` (release candidate) versions, and not applicable to a released version.

Please note: ArcGIS Maps SDK for JavaScript release management is dynamic. Some new features and updates that appear in next builds might not be present in the final production release due to a variety of factors (but will likely be present in an upcoming release).

Read the release notes for the current version of the SDK at https://developers.arcgis.com/javascript/latest/release-notes/.

Read the [CHANGELOG.md](CHANGELOG.md) to find about new functionality, bug fixes and any breaking changes in the next version.

## Instructions

Use CDN or npm to try the next version of the SDK.

### CDN

To test the next version using the ArcGIS CDN, simply reference the SDK and CSS to start using them in your app.

    <link rel="stylesheet" href="https://js.arcgis.com/next/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/next/"></script>

    <!--Add the following script tag when using map components -->
    <script type="module" src="https://js.arcgis.com/map-components/next/arcgis-map-components.esm.js"></script>

For additional information see the SDK's [Get started with CDN](https://developers.arcgis.com/javascript/latest/get-started-cdn/) guide topic.

Only production CDN builds are available for download.

### npm

The next version is available for testing using npm with local builds.

#### Map components

Run `npm install @arcgis/map-components@next`. For CSS use [jsDelivr](https://www.jsdelivr.com/package/npm/@arcgis/core?tab=files):

    @import "https://cdn.jsdelivr.net/npm/@arcgis/core@next/assets/esri/themes/light/main.css";

Then you can start importing components, for example:

    import "@arcgis/map-components/dist/components/arcgis-map";

For additional information see the SDK's [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/) guide topic.

#### Core API

Run `npm install @arcgis/core@next`. For CSS use [jsDelivr](https://www.jsdelivr.com/package/npm/@arcgis/core?tab=files):

    @import "https://cdn.jsdelivr.net/npm/@arcgis/core@next/assets/esri/themes/light/main.css";

Then you can start importing modules, for example:

    import Map from "@arcgis/core/Map";

For additional information see the SDK's guide topic for the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/#core-api) guide topic for using the core API.

## TypeScript typings

Typings are included with the npm installs. For most use cases, no special TypeScript configurations are required. For information on configuring React typings, see the [Get started with React](https://developers.arcgis.com/javascript/latest/get-started-react/#bonus-typescript) guide topic.

## Licensing

Use of the ArcGIS Maps SDK for JavaScript is subject to the terms and conditions described in SDK's Licensing & Attribution guide page: https://developers.arcgis.com/javascript/latest/licensing/.
