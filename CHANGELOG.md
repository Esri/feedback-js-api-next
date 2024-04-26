# Change log

The `next` version of 4.30 is now available. Planned release date is June 2024.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Components updates

- Map and coding components are coming out of beta at 4.30.

### Components breaking changes

- In `@arcgis/map-components@next`, `Zoom` and other navigation components have been removed as defaults in the `arcgis-map` and `arcgis-scene` components. The only default component will be `Attribution`. All others need to be added manually, for example:

```html
  <arcgis-map basemap="dark-gray-vector" center="-90,38" zoom="5">
      <arcgis-zoom position="top-left"></arcgis-zoom>
      <arcgis-home position="top-right"></arcgis-home>
  </arcgis-map>
```

## Layer updates

TBD

## Widget Updates

### Legend
Legend now supports definition expressions for layers with unique value renderers when `respectLayerDefinitionExpression` is set to `true`. The default is `false`.

## Breaking Changes

- The DatePicker and TimePicker have been removed. Use the Input Date Picker and Input Time Picker Calcite components instead.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| `BookmarksViewModel.abilities`         | [BookmarksViewModel.capabilities](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Bookmarks-BookmarksViewModel.html#capabilities) | 4.27 |
| `Expand.expandIconClass`               | [Expand.expandIcon](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html#expandIcon)    | 4.27 | 
| `Expand.collapseIconClass`               | [Expand.collapseIcon](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html#collapseIcon) | 4.27 | 
| `"non-metric"` value of [ScaleBar.unit](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#unit) |`"imperial"`               | 4.27 |
| `Popup.autoOpenEnabled`                | [View.popupEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#popupEnabled)    | 4.27 |
| `PopupViewModel.autoOpenEnabled`       | [View.popupEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#popupEnabled)    | 4.27 |
| `Widget.iconClass`                     | [Widget.icon](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#icon)                | 4.27 | 

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000144377: All content elements now allow rendering supported HTML for their title and description properties.
- BUG-000153181: Fixed an issue where SceneView didn't properly load an imagery layer with predefined renderer.
- BUG-000163544: Fixed an issue where a SimpleMarkerSymbol was rendered with poor quality when using certain SVG paths.
- BUG-000165858: Fixed an issue where the collapsed property value on the Popup and Features widget was not changing when expanding/collapsing the widget.
- BUG-000166831: Fixed an issue where the `MapView.hitTest()` does not return a hit for a `GraphicsLayer` when the graphics have `TextSymbol` with `lineWidth`.
- [Esri Community - 1403039](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/4-29-breaking-change-mapview-goto-w-rotation/m-p/1403039): Fixed an issue where MapView.goTo would zoom out when only the rotation was set in the target.
- [Esri Community - 1407481](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/first-calls-to-sendmessagetoclient-not-used/m-p/1407481): Fixed an issue where the first call to StreamLayer.sendMessageToSocket is not applied on initial load.
- The Features widget is out of beta.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.29 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- The AMD npm package [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api) is deprecated at version 4.29. This is related to dropping local build support for legacy Dojo 1 and RequireJS. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- The npm package [`@arcgis/cli`](https://www.npmjs.com/package/@arcgis/cli) is deprecated at version 4.29. Plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) and Calcite.
- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library is deprecated at version 4.29. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- Support for [printing](/api-reference/esri-rest-print.html) with a Printing service published from ArcMap is deprecated at version 4.29. We recommend using ArcGIS Pro to publish Printing services.

<details>
  <summary>Click to expand the complete list</summary>

- Accessor.get deprecated since version 4.28. Use optional chaining
- AreaMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- BasemapLayerList.editingEnabled deprecated since 4.29. Use selectionMode, visibleElements.editTitleButton, and dragEnabled instead.
- BasemapLayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- Bookmarks.editingEnabled deprecated since 4.29. Use visibleElements.editBookmarkButton, visibleElements.addBookmarkButton, and dragEnabled instead.
- DistanceMeasurement2DViewModel.geodesicDistanceThreshold deprecated since version 4.29.
- Editor.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- EditorViewModel.allowedWorkflows deprecated since version 4.29. Use Editor.visibleElements instead.
- EditorViewModel.editableItems deprecated
- ElevationProfile.geodesicDistanceThreshold deprecated since version 4.29.
- ElevationProfileViewModel.geodesicDistanceThreshold deprecated since version 4.29.
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
- ImageHistogramParameters.renderingRule deprecated since version 4.27. Use rasterFunction instead.
- ImageIdentifyParameters.renderingRule deprecated since version 4.27. Use rasterFunctions instead.
- ImageIdentifyParameters.renderingRules deprecated since version 4.27. Use rasterFunctions instead.
- ImageryLayer.renderingRule deprecated since 4.27. Use rasterFunction instead.
- ImageryTileLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- LayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- LayerList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- Lighting.clone deprecated since version 4.24
- Lighting deprecated since version 4.24. Use SunLighting instead.
- Locate.rotationEnabled deprecated since 4.29. Use Track widget instead
- Mesh.createFromFiles deprecated Use convertMesh instead.
- MosaicRule.itemRenderingRule deprecated since version 4.27. Use itemRasterFunction instead.
- Popup.collapseEnabled deprecated since 4.29. Use PopupVisibleElements.collapseButton instead.
- Popup.spinnerEnabled deprecated since 4.29. Use PopupVisibleElements.spinner instead.
- RenderContext.RenderContext deprecated since 4.29. Use new RenderNode instead.
- RenderContextCallback.RenderContextCallback deprecated since 4.29. Use new RenderNode.render instead.
- Subclassing and extending esri/widgets/Widget when building custom widgets is deprecated at 4.27. Use the JavaScript framework of your choice to create an HTMLElement and use View.ui to add it to the MapView or SceneView.
- SunLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- SunLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- TableList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- TableList.selectionEnabled deprecated since 4.29. Use selectionMode and dragEnabled instead.
- TimeSlider.getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebMap instead.
- The addBookmark property within Bookmarks.visibleElements is deprecated at 4.29. Use visibleElements.addBookmarkButton instead.
- The allowAttachments property within Editor.layerInfos is deprecated at 4.25. Use either attachmentsOnCreateEnabled or attachmentsOnUpdateEnabled instead.
- The "connectivity" possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use "junction-junction-connectivity" instead.
- TimeSliderViewModel.getPropertiesFromWebMap deprecated since 4.29. Use getTimeSliderSettingsFromWebMap instead.
- ValidateNetworkTopologyResult.dirtyAreaCount deprecated since version 4.28. Dirty area count was implemented in the original version of utility network, but as of schema version 4 of the utility network, this is no longer supported.
- VirtualLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- VirtualLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- VoxelVariable deprecated since 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated since 4.25. Use VoxelVolumeStyle instead.
- WCSLayer.rasterInfo deprecated since 4.29. Use serviceRasterInfo instead.
- Widget.own deprecated since 4.28 Use addHandles() instead.

</details>
