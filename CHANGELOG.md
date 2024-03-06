# Change log

The `next` version of 4.30 is now available. Planned release date is June 2024.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Layer updates

TBD

## Widget Updates

TBD

## Breaking Changes

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| TBD | TBD | TBD |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- TBD

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.29 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- The AMD npm package [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api) is deprecated at version 4.29. This is related to dropping local build support for legacy Dojo 1 and RequireJS. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- The npm package [`@arcgis/cli`](https://www.npmjs.com/package/@arcgis/cli) is deprecated at version 4.29. Plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) and Calcite.
- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library is deprecated at version 4.29. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- Support for [printing](/api-reference/esri-rest-print.html) with a Printing service published from ArcMap is deprecated at version 4.29. We recommend using ArcGIS Pro to publish Printing services.

<details>
  <summary>Click to expand the complete list</summary>

- Accessor.get deprecated since version 4.28. Use optional chaining
- AreaMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
- AreaMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- AreaMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
- Attribution.iconClass deprecated since 4.27. Use icon instead.
- BasemapGallery.iconClass deprecated since 4.27. Use icon instead.
- BasemapLayerList.editingEnabled deprecated since 4.29. Use selectionMode, visibleElements.editTitleButton, and dragEnabled instead.
- BasemapLayerList.iconClass deprecated since 4.27. Use icon instead.
- BasemapLayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- Bookmarks.editingEnabled deprecated since 4.29. Use visibleElements.editBookmarkButton, visibleElements.addBookmarkButton, and dragEnabled instead.
- Bookmarks.iconClass deprecated since 4.27. Use icon instead.
- BookmarksViewModel.abilities deprecated since 4.27. Use capabilities instead.
- BuildingExplorer.iconClass deprecated since 4.27. Use icon instead.
- ButtonMenu.iconClass deprecated since 4.27. Use icon instead.
- ButtonMenuItem.iconClass deprecated since 4.27. Use icon instead.
- Compass.iconClass deprecated since 4.27. Use icon instead.
- DatePicker deprecated since 4.29. Use the Calcite Design System Input Date Picker component instead.
- DatePickerViewModel deprecated since 4.29.
- Daylight.iconClass deprecated since 4.27. Use icon instead.
- Directions.iconClass deprecated since 4.27. Use icon instead.
- DirectLineMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
- DistanceMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
- DistanceMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- Editor.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- Editor.iconClass deprecated since 4.27. Use icon instead.
- EditorViewModel.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- EditorViewModel.editableItems deprecated
- ElevationProfile.geodesicDistanceThreshold deprecated since version 4.29.
- ElevationProfile.iconClass deprecated since 4.27. Use icon instead.
- ElevationProfileViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- Expand.collapseIconClass deprecated since 4.27. Use collapseIcon instead.
- Expand.expandIconClass deprecated since 4.27. Use expandIcon instead.
- ExternalRenderer.ExternalRenderer deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.add deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.fromRenderCoordinates deprecated since 4.29. Use webgl.fromRenderCoordinates instead.
- externalRenderers.getRenderCamera deprecated since 4.29. Use new RenderNode.camera instead.
- externalRenderers.remove deprecated since 4.29. Use new RenderNode instead.
- externalRenderers.renderCoordinateTransformAt deprecated since 4.29. Use webgl.renderCoordinateTransformAt instead.
- externalRenderers.requestRender deprecated since 4.29. Use new RenderNode.requestRender() instead.
- externalRenderers.toRenderCoordinates deprecated since 4.29. Use webgl.toRenderCoordinates instead.
- externalRenderers deprecated since 4.29. Use the new RenderNode instead.
- FeatureForm.view deprecated since 4.27. Use map instead.
- FeatureTable.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.deselectRows deprecated since 4.25. Use highlightIds.remove() instead.
- FeatureTable.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTable.selection-change deprecated since version 4.25. Listen for changes on highlightIds instead.
- FeatureTable.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FeatureTableViewModel.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTableViewModel.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTableViewModel.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- GroupInput.state deprecated since version 4.28. Instead use open.
- HandleOwner deprecated since version 4.28. Use addHandles() and removeHandles() from Accessor instead.
- Home.iconClass deprecated since 4.27. Use icon instead.
- iconClass.iconClass deprecated since 4.27. Use icon instead.
- ImageHistogramParameters.renderingRule deprecated since version 4.27. Use rasterFunction instead.
- ImageIdentifyParameters.renderingRule deprecated since version 4.27. Use rasterFunctions instead.
- ImageIdentifyParameters.renderingRules deprecated since version 4.27. Use rasterFunctions instead.
- ImageryLayer.renderingRule deprecated since 4.27. Use rasterFunction instead.
- ImageryTileLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- LayerList.iconClass deprecated since 4.27. Use icon instead.
- LayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- LayerList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- Legend.iconClass deprecated since 4.27. Use icon instead.
- Lighting.clone deprecated since version 4.24
- Lighting deprecated since version 4.24
- Lighting deprecated since version 4.24. Use SunLighting instead.
- LineOfSight.iconClass deprecated since 4.27. Use icon instead.
- Locate.iconClass deprecated since 4.27. Use icon instead.
- Locate.rotationEnabled deprecated since 4.29. Use Track widget instead
- Measurement.iconClass deprecated since 4.27. Use icon instead.
- Mesh.createFromFiles deprecated Use convertMesh instead.
- MosaicRule.itemRenderingRule deprecated since version 4.27. Use itemRasterFunction instead.
- NavigationToggle.iconClass deprecated since 4.27. Use icon instead.
- Popup.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- Popup.collapseEnabled deprecated since 4.29. Use PopupVisibleElements.collapseButton instead.
- Popup.spinnerEnabled deprecated since 4.29. Use PopupVisibleElements.spinner instead.
- PopupViewModel.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- Print.iconClass deprecated since 4.27. Use icon instead.
- RenderContext.RenderContext deprecated since 4.29. Use new RenderNode instead.
- RenderContextCallback.RenderContextCallback deprecated since 4.29. Use new RenderNode.render instead.
- Search.iconClass deprecated since 4.27. Use icon instead.
- ShadowCast.iconClass deprecated since 4.27. Use icon instead.
- Sketch.iconClass deprecated since 4.27. Use icon instead.
- Slice.iconClass deprecated since 4.27. Use icon instead.
- SnappingControls.iconClass deprecated since 4.27. Use icon instead.
- Subclassing and extending esri/widgets/Widget when building custom widgets is deprecated at 4.27. Use the JavaScript framework of your choice to create an HTMLElement and use View.ui to add it to the MapView or SceneView.
- SunLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- SunLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- Swipe.iconClass deprecated since 4.27. Use icon instead.
- TableList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- TableList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- TimeSlider.getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebMap instead.
- The addBookmark property within Bookmarks.visibleElements is deprecated at 4.29. Use visibleElements.addBookmarkButton instead.
- The allowAttachments property within Editor.layerInfos is deprecated at 4.25. Use either attachmentsOnCreateEnabled or attachmentsOnUpdateEnabled instead.
- The "connectivity" possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use "junction-junction-connectivity" instead.
- The "non-metric" possible value for ScaleBar.unit is deprecated at 4.27. Please use "imperial" instead.
- TimePicker deprecated since 4.29. Use the Calcite Design System Input Time Picker component instead.
- TimePickerViewModel deprecated since 4.29.
- TimeSlider.iconClass deprecated since 4.27. Use icon instead.
- TimeSliderViewModel.getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebMap instead.
- Track.iconClass deprecated since 4.27. Use icon instead.
- UtilityNetworkTrace.iconClass deprecated since 4.27. Use icon instead.
- ValidateNetworkTopologyResult.dirtyAreaCount deprecated since version 4.28. Dirty area count was implemented in the original version of utility network, but as of schema version 4 of the utility network, this is no longer supported.
- VirtualLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- VirtualLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- VoxelVariable deprecated since 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated since 4.25. Use VoxelVolumeStyle instead.
- WCSLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- Weather.iconClass deprecated since 4.27. Use icon instead.
- Widget.iconClass deprecated since 4.27. Use icon instead.
- Widget.own deprecated since 4.28 Use addHandles() instead.
- Zoom.iconClass deprecated since 4.27. Use icon instead.

</details>
