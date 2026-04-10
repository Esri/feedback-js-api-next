# Change log

The `next` version of 5.1 is now available. Planned release date is June 2026.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Map components

### CSS variables

The following CSS variables were added to the Map components package:

- Variables to adjust the background color of table rows on child components of the [Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/#styles), [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/#styles), [Link Chart](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-link-chart/#styles), or [Video](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-video/#styles) components. These apply to components such as the [Popup](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/#styles) and [Feature](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-feature/#styles) components when displaying a table of attributes in the content:
  - `--arcgis-table-row-background-color`: adjusts the background color for table rows.
  - `--arcgis-table-row-alt-background-color`: adjusts the background color for alternating table rows.

Example:

```css
arcgis-map {
  --arcgis-table-row-background-color: #e6f4ea;
  --arcgis-table-row-alt-background-color: #f5eedc;
}
```

## Component updates

## Bug fixes and enhancements

- BUG-000173133: Fixed an issue where grouped unique value renderer labels were displaying in the Popup, FeatureTable, and FeatureForm instead of the unique values.
- [Esri Community - 1688881](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/image-media-not-displaying-in-arcgis-popup/m-p/1688881): Fixed an issue where image media referencing a URL attribute value was not displaying in the [Popup](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/).
- Enhanced the [Bookmarks component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-bookmarks/) so the heading stays fixed while scrolling, and the Add bookmark button remains accessible by floating above the list when visible.
- Enhanced the Legend's [ActiveLayerInfo](https://developers.arcgis.com/javascript/latest/references/core/widgets/Legend/support/ActiveLayerInfo/) to prevent duplicate legend requests by sharing pending requests across legend instances.
- Enhanced the [Popup](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/) so you no longer need to call [`clear()`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/#clear) before opening it with a new set of features; the popup now automatically clears previous content when features are updated.
- When [`features`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/#features) is set to a polyline graphic and the popup is opened via the [`open`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/#open) property, the [Popup](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup/) is now anchored to the middle of the polyline feature's geometry.

## Deprecations

The following are deprecated and will be removed in a future release. For functionality deprecated in earlier supported versions, see the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#map-components-changes). See the [FAQ](https://developers.arcgis.com/javascript/latest/faq/#what-does-it-mean-when-an-aspect-of-the-sdk-is-deprecated) for more information.

### core API deprecations

- Importing JavaScript Maps SDK modules using `require()` is deprecated since version 5.0 and may be removed at version 6.0. `$arcgis.import()` is the preferred way to import modules in your HTML applications.
- The `__esri` namespace is no longer supported and will be removed at 6.0. Use individual ESM imports to directly import types from their respective module files instead. See the [Release Notes](https://developers.arcgis.com/javascript/latest/release-notes/#typescript-import-changes) for more information.

### Map components deprecations

### Charts components deprecations
