# Change log

The `next` version of 4.29 is now available. Planned release date is February 2024.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Layer updates

## Widget Updates

## Breaking Changes

- For local builds, [Webpack](https://webpack.js.org/) versions prior to `5.84.0` have been removed at 4.29. This is related to bug fixes in Webpack.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| TBD | TBD | TBD |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- TBD

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.27 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- The allowAttachments property within Editor.layerInfos is deprecated at 4.25. Use either attachmentsOnCreateEnabled or attachmentsOnUpdateEnabled instead.
- The "non-metric" possible value for ScaleBar.unit is deprecated at 4.27. Please use "imperial" instead.
- As of 4.27, when building new custom widgets it is no longer recommended to subclass or extend esri/widgets/Widget. Instead, use DOM elements such as DIVs, web components or JavaScript framework components in combination with the Calcite Design System. More information about creating a custom UI is available in the [Custom UI basics](https://developers.arcgis.com/javascript/latest/custom-ui/) Guide topic.

<details>
  <summary>Click to expand the complete list</summary>

- Accessor.get deprecated since version 4.28. Use optional chaining
- HandleOwner deprecated since version 4.28. Use addHandles() and removeHandles() from Accessor instead.
- FieldElement.editable deprecated since version 4.26. Use editableExpression instead. Assigning editableExpression values of "true" and "false" will have the same effect as assigning true and false to editable.
- ImageryLayer.renderingRule deprecated since 4.27. Use rasterFunction instead.
- MosaicRule.itemRenderingRule deprecated since version 4.27. Use itemRasterFunction instead.
- VoxelVariable deprecated This module was moved in 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated This module was moved in 4.25. Use VoxelVolumeStyle instead.
- ValidateNetworkTopologyResult.dirtyAreaCount deprecated since version 4.28. Dirty area count was implemented in the original version of utility network, but as of schema version 4 of the utility network, this is no longer supported.
- ImageHistogramParameters.renderingRule deprecated since version 4.27. Use rasterFunction instead.
- ImageIdentifyParameters.renderingRule deprecated since version 4.27. Use rasterFunctions instead.
- ImageIdentifyParameters.renderingRules deprecated since version 4.27. Use rasterFunctions instead.
- SunLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- SunLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- VirtualLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
-	VirtualLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
-	externalRenderers.forceWebGLContext deprecated since 4.27.
-	Lighting deprecated since version 4.24. Use SunLighting instead.
-	Lighting deprecated since version 4.24
-	Lighting.clone deprecated since version 4.24
-	AreaMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	AreaMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Attribution.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	BasemapGallery.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	BasemapLayerList.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Bookmarks.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	BookmarksViewModel.abilities deprecated since 4.27. Use capabilities instead.
-	BuildingExplorer.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Compass.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Daylight.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	DirectionalPad.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Directions.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	DirectLineMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	DistanceMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Editor.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Editor.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation
-	Editor.startCreateWorkflowAtFeatureEdit deprecated since 4.23
-	Editor.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection instead.
-	Editor.useDeprecatedCreateWorkflow deprecated since version 4.23. Although new at 4.23, this property was introduced to help migrate from the legacy CreateWorkflow to the updated CreateFeaturesWorkflow. Once CreateWorkflow is fully removed, this property will no longer be necessary.
-	CreateWorkflow deprecated since version 4.23. Use CreateFeaturesWorkflow instead.
-	CreateWorkflowData deprecated since version 4.23. Use CreateFeaturesWorkflowData instead.
-	CreateWorkflowData.edits deprecated since 4.23. Use CreateFeaturesWorkflow.pendingFeatures to access edits made to the workflow data.
-	EditorViewModel.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation.
-	EditorViewModel.startCreateWorkflowAtFeatureEdit deprecated since 4.23
-	EditorViewModel.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection.
-	ElevationProfile.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Expand.collapseIconClass deprecated since 4.27. Use collapseIcon instead.
-	Expand.expandIconClass deprecated since 4.27. Use expandIcon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	FeatureForm.view deprecated since 4.27. Use map instead.
-	FeatureFormViewModel.inputFields deprecated since version 4.27. Instead use inputs.
-	GroupInput.state deprecated since version 4.28. Instead use open.
-	InputField deprecated since 4.27. Use FieldInput instead.
-	InputField.description deprecated since 4.27. Use FieldInput.description instead.
-	InputField.domain deprecated since 4.27. Use FieldInput.domain instead.
-	InputField.editable deprecated since 4.27. Use FieldInput.editable instead.
-	InputField.editorType deprecated since 4.27. Use FieldInput.inputType instead.
-	InputField.error deprecated since 4.27. Use FieldInput.error instead.
-	InputField.errorMessage deprecated since 4.27. Use FieldInput.error instead.
-	InputField.group deprecated since 4.27. Use FieldInput.group instead.
-	InputField.hint deprecated since 4.27. Use FieldInput.hint instead.
-	InputField.includeTime deprecated since 4.27. Use FieldInput.includeTime instead.
-	InputField.label deprecated since 4.27. Use FieldInput.label instead.
-	InputField.maxLength deprecated since 4.27. Use FieldInput.maxLength instead.
-	InputField.minLength deprecated since 4.27. Use FieldInput.minLength instead.
-	InputField.name deprecated since 4.27. Use FieldInput.name instead.
-	InputField.required deprecated since 4.27. Use FieldInput.required instead.
-	InputField.submittable deprecated since 4.27. Use FieldInput.submittable instead.
-	InputField.type deprecated since 4.27. Use FieldInput.dataType instead.
-	InputField.updating deprecated since 4.27. Use FieldInput.updating instead.
-	InputField.valid deprecated since 4.27. Use FieldInput.valid instead.
-	InputField.value deprecated since 4.27. Use FieldInput.value instead.
-	InputField.visible deprecated since 4.27. Use FieldInput.visible instead.
-	InputFieldGroup deprecated since 4.27. Use GroupInput instead.
-	InputFieldGroup.description deprecated since 4.27. Use GroupInput.description instead.
-	InputFieldGroup.evaluatedVisibilityExpression deprecated since 4.27. Use GroupInput.visible instead.
-	InputFieldGroup.inputFields deprecated since 4.27. Use GroupInput.inputs instead.
-	InputFieldGroup.label deprecated since 4.27. Use GroupInput.label
-	InputFieldGroup.state deprecated since 4.27. Use GroupInput.state
-	InputFieldGroup.visibilityExpression deprecated since 4.27. Use Element.visibilityExpression
-	InputFieldGroup.visible deprecated since 4.27. Use GroupInput.visible
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	FeatureTable.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
-	FeatureTable.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
-	FeatureTable.deselectRows deprecated since 4.25. Use highlightIds.remove() instead.
-	FeatureTable.selection-change deprecated since version 4.25. Listen for changes on highlightIds instead.
-	FeatureTable.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	FeatureTable.selectRows deprecated since 4.25. Use highlightIds.add() instead.
-	FeatureTableViewModel.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
-	FeatureTableViewModel.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
-	FeatureTableViewModel.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
-	FeatureTableViewModel.selectRows deprecated since 4.25. Use highlightIds.add() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	LayerList.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Legend.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	LineOfSight.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Locate.useHeadingEnabled deprecated since 4.27. Use rotationEnabled instead.
-	Measurement.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Popup.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
-	Popup.maxInlineActions deprecated TODO: DOCUMENT
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	PopupViewModel.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
-	Print.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Search.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	ShadowCast.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Sketch.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Slice.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	SnappingControls.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Swipe.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	iconClass.iconClass deprecated since 4.27. Use icon instead.
-	TimeSlider.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Track.useHeadingEnabled deprecated since 4.27. Use rotationEnabled instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	UtilityNetworkTrace.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Weather.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.
-	Widget.iconClass deprecated since 4.27. Use icon instead.
-	Zoom.iconClass deprecated since 4.27. Use icon instead.
-	Widget.own deprecated since 4.28 Use addHandles() instead.

</details>
