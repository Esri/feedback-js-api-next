# Change log

The `next` version of 4.33 is now available. Planned release date is June 2025.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Breaking Changes

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000172156: Fixed an issue with performance at large scales when zooming and panning around a CIMSymbol with marker placements and geometric effects.
- BUG-000173550: Fixed an issue where the visibility toggle buttons in the [Layer List](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-layer-list/) component did not properly announce the associated layer to assistive technologies, such as screen readers.
- BUG-000175384: Fixed an issue where the Popup was initially opening outside the map extent when calling view.openPopup().
- BUG-000175392: Fixed an issue where some polyline [labels](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html) with more than one line were duplicated.
- BUG-000175584: Fixed an issue where the extent of a WMSLayer was sometimes incorrectly parsed from the service.
- BUG-000175667: Fixed an issue where Search widget with a polyline LayerSearchSource sometimes did not zoom to the correct feature.
- Fixed an issue where charts displayed in [MediaContent](https://developers.arcgis.com/javascript/latest/api-reference/esri-popup-content-MediaContent.html) weren't rendering when configured with raster fields.
- Fixed an issue where some fields did not display in [RouteLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-RouteLayer.html) popups.
- Enhanced printing to now support printing TrackInfo and trackLines.
- [Esri Community - 1594685](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/possibility-to-disable-paging-for-wfs-layer/m-p/1594685): Enhanced [WFSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WFSLayer.html) to disable paging when the `maxPageCount` is set to `0` or `1`.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.32 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand the complete list</summary>

The following are deprecated and will be removed in a future release:

- Accessor.watch deprecated since version 4.32. Use reactiveUtils instead.
- BasemapGallery deprecated since 4.32. Use the Basemap Gallery component instead. For information on widget deprecation, read about Esri's move to web components.
- BasemapToggle deprecated since 4.32. Use the Basemap Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- ButtonMenu deprecated since version 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
- ButtonMenuItem deprecated since version 4.30, use TableMenuItemConfig instead.
- ButtonMenuViewModel deprecated since version 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
- Compass deprecated since 4.32. Use the Compass component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectionalPad deprecated since 4.32. Use the Directional Pad component instead. For information on widget deprecation, read about Esri's move to web components.
- FeatureTable.clearSelectionFilter deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds` instead.
- FeatureTable.filterBySelection deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds` instead.
- FeatureTableViewModel.clearSelectionFilter deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds()` instead.
- FeatureTableViewModel.filterBySelection deprecated since version 4.30. Use `filterBySelectionEnabled` or `objectIds` instead.
- FieldColumn.name deprecated since version 4.30, use FieldColumn.fieldName instead.
- Fullscreen deprecated since 4.32. Use the Fullscreen component instead. For information on widget deprecation, read about Esri's move to web components.
- GeographicTransformation deprecated since version 4.32. Use GeographicTransformation instead.
- GeographicTransformationStep deprecated since version 4.32. Use GeographicTransformationStep instead.
- geometry deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- geometryEngine deprecated since version 4.32. Use [geometry
  operators](../spatial-analysis/intro-geometry-operators/) instead.
- geometryEngineAsync deprecated since version 4.32. Use geometry operators instead. You can use the web workers to perform geometry operations in a separate thread, which can improve the performance. Options include using the SDK's worker utility, creating a custom worker, or using a helper library such as Comlink.
- Home deprecated since 4.32. Use the Home component instead. For information on widget deprecation, read about Esri's move to web components.
- LinkChartView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- ListItemPanel.className deprecated since version 4.30. Use icon
- ListItemPanel.className deprecated since version 4.30. Use icon
- Locate deprecated since 4.32. Use the Locate component instead. For information on widget deprecation, read about Esri's move to web components.
- MapView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- meshUtils.georeference deprecated since version 4.30. Use `convertVertexSpace` instead.
- meshUtils.ungeoreference deprecated since version 4.30. Use `convertVertexSpace` instead.
- Navigation.mouseWheelZoomEnabled deprecated since version 4.32. Use actionMap.mouseWheel instead.
- NavigationToggle deprecated since 4.32. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- pointCloudRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- projection deprecated since version 4.32. Use the projectOperator instead.
- rasterRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- RasterStretchRenderer.statistics deprecated since version 4.31. Use customStatistics instead.
- renderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- ScaleBar deprecated since 4.32. Use the Scale Bar component instead. For information on widget deprecation, read about Esri's move to web components.
- SceneView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- Swipe deprecated since 4.32. Use the Swipe component instead. For information on widget deprecation, read about Esri's move to web components.
- symbols deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- The `"connectivity"` possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use `"junction-junction-connectivity"` instead.
- TimeExtent deprecated since version 4.31. Use TimeExtent instead.
- TimeInterval deprecated since version 4.31. Use TimeInterval instead.
- Track deprecated since 4.32. Use the Track component instead. For information on widget deprecation, read about Esri's move to web components.
- UtilityNetworkTrace.gdbVersion deprecated since version 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
- UtilityNetworkTraceViewModel.gdbVersion deprecated since version 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
- VersionManagementViewModel.versionIdentifierLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionInfoLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionManagementServiceLookup deprecated since version 4.30. Use VersioningState instead.
- VideoPlayer deprecated since version 4.33. Use the Video Player component instead.
- View2D.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- Zoom deprecated since 4.32. Use the Zoom component instead. For information on widget deprecation, read about Esri's move to web components.

</details>

### Map components deprecations

- The function `setArcgisAssetPath` is deprecated and will be removed in version 4.34.
  To set the asset path for `@arcgis/map-components` and `@arcgis/coding-components`, use `setAssetPath` instead.
  For example, import `setAssetPath` from `"@arcgis/map-components"` instead of `"@arcgis/map-components/dist/components"`.
  Refer to the Get started with npm page for more information.
- In HTML, the presence of a boolean attribute means it is true, and its absence means it is false. The properties related to visible elements have been replaced with clearer and more concise names on the following components:
  - `arcgis-table-list` - For example, replaced `visibleElementsCloseButton` with `showCollapseButton`
  - `arcgis-utility-network-associations` - For example, replaced `visibleElementsConnectivityAssociationsSettingsArrowsToggle` with `showConnectivityAssociationsSettingsArrowsToggle`
