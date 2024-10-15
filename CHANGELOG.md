# Change log

The `next` version of 4.31 is now available. Planned release date is October 2024.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Component packages

- Chart Components might come out of beta at 4.31.

## Layer updates

### MediaLayer

With this release, [VideoElements](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-VideoElement.html) can now be saved to an existing or new portal item using the [`save()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MediaLayer.html#save) and [`saveAs()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MediaLayer.html#saveAs) methods. We have also added support for [interactive](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-MediaLayerView.html#interactive) placement of media layers in 2D [MapViews](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html).

## Component and widget updates

# Breaking Changes

- Version 4.31 is the last release of the AMD npm package [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api). Use components or the @arcgis/core ES modules package, instead. See the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/) guide topic for more information.
- The npm package [`@arcgis/cli`](https://www.npmjs.com/package/@arcgis/cli) will be retired at 4.31. Use [components](https://developers.arcgis.com/javascript/latest/components/) and Calcite.
- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library will be retired at 4.31. Use [components](https://developers.arcgis.com/javascript/latest/components/) or [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules instead.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event              | Alternate option                                                                                                                                                         | Version deprecated |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `ImageryLayer.renderingRule`             | [ImageryLayer.rasterFunction](https://developers.arcgis.com/javascript/latest//api-reference/esri-layers-ImageryLayer.html#rasterFunction)                               | 4.27               |
| `MosaicRule.itemRenderingRule`           | [MosaicRule.itemRasterFunction](https://developers.arcgis.com/javascript/latest//api-reference/esri-layers-support-MosaicRule.html#itemRasterFunction)                   | 4.27               |
| `ImageIdentifyParameters.renderingRule`  | [ImageIdentifyParameters.rasterFunction](https://developers.arcgis.com/javascript/latest//api-reference/esri-rest-support-ImageIdentifyParameters.html#rasterFunction)   | 4.27               |
| `ImageIdentifyParameters.renderingRules` | [ImageIdentifyParameters.rasterFunctions](https://developers.arcgis.com/javascript/latest//api-reference/esri-rest-support-ImageIdentifyParameters.html#rasterFunctions) | 4.27               |
| `ImageHistogramParameters.renderingRule` | [ImageHistogramParameters.rasterFunction](https://developers.arcgis.com/javascript/latest//api-reference/esri-rest-support-ImageHistogramParameters.html#rasterFunction) | 4.27               |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000146325: Fixed an issue where point symbols were getting cut off at tile boundaries in spatial reference 4528.
- BUG-000151524: More consistent highlight and hitTest behavior with unified Symbol3D material opacity threshold at >=1/255.
- BUG-000159558: Fixed an issue where the features in a client-side feature layer disappear from the map when placed at a longitude of 180.
- BUG-000161361: Fixed an issue where [TextSymbol](https://developers.arcgis.com/javascript/latest//api-reference/esri-symbols-TextSymbol.html) would cut-off very long text.
- BUG-000164130: Fixed an issue where a [CIMSymbol](https://developers.arcgis.com/javascript/latest//api-reference/esri-symbols-CIMSymbol.html) with dashes was not returning [hitTest](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest) results in the space between the dashes in a [GraphicsLayer](https://developers.arcgis.com/javascript/latest//api-reference/esri-layers-GraphicsLayer.html).
- BUG-000165657: Fixed an issue where a performance was degrading while generating [points](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) in WGS84 spatial reference.
- BUG-000166013: Fixed an issue with [WMTSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMTSLayer.html) where the `tileMatrixSetId` property was not properly honored.
- BUG-000167187: Fixed an issue where it was necessary to click the `Browse features` button twice after backing out of a cluster pop-up feature list.
- BUG-000167668: Fixed an issue where geometry functions did not work in [Arcade expressions for labels](api-reference/esri-layers-support-LabelClass.html#labelExpressionInfo) when used in a spatial reference other than Web Mercator or WGS84.
- BUG-000169026: Fixed an issue with the documentation for [ListItemPanel.open](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList-ListItemPanel.html#open) and [ListItemPanel.visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList-ListItemPanel.html#visible).
- BUG-000169035: Fixed an issue where the MapView's [hitTest()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest) does not return results when the layer's renderer has [rotation visual variables](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-RotationVariable.html).
- BUG-000169076: Fixed an issue where errors would arise when trying to add a related record using the [Editor](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html) or [FeatureTable](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html) widgets (if using Map Viewer). This was due to case of the of the relationship key not matching.
- BUG-000169298: Fixed an issue where the snapping failed on points off the ground.
- BUG-000169299: Fixed an issue with [OGCFeatureLayer.queryFeatures()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OGCFeatureLayer.html#queryFeatures) where non-editable fields were returning undefined values.
- BUG-000169535: Fixed an issue where [HeatmapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-HeatmapRenderer.html) did not render correctly on iOS devices.
- BUG-000169692: Fixed an issue where [hitTest](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest) was performing slowly on complex graphics.
- BUG-000169156: Fixed an issue where [labels](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html) with more than one line were sometimes duplicated.
- BUG-000169721: Fixed an issue where [VectorTileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html) with a sparse cache was throwing 404 errors.
- BUG-000171015: Fixed an issue where calling [VectorTileLayer.setStyleLayer()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html#setStyleLayer) from the [MapView.hitTest()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest) resulted in an error.
- BUG-000171415: Fixed an issue where the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) was not properly displaying layers outside their visible scale range.
- ENH-000163796: Enhanced the [MapView.hitTest](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest) method to return more accurate results when interacting with features that have [SimpleMarkerSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleMarkerSymbol.html) with SVG paths in a [GraphicsLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html).
- [Esri Community - 1507126](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/legend-flickering-with-svelte/m-p/1507126/thread-id/85066): Fixed an issue where the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) was flickering when adding new layers to a map.
- [Esri Community - 1517408](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/toggle-3d-to-2d-ko-since-v4-30/m-p/1517408/): Fixed an issue where setting a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html)'s container to `null` did not work if a measurement widget was present.
- [Esri Community - 1520927](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/sketch-widget-and-expand-widget-not-playing-nice/m-p/1520927): Fixed an issue where the [Sketch component](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/component-reference-sketch--docs) within the [Expand component](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/component-reference-expand--docs) was not rendering graphics in the view after a sketch was completed.
- Fixed an issue when the token of a signed-in user would unexpectedly get revoked when using the request option `authMode: "no-prompt"`.
- Fixed an issue where routes were not being solved when using the [arcgis-directions](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/component-reference-directions--docs) component.
- Fixed an issue in the [BasemapLayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapLayerList.html), [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) and [TableList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TableList.html) where drag and drop wasn't working correctly on some mobile devices.
- Fixed an issue in the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) where the filter wouldn't always work properly.
- Fixed an issue in the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) where [KnowledgeGraphLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-KnowledgeGraphLayer.html) titles were not displayed properly.
- Fixed an issue where tables saved in [web maps](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html) were not being displayed in the [arcgis-table-list](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/component-reference-table-list--docs) component.
- Added support for a fine-grained `apiKey` on the [BasemapStyle](https://developers.arcgis.com/javascript/latest/api-reference/esri-support-BasemapStyle.html#apiKey) class.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.30 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand the complete list</summary>

- Accessor.get deprecated since version 4.28. Use optional chaining instead.
- AreaMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- BasemapLayerList.editingEnabled deprecated since 4.29. Use selectionMode, visibleElements.editTitleButton, and dragEnabled instead.
- BasemapLayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- Bookmarks.editingEnabled deprecated since 4.29. Use visibleElements.editBookmarkButton, visibleElements.addBookmarkButton, and dragEnabled instead.
- ButtonMenu.iconClass deprecated since 4.27. Use icon instead.
- ButtonMenu deprecated since 4.30, use TableMenuConfig instead.
- ButtonMenuItem.iconClass deprecated since 4.27. Use icon instead.
- ButtonMenuItem deprecated since 4.30, use TableMenuItemConfig instead.
- ButtonMenuViewModel deprecated since 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components = List, or Calcite components - Menu web components instead. instead.
- DistanceMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- Editor.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- EditorViewModel.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- EditorViewModel.editableItems deprecated since 4.29. Use editorItems instead.
- ElevationProfile.geodesicDistanceThreshold deprecated since version 4.29.
- ElevationProfileViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- ExternalRenderer.ExternalRenderer deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.add deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.fromRenderCoordinates deprecated since 4.29. Use webgl instead.
- externalRenderers.getRenderCamera deprecated since 4.29. Use new RenderNode.camera instead.
- externalRenderers.remove deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.renderCoordinateTransformAt deprecated since 4.29. Use webgl instead.
- externalRenderers.requestRender deprecated since 4.29. Use new RenderNode.requestRender() instead.
- externalRenderers.toRenderCoordinates deprecated since 4.29. Use webgl instead.
- externalRenderers deprecated since 4.29. Use the new RenderNode instead.
- FeatureTable.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTable.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTableViewModel.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds() instead.
- FeatureTableViewModel.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FieldColumn.name deprecated since version 4.30, use FieldColumn.fieldName instead.
- GroupInput.state deprecated since version 4.28. Instead use open.
- HandleOwner deprecated since version 4.28. Use addHandles() and removeHandles() from Accessor instead.
- ImageHistogramParameters.renderingRule deprecated since version 4.27. Use rasterFunction instead.
- ImageIdentifyParameters.renderingRule deprecated since version 4.27. Use rasterFunctions instead.
- ImageIdentifyParameters.renderingRules deprecated since version 4.27. Use rasterFunctions instead.
- ImageryLayer.renderingRule deprecated since 4.27. Use rasterFunction instead.
- ImageryTileLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- LayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- LayerList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- ListItemPanel.className deprecated since version 4.30. Use icon
- Locate.rotationEnabled deprecated since 4.29. Use Track widget instead
- Mesh.createFromFiles deprecated Use convertMesh instead.
- meshUtils.georeference deprecated since version 4.30. Use convertVertexSpace instead.
- meshUtils.ungeoreference deprecated since version 4.30. Use convertVertexSpace instead.
- MosaicRule.itemRenderingRule deprecated since version 4.27. Use itemRasterFunction instead.
- Popup.collapseEnabled deprecated since 4.29. Use PopupVisibleElements.collapseButton instead.
- Popup.spinnerEnabled deprecated since 4.29. Use PopupVisibleElements.spinner instead.
- RenderContext.RenderContext deprecated since 4.29. Use new RenderNode instead.
- RenderContextCallback.RenderContextCallback deprecated since 4.29. Use new RenderNode.render instead.
- TableList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- TableList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- The addBookmark property within Bookmarks.visibleElements is deprecated at 4.29. Use visibleElements.addBookmarkButton instead.
- The "connectivity" possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use "junction-junction-connectivity" instead.
- TimeSlider.getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebDocument instead.
- TimeSliderViewModel.getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebDocument instead.
- timeUtils.getTimeSliderSettingsFromWebMap deprecated since 4.30. Use getTimeSliderSettingsFromWebDocument instead.
- ValidateNetworkTopologyResult.dirtyAreaCount deprecated since version 4.28. Dirty area count was implemented in the original version of utility network, but as of schema version 4 of the utility network, this is no longer supported.
- VersionManagementViewModel.versionIdentifierLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionInfoLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionManagementServiceLookup deprecated since version 4.30. Use VersioningState instead.
- VoxelVariable deprecated This module was moved in 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated This module was moved in 4.25. Use VoxelVolumeStyle instead.
- WCSLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- Widget.own deprecated since 4.28. Use addHandles() instead.

</details>
