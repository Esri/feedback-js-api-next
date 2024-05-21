# Change log

The `next` version of 4.30 is now available. Planned release date is June 2024.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Components updates

- Map and coding components are coming out of beta at 4.30.

### Components breaking changes

- In `@arcgis/map-components@next`, for non-view based components the `arcgis<nameOfComponent><nameofEvent>` event naming pattern has been removed. Use the `arcgis<nameOfEvent>` naming pattern instead. For example, this change affects `arcgis-basemap-gallery` and `arcgis-bookmarks`. It does not affect `arcgis-map` or `arcgis-scene`. 
- In `@arcgis/map-components@next`, `Zoom` and other navigation components have been removed as defaults in the `arcgis-map` and `arcgis-scene` components. The only default component will be `Attribution`. All others need to be added manually, for example:

```html
  <arcgis-map basemap="dark-gray-vector" center="-90,38" zoom="5">
      <arcgis-zoom position="top-left"></arcgis-zoom>
      <arcgis-home position="top-right"></arcgis-home>
  </arcgis-map>
```

## MapView.goTo animation

We have significantly improved the animation behavior of [MapView.goTo()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#goTo) to enhance the geographic context during transitions between locations on the map. These enhancements also provide developers with greater control over the animation settings.

These improvements include changes to the [GoToOptions2D](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#GoToOptions2D) properties:
- The `duration` property no longer has a default value. Instead, our algorithm calculates the ideal animation duration based on the distance between the origin and destination, as well as the `maxDuration`. You can override this by explicitly setting the `duration`.
- The `maxDuration` and `speedFactor` properties offer greater control over the duration and speed of the animation.
- Certain animations, particularly if they run over a large area or for a long time, have the potential to be disruptive. The `animationMode` property determines the policy for potentially disruptive animations. The default value is `"auto"`, which intelligently decides how to animate based on factors such as time, distance, and `maxDuration`. If the proposed animation time exceeds the `maxDuration`, the map will navigate to the destination instantly. Setting `animationMode` to `"always"` ensures that the animation always occurs, even if, for example, it needs to speed up to fit within the `maxDuration`.

Additionally, we have introduced a new animation style that zooms out and in, creating an arc-like motion. This style provides more geographic context when transitioning between two locations on the map.

These enhancements are also noticeable when navigating to points of interest using the [Bookmarks](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Bookmarks.html) or [Search](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html) widget.

> [!NOTE]
> Animations may not be suitable for everyone, as some animations can cause discomfort for individuals with vestibular motion disorders. To disable 2D MapView navigation animations in the JavaScript SDK, users can set the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) option in their device or browser settings.



## Layer updates

TBD

## Widget Updates

### LayerList

The LayerList widget now has improved support for [KnowledgeGraphLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-KnowledgeGraphLayer.html). When a KnowledgeGraphLayer is present in the map, the LayerList widget will display the knowledge graph layer's tables as an expandable list item. Clicking on the tables list item will open a new flow panel to show the tables associated with the knowledge graph layer.

### Legend

Legend now supports definition expressions for layers with unique value renderers when `respectLayerDefinitionExpression` is set to `true`. The default is `false`.

### Expand

The Expand widget was updated to use calcite components internally, providing an improved experience on mobile devices.

## Breaking Changes

- The DatePicker and TimePicker have been removed. Use the Input Date Picker and Input Time Picker Calcite components instead.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| `BookmarksViewModel.abilities`         | [BookmarksViewModel.capabilities](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Bookmarks-BookmarksViewModel.html#capabilities) | 4.27 |
| `Editor.layerInfo.allowAttachments` | Set `attachmentsOnUpdateEnabled` or `attachmentsOnCreateEnabled` on [Editor.LayerInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#LayerInfo) | 4.26 |
| `Expand.expandIconClass`               | [Expand.expandIcon](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html#expandIcon)    | 4.27 | 
| `Expand.collapseIconClass`               | [Expand.collapseIcon](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html#collapseIcon) | 4.27 |
| `"non-metric"` value of [ScaleBar.unit](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleBar.html#unit) |`"imperial"`               | 4.27 |
| `FeatureForm.view` | Set [FeatureForm.map](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html#map) instead | 4.27 |
| `FeatureTable.clearSelection()`  |  Call [removeAll()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#removeAll) on [FeatureTable.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds)  | 4.25  |
| `FeatureTableViewModel.clearSelection()`  |  Call [removeAll()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#removeAll) on [FeatureTableViewModel.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable-FeatureTableViewModel.html#highlightIds)   | 4.25  |
| `FeatureTable.deselectRows()`  |  Call [remove()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#remove) or [removeMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#removeMany) on [FeatureTable.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds)  |  4.25  |
| `FeatureTableViewModel.deselectRows()`  |  Call [remove()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#remove) or [removeMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#removeMany) on [FeatureTableViewModel.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable-FeatureTableViewModel.html#highlightIds)  |  4.25  |
| `FeatureTable.highlightOnRowSelectEnabled`  |  [highlightEnabled](api-reference/esri-widgets-FeatureTable.html#highlightEnabled)  |  4.25  |
| `FeatureTableViewModel.highlightOnRowSelectEnabled`  |  [highlightEnabled](api-reference/esri-widgets-FeatureTable-FeatureTableViewModel.html#highlightEnabled) |  4.25  |
| `FeatureTable.selection-change` event | Listen for [FeatureTable.highlightIds](api-reference/esri-widgets-FeatureTable.html#highlightIds) | 4.25 |
| `FeatureTable.selectRows()` | Call [add()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#add) or [addMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#addMany) on [FeatureTable.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds) | 4.25 |
| `FeatureTableViewModel.selectRows()` | Call [add()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#add) or [addMany()](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#addMany) on [FeatureTableViewModel.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable/FeatureTableViewModel.html#highlightIds) | 4.25 |
| `Lighting`                             | [SunLighting](https://developers.arcgis.com/javascript/latest/api-reference/esri-webscene-SunLighting.html)             | 4.24 |
| `Popup.autoOpenEnabled`                | [View.popupEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#popupEnabled)    | 4.27 |
| `PopupViewModel.autoOpenEnabled`       | [View.popupEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#popupEnabled)    | 4.27 |
| `SunLighting.ambientOcclusionEnabled`  | Ambient occlusion is automatically shown and this property has no effect   | 4.27 | 
| `SunLighting.waterReflectionEnabled`   | Reflections are automatically shown and this property has no effect        | 4.27 | 
| `VirtualLighting.ambientOcclusionEnabled`  | Ambient occlusion is automatically shown and this property has no effect  | 4.27 | 
| `VirtualLighting.waterReflectionEnabled`   | Reflections are automatically shown and this property has no effect       | 4.27 |
| `Widget.iconClass`                     | [Widget.icon](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#icon)                | 4.27 | 

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000144377: All content elements now allow rendering supported HTML for their title and description properties.
- BUG-000153181: Fixed an issue where SceneView didn't properly load an imagery layer with predefined renderer.
- BUG-000163544: Fixed an issue where a SimpleMarkerSymbol was rendered with poor quality when using certain SVG paths.
- BUG-000165132: Fixed an issue where the APP-6(D) DictionaryRenderer displayed an incorrect graphic for the Counterattack by Fire symbol.
- BUG-000165133: Fixed an issue where the APP-6(D) DictionaryRenderer displayed an incorrect graphic for the Trip Wire symbol.
- BUG-000165321: Fixed an issue where some polyline symbols rendered by the DictionaryRenderer with the APP-6(D) dictionary had extra arrows and dashes.
- BUG-000165858: Fixed an issue where the collapsed property value on the Popup and Features widget was not changing when expanding/collapsing the widget.
- BUG-000165913: Fixed an issue where the stationary property on the MapView does not change value when zooming using a double tap and drag gesture on a mobile device.
- BUG-000166831: Fixed an issue where the MapView.hitTest does not return a hit for GraphicsLayer when the graphics have TextSymbol with lineWidth.
- BUG-000166346: Fixed an issue where polygon features with newlines in the label expression did not display correctly.
- BUG-000167231: Fixed an issue where a CIMSymbol with CIMGeometricEffectDashes was having performance issues at higher scales.
- [Esri Community - 1403039](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/4-29-breaking-change-mapview-goto-w-rotation/m-p/1403039): Fixed an issue where MapView.goTo would zoom out when only the rotation was set in the target.
- [Esri Community - 1407481](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/first-calls-to-sendmessagetoclient-not-used/m-p/1407481): Fixed an issue where the first call to StreamLayer.sendMessageToSocket is not applied on initial load.
- Fixed an issue where setting popupEnabled to false was not properly honored for LayerSearchSource.
- The Features widget is out of beta.
- VideoElement is now supported on iPhones.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.29 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- The AMD npm package [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api) is deprecated at version 4.29. This is related to dropping local build support for legacy Dojo 1 and RequireJS. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- The npm package [`@arcgis/cli`](https://www.npmjs.com/package/@arcgis/cli) is deprecated at version 4.29. Plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) and Calcite.
- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library is deprecated at version 4.29. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- Support for [printing](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-print.html) with a Printing service published from ArcMap is deprecated at version 4.29. We recommend using ArcGIS Pro to publish Printing services.

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
