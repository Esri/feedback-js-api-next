# Change log

The `next` version of 4.31 is now available. Planned release date is October 2024.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Component packages

- Chart Components might come out of beta at 4.31.

## Layer updates

## Component and widget updates

# Breaking Changes

- Version 4.31 is the last release of the AMD npm package [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api). Use components or the @arcgis/core ES modules package, instead. See the [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/) guide topic for more information.
- The npm package [`@arcgis/cli`](https://www.npmjs.com/package/@arcgis/cli) will be retired at 4.31. Use [components](https://developers.arcgis.com/javascript/latest/components/) and Calcite.
- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library will be retired at 4.31. Use [components](https://developers.arcgis.com/javascript/latest/components/) or [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules instead.

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000166013: Fixed an issue with [WMTSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMTSLayer.html) where the `tileMatrixSetId` property was not properly honored.
- BUG-000167187: Fixed an issue where it was necessary to click the `Browse features` button twice after backing out of a cluster pop-up feature list.
- BUG-000169035: Fixed an issue where the MapView's [hitTest()](https://developers.arcgis.com/javascript/latest//api-reference/esri-views-MapView.html#hitTest) does not return results when the layer's renderer has [rotation visual variables](https://developers.arcgis.com/javascript/latest//api-reference/esri-renderers-visualVariables-RotationVariable.html).
- BUG-000169076: Fixed an issue where errors would arise when trying to add a related record using the [Editor](https://developers.arcgis.com/javascript/latest//api-reference/esri-widgets-Editor.html) or [FeatureTable](https://developers.arcgis.com/javascript/latest//api-reference/esri-widgets-FeatureTable.html) widgets, (if using Map Viewer). This was due to case of the of the relationship key not matching.
- BUG-000169299: Fixed an issue with [OGCFeatureLayer.queryFeatures()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OGCFeatureLayer.html#queryFeatures) where non-editable fields were returning undefined values.
- [Esri Community - 1520927](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/sketch-widget-and-expand-widget-not-playing-nice/m-p/1520927): Fixed an issue where the Sketch component within the Expand component was not rendering graphics in the view after a sketch was completed.
- Fixed an issue when the token of a signed-in user would unexpectedly get revoked wen using the request option `authMode: "no-prompt"`. 



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
