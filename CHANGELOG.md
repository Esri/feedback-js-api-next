# Change log

The `next` version of 4.31 is now available. Planned release date is October 2024.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Component packages

- Chart Components might come out of beta at 4.31.

## Layer updates

## Component and widget updates

# Breaking Changes

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

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
