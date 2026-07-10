# Change log

The `next` version of 5.2 is now available. Planned release date is November 2026.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Map components

## Component updates

## Bug fixes and enhancements

## Deprecations

New deprecations for version 5.2 are documented on this page.

See the [FAQ](https://developers.arcgis.com/javascript/latest/faq/#what-does-it-mean-when-an-aspect-of-the-sdk-is-deprecated) for more information about the deprecation process and removal timelines.

### Core API deprecations

#### New in 5.2

New deprecations for 5.2 are TBD.

#### Previously announced deprecations

- As of 5.0, all widgets are deprecated, and components are the recommended path forward. Existing widget-based applications will continue to work as expected. Deprecation does not mean immediate removal, but widgets will no longer receive new features, and will begin to be removed in Q1 2027 (version 6.0). The recommended approach is to use the [`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/), [`arcgis-scene`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/) and [`arcgis-link-chart`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-link-chart/) components instead of the MapView, SceneView, and LinkChartView. To help with the transition, review the [migration guide](https://developers.arcgis.com/javascript/latest/migrating-to-components/), updated [programming patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/), [tutorials](https://developers.arcgis.com/javascript/latest/tutorials/), and [samples built with components](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components).
- Importing JavaScript Maps SDK modules using `require()` has been deprecated since version 5.0 and may be removed in version 6.0. [`$arcgis.import()`](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/future-proof-your-arcgis-javascript-app) is the preferred way to import modules in your HTML applications.
- The `__esri` namespace used in TypeScript is no longer supported and will be removed at 6.0. Use individual ESM imports to directly import types from their respective module files instead. See the [TypeScript import changes](https://developers.arcgis.com/javascript/latest/release-notes/#typescript-import-changes) section of the Release notes for more information.

For all other previously announced core API deprecations, see the [Release notes](https://developers.arcgis.com/javascript/latest/release-notes/#core-api-changes).

### Map components deprecations

#### New in 5.2

New deprecations for 5.2 are TBD.

#### Previously announced deprecations

For previously announced map component deprecations, see the [Release notes](https://developers.arcgis.com/javascript/latest/release-notes/#map-components-changes).

### Charts components deprecations

#### New in 5.2

New deprecations for 5.2 are TBD.

#### Previously announced deprecations

For previously announced charts component deprecations, see the [Release notes](https://developers.arcgis.com/javascript/latest/release-notes/#charts-components-changes).
