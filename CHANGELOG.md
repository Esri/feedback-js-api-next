# Change log

The `next` version of 5.2 is now available. Planned release date is November 2026.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Focus region for keyboard navigation

A new `focusRegion` property has been added to the [Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/), [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/), and [Link Chart](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-link-chart/) components to improve keyboard navigation and accessibility. It defines the portion of the map or chart that receives focus, enabling keyboard users to quickly navigate to, inspect, and interact with specific areas of the view.

The focus region is built into the Map, Scene, and Link Chart components and can be toggled using the `Shift` + `Alt`/`Option` + `O` keyboard shortcut while the view component is in focus. By default, the shortcut is enabled only when a popup component is slotted into the view component, or `popupComponentEnabled` is set, and when the `popupDisabled` property is `false`. Use `focusRegionShortcutEnabled` to explicitly enable or disable the keyboard shortcut for custom selection handling. 

Below is a summary of the available actions and their corresponding keyboard shortcuts or properties:

| Action | Keyboard Shortcut / Property |
|--------|----------------------------|
| Enable or disable focus region | Use the `Shift` + `Alt`/`Opt` + `O` keyboard shortcut while the view component is in focus or set the `focusRegionVisible` property to `true` or `false`. |
| Resize focus region | Use the `Shift` + `Alt`/`Opt` + Up/Down arrow keys while the focus region is active. |
| Open the [popup](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-popup) for features in the focus region | Press `Enter` or `Spacebar` while the focus region is active. |
| Enable or disable the `Shift` + `Alt`/`Opt` + `O` keyboard shortcut | Set `focusRegionShortcutEnabled`. |

Explore this new feature in the [Select features with a focus region](https://codepen.io/laurenb14/pen/QwpmJLO?editors=1000) example.

## More precise keyboard navigation

[Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/) and [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/) components, along with MapView and SceneView, now support more precise keyboard panning. Hold `Alt` while pressing an arrow key to move in smaller increments, or hold `Shift` to move in larger increments. Press multiple arrow keys at once to pan diagonally.

## Attribution enhancements

### Improved contrast

The contrast of attribution text has been enhanced to improve readability and accessibility across different map backgrounds. By default, a blur has been added and the background, opacity, and text colors have been adjusted for improved contrast in both light and dark modes.

### Auto theming

A new `attributionMode` value of `auto` has been added to the [Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/#attributionMode), [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/#attributionMode) and [Link Chart](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-link-chart/#attributionMode) components. Using `auto` will sync the attribution theme with the rest of your page based on the [Calcite mode](https://developers.arcgis.com/calcite-design-system/core-concepts/#modes). The `light` and `dark` modes can still be used explicitly to set the attribution to a different theme than the rest of the application.

## CSS variables for Map, Scene, and Link Chart

The following CSS variables are now available for customizing the appearance of the [Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map), [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene), and [Link Chart](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-link-chart) components.

- `--arcgis-view-corner-radius`: Sets the corner radius for the Map, Scene, and Link Chart components.
- `--arcgis-focus-region-outer-border-color`: Sets the color of the focus region’s outer border.
- `--arcgis-focus-region-inner-border-color`: Sets the color of the focus region’s inner border.
- `--arcgis-focus-region-border-width`: Sets the width of the focus region’s border.


## Bug fixes and enhancements

- BUG-000152775: Fixed an issue where MapImageLayer did not include the map scale in the export request.
- BUG-000169782: Fixed an issue where MapImageLayer was not rendering properly when the browser scale changed.
- BUG-000179364: Fixed an issue where the Search component within an Expand component did not display search suggestions on iOS.
- BUG-000181719: Fixed an issue that prevented the Popup from displaying when a feature had a null attribute value referenced by a unique value renderer group.
- BUG-000186824: Fixed an issue that caused the map to crash when quantization produced `NaN` values in feature geometries.
- Fixed an issue where `dragEnabled` was not functioning correctly within group layers in the Layer List (Next) component.
- Fixed an issue in the Layer List (Next) component where unnamed layers were labeled “Untitled table” instead of “Untitled layer”.
- Fixed an issue where custom HTML panel content in the Layer List (Next) component disappeared after closing and reopening a panel.
- Fixed an issue where triggering catalog-layer actions in the Layer List (Next) component threw an exception.
- Fixed an issue where nested group layers were duplicated after being moved to another level in the Layer List (Next) and Basemap Layer List (Next) components.
- Fixed an issue in the Layer List (Next) component where the Legend icon was not displayed when panel content included `"legend"` in an array.
- Fixed an issue in the Legend where role attributes were not being correctly applied for accessibility.
- Fixed an issue where relationship elements were not being displayed when browsing aggregate features in the Popup and Features (Next) components.
- ENH-000173879: Improved ARIA support for buttons in the Popup and Features (Next) components to enhance accessibility for screen reader users.
- ENH-000180289: Enhanced the Basemap Toggle component to provide context to assistive technologies when the activeBasemap is changed.
- Added support for `messageOverrides` in the Area Measurement 2D, Distance Measurement 2D, Area Measurement 3D, Direct Line Measurement 3D, and Volume Measurement components, allowing default localized strings to be overridden.
- Enhanced the 2D MediaLayerView to support interactively moving source points. See the MediaLayer with control points sample for more information.
- Improved the color contrast of attachment icons in the Popup, Features (Next), and Feature (Next) components for greater visual clarity.
- When the Popup and Features (Next) components are open in `list` `initial-display-mode`, the focus is automatically set back to the selected feature in the feature list after going back from viewing an individual feature.

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
