# Change log

The `next` version of 4.32 is now available. Planned release date is Feb 2025.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Layer updates

## Component and widget updates

# Breaking Changes

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.31 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand the complete list</summary>

The following are deprecated and will be removed in a future release:
- Accessor.get deprecated since version 4.28. Use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- AreaMeasurement2D.own deprecated since 4.28 Use addHandles() instead.
- AreaMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- AreaMeasurement3D.own deprecated since 4.28 Use addHandles() instead.
- Attachments.own deprecated since 4.28 Use addHandles() instead.
- Attribution.own deprecated since 4.28 Use addHandles() instead.
- BasemapGallery.own deprecated since 4.28 Use addHandles() instead.
- BasemapLayerList.editingEnabled deprecated since 4.29. Use selectionMode, visibleElements.editTitleButton, and dragEnabled instead.
- BasemapLayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- BasemapLayerList.own deprecated since 4.28 Use addHandles() instead.
- BasemapToggle.own deprecated since 4.28 Use addHandles() instead.
- BatchAttributeForm.own deprecated since 4.28 Use addHandles() instead.
- BinaryColorSizeSlider.own deprecated since 4.28 Use addHandles() instead.
- Bookmarks.editingEnabled deprecated since 4.29. Use visibleElements.editBookmarkButton, visibleElements.addBookmarkButton, and dragEnabled instead.
- Bookmarks.own deprecated since 4.28 Use addHandles() instead.
- BuildingExplorer.own deprecated since 4.28 Use addHandles() instead.
- ButtonMenu.iconClass deprecated since 4.27. Use icon instead.
- ButtonMenu.own deprecated since 4.28 Use addHandles() instead.
- ButtonMenu deprecated since 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
- ButtonMenuItem.iconClass deprecated since 4.27. Use icon instead.
- ButtonMenuItem deprecated since 4.30, use TableMenuItemConfig instead.
- ButtonMenuViewModel deprecated since 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
- CatalogLayerList.own deprecated since 4.28 Use addHandles() instead.
- ClassedColorSlider.own deprecated since 4.28 Use addHandles() instead.
- ClassedSizeSlider.own deprecated since 4.28 Use addHandles() instead.
- ColorSizeSlider.own deprecated since 4.28 Use addHandles() instead.
- ColorSlider.own deprecated since 4.28 Use addHandles() instead.
- Compass.own deprecated since 4.28 Use addHandles() instead.
- CoordinateConversion.own deprecated since 4.28 Use addHandles() instead.
- Daylight.own deprecated since 4.28 Use addHandles() instead.
- DirectionalPad.own deprecated since 4.28 Use addHandles() instead.
- Directions.own deprecated since 4.28 Use addHandles() instead.
- DirectLineMeasurement3D.own deprecated since 4.28 Use addHandles() instead.
- DistanceMeasurement2D.own deprecated since 4.28 Use addHandles() instead.
- DistanceMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- Editor.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- Editor.own deprecated since 4.28 Use addHandles() instead.
- EditorViewModel.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- EditorViewModel.editableItems deprecated since 4.29. Use editorItems instead.
- ElevationProfile.geodesicDistanceThreshold deprecated since version 4.29.
- ElevationProfile.own deprecated since 4.28 Use addHandles() instead.
- ElevationProfileViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- Expand.own deprecated since 4.28 Use addHandles() instead.
- externalRenderers.add.add deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.fromRenderCoordinates.fromRenderCoordinates deprecated since 4.29. Use webgl instead.
- externalRenderers.getRenderCamera.getRenderCamera deprecated since 4.29. Use new RenderNode.camera instead.
- externalRenderers.remove.remove deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.renderCoordinateTransformAt.renderCoordinateTransformAt deprecated since 4.29. Use webgl instead.
- externalRenderers.requestRender.requestRender deprecated since 4.29. Use new RenderNode.requestRender() instead.
- externalRenderers.toRenderCoordinates.toRenderCoordinates deprecated since 4.29. Use webgl instead.
- externalRenderers deprecated since 4.29. Use the new RenderNode instead.
- externalRenderers~ExternalRenderer.ExternalRenderer deprecated since 4.29. Use new RenderNode instead.
- externalRenderers~RenderContext.RenderContext deprecated since 4.29. Use new RenderNode instead.
- externalRenderers~RenderContextCallback.RenderContextCallback deprecated since 4.29. Use new RenderNode.render instead.
- Feature.own deprecated since 4.28 Use addHandles() instead.
- FeatureForm.own deprecated since 4.28 Use addHandles() instead.
- Features.own deprecated since 4.28 Use addHandles() instead.
- FeatureTable.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTable.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTable.own deprecated since 4.28 Use addHandles() instead.
- FeatureTableViewModel.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds() instead.
- FeatureTableViewModel.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTemplates.own deprecated since 4.28 Use addHandles() instead.
- FieldColumn.name deprecated since version 4.30, use FieldColumn.fieldName instead.
- FloorFilter.own deprecated since 4.28 Use addHandles() instead.
- Fullscreen.own deprecated since 4.28 Use addHandles() instead.
- GridControls.own deprecated since 4.28 Use addHandles() instead.
- HeatmapSlider.own deprecated since 4.28 Use addHandles() instead.
- Histogram.own deprecated since 4.28 Use addHandles() instead.
- HistogramRangeSlider.own deprecated since 4.28 Use addHandles() instead.
- Home.own deprecated since 4.28 Use addHandles() instead.
- ImageryTileLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- LayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- LayerList.own deprecated since 4.28 Use addHandles() instead.
- LayerList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- Legend.own deprecated since 4.28 Use addHandles() instead.
- LineOfSight.own deprecated since 4.28 Use addHandles() instead.
- ListItemPanel.className deprecated since version 4.30. Use icon
- ListItemPanel.className deprecated since version 4.30. Use icon
- ListItemPanel.own deprecated since 4.28 Use addHandles() instead.
- ListItemPanel.own deprecated since 4.28 Use addHandles() instead.
- Locate.own deprecated since 4.28 Use addHandles() instead.
- Locate.rotationEnabled deprecated since 4.29. Use Track widget instead
- Measurement.own deprecated since 4.28 Use addHandles() instead.
- Mesh.createFromFiles(location, files, parameters, parameters.layer, parameters.signal).createFromFiles deprecated Use convertMesh instead.
- meshUtils.georeference deprecated since version 4.30. Use convertVertexSpace instead.
- meshUtils.ungeoreference deprecated since version 4.30. Use convertVertexSpace instead.
- NavigationToggle.own deprecated since 4.28 Use addHandles() instead.
- OpacitySlider.own deprecated since 4.28 Use addHandles() instead.
- OrientedImageryViewer.own deprecated since 4.28 Use addHandles() instead.
- Popup.collapseEnabled deprecated since 4.29. Use PopupVisibleElements.collapseButton instead.
- Popup.own deprecated since 4.28 Use addHandles() instead.
- Popup.spinnerEnabled deprecated since 4.29. Use PopupVisibleElements.spinner instead.
- Print.own deprecated since 4.28 Use addHandles() instead.
- RasterStretchRenderer.statistics deprecated since 4.31. Use customStatistics instead.
- ScaleBar.own deprecated since 4.28 Use addHandles() instead.
- ScaleRangeSlider.own deprecated since 4.28 Use addHandles() instead.
- Search.own deprecated since 4.28 Use addHandles() instead.
- SearchResultRenderer.own deprecated since 4.28 Use addHandles() instead.
- ShadowCast.own deprecated since 4.28 Use addHandles() instead.
- SizeSlider.own deprecated since 4.28 Use addHandles() instead.
- Sketch.own deprecated since 4.28 Use addHandles() instead.
- Slice.own deprecated since 4.28 Use addHandles() instead.
- Slider.own deprecated since 4.28 Use addHandles() instead.
- SmartMappingSliderBase.own deprecated since 4.28 Use addHandles() instead.
- SnappingControls.own deprecated since 4.28 Use addHandles() instead.
- Swipe.own deprecated since 4.28 Use addHandles() instead.
- TableList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- TableList.own deprecated since 4.28 Use addHandles() instead.
- TableList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- The addBookmark property within Bookmarks.visibleElements is deprecated at 4.29. Use visibleElements.addBookmarkButton instead.
- The basemap IDs referencing the basemap layer service v1 (i.e. arcgis-topographic) were deprecated at version 4.28. Support for these basemaps will be removed at version 4.31. Use basemaps from the basemap style service (v2) instead (i.e. arcgis/topographic).
- The "connectivity" possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use "junction-junction-connectivity" instead.
- TimeExtent deprecated since version 4.31. Use TimeExtent instead.
- TimeInterval deprecated since version 4.31. Use TimeInterval instead.
- TimeSlider.getPropertiesFromWebMap(webMap, signal).getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebDocument instead.
- TimeSlider.own deprecated since 4.28 Use addHandles() instead.
- TimeSliderViewModel.getPropertiesFromWebMap(webMap, signal).getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebDocument instead.
- timeUtils.getTimeSliderSettingsFromWebMap deprecated since 4.30. Use getTimeSliderSettingsFromWebDocument instead.
- TimeZoneLabel.own deprecated since 4.28 Use addHandles() instead.
- Track.own deprecated since 4.28 Use addHandles() instead.
- UtilityNetworkAssociations.own deprecated since 4.28 Use addHandles() instead.
- UtilityNetworkTrace.gdbVersion deprecated since 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
- UtilityNetworkTrace.own deprecated since 4.28 Use addHandles() instead.
- UtilityNetworkTraceViewModel.gdbVersion deprecated since 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
- UtilityNetworkValidateTopology.own deprecated since 4.28 Use addHandles() instead.
- ValidateNetworkTopologyResult.dirtyAreaCount deprecated since version 4.28. Dirty area count was implemented in the original version of utility network, but as of schema version 4 of the utility network, this is no longer supported.
- ValuePicker.own deprecated since 4.28 Use addHandles() instead.
- VersionManagementViewModel.versionIdentifierLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionInfoLookup deprecated since version 4.30. Use VersioningState instead.
- VersionManagementViewModel.versionManagementServiceLookup deprecated since version 4.30. Use VersioningState instead.
- VideoPlayer.own deprecated since 4.28 Use addHandles() instead.
- WCSLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- Weather.own deprecated since 4.28 Use addHandles() instead.
- Widget.own deprecated since 4.28 Use addHandles() instead.
- Zoom.own deprecated since 4.28 Use addHandles() instead.

</details>
