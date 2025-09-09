# Change log

The `next` version of 4.34 is now available. Planned release date is October 2025.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Map components - Shadow DOM and Slots integration

We have implemented Shadow DOM and Slots in our Map components for improved encapsulation and flexibility. This enhancement allows for better isolation of styles and functionality within the components, leading to more robust and maintainable applications.

With this change, there are a few **key updates** to be a aware of:

- When using Map components, there is **no longer a need to include a link to the core CSS**.
- Light and dark themes can be implemented via [Calcite modes](https://developers.arcgis.com/calcite-design-system/core-concepts/#modes) set directly on the `body` element.
  ```html
  <body class="calcite-mode-dark"></body>
  ```
- **Slot attribute:** Instead of using `position` for placing components and other UI elements in your map/scene, we now recommend utilizing the `slot` attribute. Possible values are "top-right", "top-left", "bottom-right", and "bottom-left".
  - If you would like to manually position a component or UI element in the view, no slot is needed and you can just use CSS directly.
- **Placement component is no longer needed.** Instead, you can directly add the slot attribute on the element you wish to place in the map.

```html
<!-- use the calcite themes for light/dark mode -->
<body class="calcite-mode-dark">
  <arcgis-map item-id="237b9584339446a0b56317b5962a4971">
    <!-- use slot instead of position for UI positioning within the map or scene components -->
    <arcgis-zoom slot="top-left"></arcgis-zoom>
    <arcgis-legend slot="bottom-right"></arcgis-legend>
    <!-- previously this button had to be wrapped in a arcgis-placement component
      now, the slot can be added directly to the component -->
    <calcite-button slot="top-right">Click me!</calcite-button>
  </arcgis-map>
</body>
```

### Refactoring web components

The following components in `map-components` have been updated under the hood to no longer wrap widget code in their implementation for this release:

- [Bookmarks](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-bookmarks/)
- [Expand](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-expand/)
- [Feature](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/)
- [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/)

By making components consistent across the SDK, their behavior will also more closely mimic what is expected from a standard web component.
We will continue to work on the remaining components in `@arcgis/map-components` that are currently wrapping widget code in their implementation.
See [Esri's move to web components](https://developers.arcgis.com/javascript/latest/components-transition-plan/) for more information about the widget transition period and future.

## Component and widget updates

## Breaking Changes

## Bug fixes and enhancements

- BUG-000147785: Fixed an issue where the size of the "Other" symbol in the legend was inconsistent with the sizes of the unique symbols when using a [UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html).
- BUG-000173527: Fixed an issue where sketching a polygon graphic would not display the trajectory line following the mouse cursor after the first click.
- BUG-000175498: Fixed an issue where deleted features remained on the map when the [client-side FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#source) was not visible at the time of deletion.
- BUG-000178706: Fixed an issue where the Expand [component](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-expand/) and [widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html) were exceeding the screen height on mobile devices.
- BUG-000171234: Remove limitations on creating and updating geometries with active `featureExpressionInfo` on [elevationInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#elevationInfo) when editing features in a scene with Editor component.
- Fixed an issue where the [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) did not correctly display [UniqueValueRenderer's](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html) when using size visual variables and definition expressions.
- ENH-000124805: Added an `order` property to the `legendOptions` of the [ClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#legendOptions), [FlowRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-FlowRenderer.html#legendOptions), [PieChartRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PieChartRenderer.html#legendOptions), [PointCloudClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudClassBreaksRenderer.html#legendOptions), [PointCloudStretchRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudStretchRenderer.html#legendOptions), [PointCloudUniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudUniqueValueRenderer.html#legendOptions), and [UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#legendOptions) to specify whether individual legend item values are displayed in ascending or descending order..
- Enhanced the [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) to improve performance when rendering legends with many layers and sublayers.
- Enhanced the [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) to support feature reduction when [respectLayerDefinitionExpression](/references/map-components/arcgis-legend/#respectLayerDefinitionExpression) is true.
- Enhanced the [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) to support [SubtypeGroupLayers](/api-reference/esri-layers-SubtypeGroupLayer.html) when using [hideLayersNotInCurrentView](/references/map-components/arcgis-legend/#hideLayersNotInCurrentView).
- Enhanced the [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) to improve the alt text for legend item symbols.
- Enhanced the [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) and [LegendViewModel](<[LegendViewModel](api-reference/esri-widgets-Legend-LegendViewModel.html)>) by adding the [loading](api-reference/esri-widgets-Legend-LegendViewModel.html#loading) property to indicate when the legend is loading or updating.
- [Esri Community - 1582608](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/4-31-labelinginfo-issue-with-cim-renderers/m-p/1582608): Fixed an issue where labels were not displayed when real world [size visual variables](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-SizeVariable.html#valueUnit) were used.
- [Esri Community - 1579003](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/client-side-streamlayer-perfomance-problems-and/m-p/1579003): Fixed an issue where on SceneView the [StreamLayerView3D](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-StreamLayerView.html#updating) property `updating` was always set to `true`.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.32 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

### core API deprecations

<details>
  <summary>Click to expand the complete list</summary>

The following are deprecated and will be removed in a future release:

- Accessor.watch deprecated since version 4.32. Use reactiveUtils.watch instead.
- AreaMeasurement3D deprecated since 4.33. Use the Area Measurement 3D component instead. For information on widget deprecation, read about Esri's move to web components.
- AreaMeasurement3DViewModel deprecated since 4.33. Use the Area Measurement 3D component or AreaMeasurementAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- BasemapGallery deprecated since 4.32. Use the Basemap Gallery component instead. For information on widget deprecation, read about Esri's move to web components.
- BasemapToggle deprecated since 4.32. Use the Basemap Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- BingMapsLayer deprecated since version 4.33.
- ButtonMenu deprecated since version 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
- ButtonMenuItem deprecated since version 4.30, use TableMenuItemConfig instead.
- ButtonMenuViewModel deprecated since version 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
- Circle.isSelfIntersecting deprecated since 4.33. Please use simplifyOperator.isSimple() instead.
- Compass deprecated since 4.32. Use the Compass component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectionalPad deprecated since 4.32. Use the Directional Pad component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectLineMeasurement3D deprecated since 4.33. Use the Direct Line Measurement 3D component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectLineMeasurement3DViewModel deprecated since 4.33. Use the Direct Line Measurement 3D component or DirectLineMeasurementAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- Editor.deleteFeatureFromWorkflow deprecated since version 4.33. Use `deleteFeatures` instead.
- EditorViewModel.deleteFeatureFromWorkflow deprecated since version 4.33. Use `deleteFeatures` instead.
- FeatureTable.clearSelectionFilter deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds` instead.
- FeatureTable.filterBySelection deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds` instead.
- FeatureTableViewModel.clearSelectionFilter deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds()` instead.
- FeatureTableViewModel.filterBySelection deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds` instead.
- FieldColumn.name deprecated since version 4.30, use FieldColumn.fieldName instead.
- Fullscreen deprecated since 4.32. Use the Fullscreen component instead. For information on widget deprecation, read about Esri's move to web components.
- FullscreenViewModel deprecated since 4.33. Use the JavaScript Fullscreen API directly instead.
- geodesicUtils deprecated since version 4.33. Use geometry operators instead.
- GeographicTransformation deprecated since version 4.32. Use GeographicTransformation instead.
- GeographicTransformationStep deprecated since version 4.32. Use GeographicTransformationStep instead.
- geometry deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- geometryEngine deprecated since version 4.32. Use geometry operators instead.
- geometryEngineAsync deprecated since version 4.32. Use geometry operators instead. You can use the web workers to perform geometry operations in a separate thread, which can improve the performance. Options include using the SDK's worker utility, creating a custom worker, or using a helper library such as Comlink.
- Home deprecated since 4.32. Use the Home component instead. For information on widget deprecation, read about Esri's move to web components.
- ImageryLayer.fetchImage deprecated since version 4.33. Use ImageryLayer.fetchPixels instead.
- Legend deprecated since 4.34. Use the Legend component instead. For information on widget deprecation, read about Esri's move to web components.
- LineOfSight deprecated since 4.33. Use the Line Of Sight component instead. For information on widget deprecation, read about Esri's move to web components.
- LineOfSightViewModel deprecated since 4.33. Use the Line Of Sight component or LineOfSightAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- LineOfSightTarget deprecated since 4.33. Use the LineOfSightAnalysisTarget on LineOfSightAnalysis instead.
- LinkChartView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- Locate deprecated since 4.32. Use the Locate component instead. For information on widget deprecation, read about Esri's move to web components.
- MapView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- meshUtils.georeference deprecated since version 4.30. Use `convertVertexSpace` instead.
- meshUtils.ungeoreference deprecated since version 4.30. Use `convertVertexSpace` instead.
- Navigation.mouseWheelZoomEnabled deprecated since version 4.32. Use actionMap.mouseWheel instead.
- NavigationToggle deprecated since 4.32. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- NavigationToggleViewModel deprecated since 4.33. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- pointCloudRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- Polygon.isSelfIntersecting deprecated since 4.33. Please use simplifyOperator.isSimple() instead.
- Print deprecated since 4.33. Use the Print component instead. For information on widget deprecation, read about Esri's move to web components.
- projection deprecated since version 4.32. Use the projectOperator instead.
- rasterRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- RasterStretchRenderer.statistics deprecated since version 4.31. Use customStatistics instead.
- renderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- ScaleBar deprecated since 4.32. Use the Scale Bar component instead. For information on widget deprecation, read about Esri's move to web components.
- SceneView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- Search deprecated since 4.33. Use the Search component instead. For information on widget deprecation, read about Esri's move to web components.
- Slice deprecated since 4.33. Use the Slice component instead. For information on widget deprecation, read about Esri's move to web components.
- SliceViewModel deprecated since 4.33. Use the Slice component or SliceAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- Swipe deprecated since 4.32. Use the Swipe component instead. For information on widget deprecation, read about Esri's move to web components.
- symbols deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- The `"connectivity"` possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use `"junction-junction-connectivity"` instead.
- The following named `easing` presets on GoToOptions3D presets are deprecated at 4.33: `in-cubic`, `out-cubic`, `in-out-cubic`, `in-expo`, `out-expo`, `in-out-expo`, and `in-out-coast-quad`. Please use `cubic-in`, `cubic-out`, `cubic-in-out`, `expo-in`, `expo-out`, `expo-in-out`, and `quad-in-out-coast` instead.
- TimeExtent deprecated since version 4.31. Use TimeExtent instead.
- TimeInterval deprecated since version 4.31. Use TimeInterval instead.
- TimeZoneLabel deprecated since 4.33. Use the Time Zone Label component instead. For information on widget deprecation, read about Esri's move to web components.
- Track deprecated since 4.32. Use the Track component instead. For information on widget deprecation, read about Esri's move to web components.
- UtilityNetworkTrace.gdbVersion deprecated since version 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
- UtilityNetworkTraceViewModel.gdbVersion deprecated since version 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
- VersionManagementViewModel.versionIdentifierLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionInfoLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionManagementServiceLookup deprecated since version 4.30. Use VersioningState instead.
- VideoPlayer deprecated since 4.33. Use the Video Player component instead. For information on widget deprecation, read about Esri's move to web components.
- View2D.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- Weather deprecated since 4.33. Use the Weather component instead. For information on widget deprecation, read about Esri's move to web components.
- WeatherViewModel deprecated since 4.33. Use the Weather component instead. For information on widget deprecation, read about Esri's move to web components.
- WebStyleSymbol.fetchCIMSymbol deprecated since version 4.33. Use `fetchSymbol` instead. Pass `{ acceptedFormats: "cim"] }` as options to [`fetchSymbol` to retrieve only CIM symbols.
- Zoom deprecated since 4.32. Use the Zoom component instead. For information on widget deprecation, read about Esri's move to web components.

</details>

### Map components deprecations

<details>
  <summary>Click to expand the complete list</summary>

- The `focusTrapEnabled` property on the Expand component is deprecated since 4.33. Use `focusTrapDisabled` instead.
- The `hideLastEditInfo` property on the Feature component is deprecated since 4.33. Use `hideLastEditedInfo` instead.
- The `addLayer` method on the Link Chart, Map, and Scene components is deprecated since 4.33. Use `element.map.add(layer)` instead.
- The `addLayers` method on the Link Chart, Map, and Scene components is deprecated since 4.33. Use `element.map.addMany([layer])` instead.
- The `addTable` method on the Map and Scene is deprecated since 4.33. Use `element.map.tables.add(table)` instead.
- The `addTables` method on the Map and Scene is deprecated since 4.33. Use `element.map.tables.addMany([table])` instead.
- The `arcgis-directline-measurement-3d` component is deprecated since 4.33. Use `arcgis-direct-line-measurement-3d` instead.
- The `highlightOptions` property on the Map and Scene is deprecated since 4.33. Use `highlights` instead.
- The `visibleElementsConnectivityAssociationsSettingsArrowsToggle` property on the Utility Network Associations component is deprecated since 4.32, use showConnectivityAssociationsSettingsArrowsToggle instead.
- The `visibleElementsConnectivityAssociationsSettingsCapSelect` property on the Utility Network Associations component is deprecated since 4.32, use showConnectivityAssociationsSettingsCapSelect instead.
- The `visibleElementsConnectivityAssociationsSettingsColorPicker` property on the Utility Network Associations component is deprecated since 4.32, use hideConnectivityAssociationsSettingsColorPicker instead.
- The `visibleElementsConnectivityAssociationsSettingsStylePicker` property on the Utility Network Associations component is deprecated since 4.32, use hideConnectivityAssociationsSettingsStylePicker instead.
- The `visibleElementsConnectivityAssociationsSettingsWidthInput` property on the Utility Network Associations component is deprecated since 4.32, use hideConnectivityAssociationsSettingsWidthInput instead.
- The `visibleElementsMaxAllowableAssociationsSlider` property on the Utility Network Associations component is deprecated since 4.32, use showMaxAllowableAssociationsSlider instead.
- The `visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle` property on the Utility Network Associations component is deprecated since 4.32, use showStructuralAttachmentAssociationsSettingsArrowsToggle instead.
- The `visibleElementsStructuralAttachmentAssociationsSettingsCapSelect` property on the Utility Network Associations component is deprecated since 4.32, use showStructuralAttachmentAssociationsSettingsCapSelect instead.
- The `visibleElementsStructuralAttachmentAssociationsSettingsColorPicker` property on the Utility Network Associations component is deprecated since 4.32, use hideStructuralAttachmentAssociationsSettingsColorPicker instead.
- The `visibleElementsStructuralAttachmentAssociationsSettingsStylePicker` property on the Utility Network Associations component is deprecated since 4.32, use hideStructuralAttachmentAssociationsSettingsStylePicker instead.
- The `visibleElementsStructuralAttachmentAssociationsSettingsWidthInput` property on the Utility Network Associations component is deprecated since 4.32, use hideStructuralAttachmentAssociationsSettingsWidthInput instead.

</details>

### Charts components deprecations

- The exportImage method on the Chart component is deprecated since 4.33. Use exportAsImage instead.
- All subTitle references on the Chart component are renamed to subtitle.
- WebMapWebChart interface is deprecated, use WebChart instead.
- WebMapWebBoxPlot interface is deprecated, use WebBoxPlot instead.
- WebMapWebGaugeChart interface is deprecated, use WebGaugeChart instead.
- WebMapWebRadarChart interface is deprecated, use WebRadarChart instead.
- RESTStatisticType interface is deprecated, use WebChartStatisticType instead.
  - percentile_cont statistic type is deprecated, use percentile-continuous instead.
  - percentile_dist statistic type is deprecated, use percentile-discrete instead.
