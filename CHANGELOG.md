# Change log

The `next` version of 4.28 is now available. Planned release date is October 2023.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Layer updates

### MediaLayer

Added support for animated GIF and APNG images in the [MediaLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MediaLayer.html).
A new `animationOptions` property on [ImageElement](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-ImageElement.html) controls the animation playback options.

```js
imageElement.animationOptions = {
  // Indicates whether the animated image should play its animation.
  playAnimation: true,
  // The time (in seconds) it takes to play through the layer's animation once.
  duration: 4,
  // Determines how to repeat the animation of a layer when the animation cycle ends.
  // Possible Values:"none"|"loop"|"oscillate"
  repeatType: "oscillate",
  // Represents the number of seconds to delay before repeating an animation cycle.
  repeatDelay: 0
};
```

## Widget Updates

### LayerList and BasemapLayerList styles

Have you ever wanted to update the look and feel of the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) or [BasemapLayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapLayerList.html) in your app?
We've added a new `style` property to the LayerList and BasemapLayerList widgets to do just that.
The `style` property currently has two possible values, `classic` and `default.`
The `classic` style represents the user interface as it has been in previous releases.
The new `default` style slightly modifies the original `classic` style in several ways.
We moved the visibility icons (eyeballs) to the right-hand side of the layers title.
When a layer is not visible, the non-visible icon will appear to the right of the layer's title.
If the layer is visible, the eyeball icon indicating visibility will be hidden until the list item is hovered over or tapped on.
We did this to reduce the number of repeating icons in layer lists and feel it provides a cleaner user interface.

At this release, version 4.28, the default value for style will be `classic`.
At the next release, version 4.29, we are switching the default style to `default`.
The `classic` style will still be available until version 4.31.
At version 4.31, we will remove the `classic` style, and the `default` style will be the only option available.

```js
const layerList = new LayerList({
  style: "default",
  view
});
```

## Breaking Changes

- `IPromise` TypeScript definition was removed at 4.28. Use native `Promise` instead.
- `*Constructor` TypeScript definition instances were removed at 4.28. Update usage of `__esri.ModuleConstructor` to `typeof __esri.Module`, or `import` the module from typings and change the type assignment to `typeof Module`, for example:

```js
// Type definitions at 4.27 and earlier
type IEsriDeps = [__esri.MapConstructor, __esri.MapViewConstructor];

// Type definitions at 4.28 and later
type IEsriDeps = [typeof __esri.Map, typeof __esri.MapView];
```

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
| --------------------------- | ---------------- | ------------------ |
| TBD                         | TBD              | TBD                |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000156080: Fixed an issue where requests for features not visible or displayed would still fire when [snapping using the Editor](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-interactive-snapping-SnappingOptions.html).
- [Esri Community - 1043965](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/querying-geojson-failed-in-4-18/m-p/1043965): Fixed an issue where the [GeoJSONLayer.queryFeatures()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html#queryFeatures) not returning results when geometry's extent is used for query.
- [Esri Community - 1307834](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/attachments-widget-bug/m-p/1307834): Fixed an issue where the [Attachments](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Attachments.html) widget throws an error saying `cannot set properties of null even though graphic valid`.
- [Esri Community - 1308220](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/searchwidget-with-view-no-layerview-for-layer/m-p/1308220): Fixed an issue with displaying an error message in the browser console when creating a [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) on-the-fly to use as a [LayerSearchSource](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search-LayerSearchSource.html) with the [Search](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html) widget.
- Fixed an accessibility issue in the [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html) widget to avoid placing inactive elements in the focus order.
- Fixed an issue where setting the `featureMenuOpen` option to true in [Features.open()](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Features.html#open) and [Popup.open()](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#open) was not opening a list of selected features.
- Fixed an issue where setting the `heading` [VisibleElement](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Features.html#VisibleElements) on the Features widget to `false` was not hiding the heading in the UI.
- [ArcGIS Ideas - 1310879](https://community.esri.com/t5/arcgis-javascript-maps-sdk-ideas/improve-media-pagination-experience-in-popup/idi-p/1310879) - Enhanced [MediaContent](https://developers.arcgis.com/javascript/latest/api-reference/esri-popup-content-MediaContent.html) to only show pagination when there are multiple media elements added to the [mediaInfos](https://developers.arcgis.com/javascript/latest/api-reference/esri-popup-content-MediaContent.html#mediaInfos) array.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.26 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- For local builds, [Webpack](https://webpack.js.org/) versions prior to `5.84.0` are deprecated at 4.27. This is related to bug fixes in Webpack.

<details>
  <summary>Click to expand the complete list</summary>

- AreaMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
- AreaMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
- Attribution.iconClass deprecated since 4.27. Use icon instead.
- BasemapGallery.iconClass deprecated since 4.27. Use icon instead.
- BasemapLayerList.iconClass deprecated since 4.27. Use icon instead.
- The "classic" possible value for BasemapLayerList.style is depricated at 4.28. Use "default" instead.
- Bookmarks.iconClass deprecated since 4.27. Use icon instead.
- BookmarksViewModel.abilities deprecated since 4.27. Use capabilities instead.
- BuildingExplorer.iconClass deprecated since 4.27. Use icon instead.
- Compass.iconClass deprecated since 4.27. Use icon instead.
- CreateWorkflow deprecated since version 4.23. Use CreateFeaturesWorkflow instead.
- CreateWorkflowData.edits deprecated since 4.23. Use CreateFeaturesWorkflow.pendingFeatures to access edits made to the workflow data.
- CreateWorkflowData deprecated since version 4.23. Use CreateFeaturesWorkflowData instead.
- Daylight.iconClass deprecated since 4.27. Use icon instead.
- Directions.iconClass deprecated since 4.27. Use icon instead.
- DirectLineMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
- DistanceMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
- Editor.iconClass deprecated since 4.27. Use icon instead.
- Editor.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use - startCreateFeaturesWorkflowAtFeatureCreation
- Editor.startCreateWorkflowAtFeatureEdit deprecated since 4.23.
- Editor.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection instead.
- Editor.useDeprecatedCreateWorkflow deprecated since version 4.23. Although new at 4.23, this property was introduced to help migrate from the legacy CreateWorkflow to the updated CreateFeaturesWorkflow. Once CreateWorkflow is fully removed, this property will no longer be necessary.
- EditorViewModel.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation.
- EditorViewModel.startCreateWorkflowAtFeatureEdit deprecated since 4.23.
- EditorViewModel.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection.
- ElevationProfile.iconClass deprecated since 4.27. Use icon instead.
- EventAttachedCallback.EventAttachedCallback deprecated since version 4.24. Use reactiveUtils.ReactiveListenerChangeCallback() instead.
- Expand.collapseIconClass deprecated since 4.27. Use collapseIcon instead.
- Expand.expandIconClass deprecated since 4.27. Use expandIcon instead.
- externalRenderers.forceWebGLContext deprecated since 4.27.
- FeatureForm.view deprecated since 4.27. Use map instead.
- FeatureFormViewModel.inputFields deprecated since version 4.27. Instead use inputs.
- FeatureTable.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.deselectRows deprecated since 4.25. Use highlightIds.remove() instead.
- FeatureTable.fieldConfigs deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FeatureTable.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTable.selection-change deprecated since version 4.25. Listen for changes on highlightIds instead.
- FeatureTable.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FeatureTableViewModel.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTableViewModel.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTableViewModel.fieldConfigs deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FeatureTableViewModel.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTableViewModel.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FieldColumn.config deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FieldColumnConfig deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FieldElement.editable deprecated since version 4.26. Use editableExpression instead. Assigning editableExpression values of "true" and "false" will have the same effect as assigning true and false to editable.
- FieldGroupConfig.visibilityExpression deprecated since version 4.23. Set fields via the GroupElement.visibilityExpression
- FieldGroupConfig deprecated since version 4.23. Set field groupings via the GroupElement.
- ImageHistogramParameters.renderingRule deprecated since version 4.27. Use rasterFunction instead.
- ImageIdentifyParameters.renderingRule deprecated since version 4.27. Use rasterFunctions instead.
- ImageIdentifyParameters.renderingRules deprecated since version 4.27. Use rasterFunctions instead.
- ImageryLayer.renderingRule deprecated since 4.27. Use rasterFunction instead.
- InputField deprecated since 4.27. Use FieldInput instead.
- InputFieldGroup deprecated since 4.27. Use GroupInput instead.
- LayerList.iconClass deprecated since 4.27. Use icon instead.
- The "classic" possible value for LayerList.style is depricated at 4.28. Use "default" instead.
- Legend.iconClass deprecated since 4.27. Use icon instead.
- Lighting deprecated since version 4.24. Use SunLighting instead.
- LineOfSight.iconClass deprecated since 4.27. Use icon instead.
- Locate.useHeadingEnabled deprecated since 4.27. Use rotationEnabled instead.
- Measurement.iconClass deprecated since 4.27. Use icon instead.
- MosaicRule.itemRenderingRule deprecated since version 4.27. Use itemRasterFunction instead.
- PausableWatchHandle.PausableWatchHandle deprecated since version 4.24.
- Popup.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- PopupViewModel.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- Print.iconClass deprecated since 4.27. Use icon instead.
- PromisedWatchHandle.PromisedWatchHandle deprecated since version 4.24. Use Promise instead.
- Search.iconClass deprecated since 4.27. Use icon instead.
- ShadowCast.iconClass deprecated since 4.27. Use icon instead.
- Sketch.iconClass deprecated since 4.27. Use icon instead.
- Slice.iconClass deprecated since 4.27. Use icon instead.
- SnappingControls.iconClass deprecated since 4.27. Use icon instead.
- Subclassing and extending esri/widgets/Widget when building custom widgets is deprecated at 4.27. Use the JavaScript framework of your choice to create an HTMLElement and use View.ui to add it to the MapView or SceneView.
- SunLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- SunLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- Swipe.iconClass deprecated since 4.27. Use icon instead.
- TableList.iconClass deprecated since 4.27. Use icon instead.
- The allowAttachments property within Editor.layerInfos is deprecated at 4.25. Use either attachmentsOnCreateEnabled or attachmentsOnUpdateEnabled instead.
- The "non-metric" possible value for ScaleBar.unit is deprecated at 4.27. Please use "imperial" instead.
- TimeSlider.iconClass deprecated since 4.27. Use icon instead.
- Track.useHeadingEnabled deprecated since 4.27. Use rotationEnabled instead.
- UtilityNetwork.rulesTableId deprecated since version 4.25. Use networkSystemLayers.rulesTableId instead.
- UtilityNetwork.rulesTableUrl deprecated since version 4.25. Use networkSystemLayers.rulesTableUrl instead.
- UtilityNetwork.subnetworksTableId deprecated since version 4.25. Use networkSystemLayers.subnetworksTableId instead.
- UtilityNetwork.subnetworksTableUrl deprecated since version 4.25. Use networkSystemLayers.subnetworksTableUrl instead.
- UtilityNetworkTrace.iconClass deprecated since 4.27. Use icon instead.
- VirtualLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- VirtualLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- VoxelVariable deprecated This module was moved in 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated This module was moved in 4.25. Use VoxelVolumeStyle instead.
- watchUtils.init deprecated since 4.24. Use reactiveUtils.watch() instead.
- watchUtils.on deprecated since 4.24. Use reactiveUtils.on() instead.
- watchUtils.once deprecated since 4.24. Use reactiveUtils.once() instead.
- watchUtils.pausable deprecated Since 4.24.
- watchUtils.watch deprecated since 4.24. Use reactiveUtils.watch() instead.
- watchUtils.when deprecated since 4.24. Use reactiveUtils.when() instead.
- watchUtils.whenDefined deprecated since 4.24. Use reactiveUtils.when() instead.
- watchUtils.whenDefinedOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils.whenEqual deprecated since 4.24. Use reactiveUtils.when() instead
- watchUtils.whenEqualOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils.whenFalse deprecated since 4.24. Use reactiveUtils.when() instead.
- watchUtils.whenFalseOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils.whenNot deprecated since 4.24. Use reactiveUtils.when() instead.
- watchUtils.whenNotOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils.whenOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils.whenTrue deprecated since 4.24. Use reactiveUtils.when() instead.
- watchUtils.whenTrueOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils.whenUndefined deprecated since 4.24. Use reactiveUtils.when() instead.
- watchUtils.whenUndefinedOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
- watchUtils deprecated since version 4.24. Use reactiveUtils instead.
- Weather.iconClass deprecated since 4.27. Use icon instead.
- Zoom.iconClass deprecated since 4.27. Use icon instead.

</details>
