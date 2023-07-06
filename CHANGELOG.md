# Change log

The `next` version of 4.28 is now available.  Planned release date is October 2023.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Widget Updates

## Breaking Changes

* `IPromise` TypeScript definition was removed at 4.28. Use native `Promise` instead.
* `*Constructor` TypeScript definition instances were removed at 4.28. Update usage of `__esri.ModuleConstructor` to `typeof __esri.Module`, or `import` the module from typings and change the type assignment to `typeof Module`, for example:
```js
// Type definitions at 4.27 and earlier
type IEsriDeps = [
  __esri.MapConstructor,
  __esri.MapViewConstructor
];

// Type definitions at 4.28 and later
type IEsriDeps = [
  typeof __esri.Map,
  typeof __esri.MapView
];
```

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| TBD | TBD | TBD |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements
* TBD

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
externalRenderers.forceWebGLContext deprecated since 4.27.
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
