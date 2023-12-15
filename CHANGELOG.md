# Change log

The `next` version of 4.29 is now available. Planned release date is February 2024.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Layer updates

## Widget Updates

### LayerList, BasemapLayerList and TableList widgets redesigned to use Calcite Design System

We have redesigned the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html), [BasemapLayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapLayerList.html) and [TableList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TableList.html) widgets to use the [Calcite Design System](https://developers.arcgis.com/calcite-design-system/). The refactor also allowed us to implement filtering the layers and tables. We have also added a ListItemPanel to table list items.

[ListItemPanel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList-ListItemPanel.html)s now do not include any padding by default. We want to leave the spacing inside the ListItemPanel, and its content to the application developer. We have also added a `flowEnabled` property to the ListItemPanels to control if the panel opens in a slot at the bottom of the ListItem or in a [Calcite Flow](https://developers.arcgis.com/calcite-design-system/components/flow/) that allows for drilling in and out of panels.

#### This is a quick summary of the changes.
- Adds `collapsed` property that indicates whether the widget is collapsed with the `visibleElements.collapseButton`
- Adds `filterPlaceholder` property for placeholder text used in the filter input if visibleElements.filter is true.
- Adds `filterText` property for the value of the filter input text string if visibleElements.filter is true.
- Adds `headingLevel` property that indicates the heading level to use for the heading of the widget.
- Adds `visibleElement` properties:
  - `closeButton`:  Indicates whether to display a close button in the widget's heading.
  - `collapseButton`: Indicates whether to display a collapse button in the widget's heading.
  - `filter`: Adds a filter input that allows filtering the layers or tables
  - `flow`: Determines whether the widget should be shown within its built-in [flow component](https://developers.arcgis.com/calcite-design-system/components/flow/) or if the flow component should be excluded.
  - `heading`: Indicates whether to display the widget heading.

```js
const layerList = new LayerList({
  collapsed: false,
  filterPlaceholder: "Filter layers",
  headingLevel: 3,
  view,
  visibleElements: {
    closeButton: true,
    collapseButton: true,
    errors: true,
    filter: true,
    flow: true,
    heading: true,
    statusIndicators: true
  }
});
```

## Breaking Changes

- At version 4.29, only WebGL2-enabled browsers are supported for both 2D and 3D. See the [System Requirements](https://developers.arcgis.com/javascript/latest/system-requirements/) for more information.
- For local builds, using [Webpack](https://webpack.js.org/) versions prior to `5.84.0` is not recommended for 4.29. This is related to bug fixes in Webpack.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| `InputField` class       | [FieldInput](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html) class  | 4.27 | 
| `InputField.description`  | [FieldInput.description](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#description) | 4.27 |  
| `InputField.domain`       | [FieldInput.domain](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#domain) | 4.27 | 
| `InputField.editable`     | [FieldInput.editable](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#editable) | 4.27 | 
| `InputField.editorType`   | [FieldInput.inputType](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#inputType) | 4.27 | 
| `InputField.error`        | [FieldInput.error](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#error) | 4.27 | 
| `InputField.errorMessage` | [FieldInput.error](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#error) | 4.27 | 
| `InputField.group`        | [FieldInput.group](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#group) | 4.27 | 
| `InputField.hint`         | [FieldInput.hint](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#hint) | 4.27 | 
| `InputField.includeTime`  | [FieldInput.includeTime](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#includeTime) | 4.27 | 
| `InputField.label`        | [FieldInput.label](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#label) | 4.27 | 
| `InputField.maxLength`    | [FieldInput.maxLength](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#maxLength) | 4.27 | 
| `InputField.minLength`    | [FieldInput.minLength](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#minLength) | 4.27 | 
| `InputField.name`         | [FieldInput.name](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#name) | 4.27 | 
| `InputField.label`        | [FieldInput.label](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#label) | 4.27 | 
| `InputField.required`     | [FieldInput.required](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#required) | 4.27 | 
| `InputField.submittable`  | [FieldInput.submittable](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#submittable) | 4.27 | 
| `InputField.type`         | [FieldInput.dataType](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#dataType) | 4.27 | 
| `InputField.updating`     | [FieldInput.updating](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#updating) | 4.27 | 
| `InputField.valid`        | [FieldInput.valid](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#valid) | 4.27 | 
| `InputField.value`        | [FieldInput.value](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#value) | 4.27 | 
| `InputField.visible`      | [FieldInput.visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldInput.html#visible) | 4.27 |
| `InputFieldGroup` class  | [GroupInput](api-reference/esri-widgets-FeatureForm-GroupInput.html) class  | 4.27 |
| `InputFieldGroup.description`  | [GroupInput.description](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#description) | 4.27 |
| `InputFieldGroup.evaluatedVisibilityExpression`  | [GroupInput.visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#visible) | 4.27 |
| `InputFieldGroup.inputFields`  | [GroupInput.inputs](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#inputs) | 4.27 |
| `InputFieldGroup.label`  | [GroupInput.label](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#label) | 4.27 |
| `InputFieldGroup.description`  | [GroupInput.description](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#description) |
| `InputFieldGroup.state`  | [GroupInput.state](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#state) | 4.27 |
| `InputFieldGroup.visibilityExpression`  | [GroupElement.visibilityExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-form-elements-GroupElement.html#visibilityExpression) |
| `InputFieldGroup.visible`  | [GroupInput.visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-GroupInput.html#visible) | 4.27 |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000160409: Fixed an issue where [OGCFeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OGCFeatureLayer.html) popups were not appearing when displaying a field name that contains a `.` (period).
- [Esri Community - 1339508](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/cimsymbol-marker-placement-relativeto-quot/m-p/1339508): Fixed an issue where a CIMSymbol with the marker placement type `CIMMarkerPlacementOnLine` was not rendering when `relativeTo` was set to `"SegmentMidpoint"`.
- [Esri community - 1350675](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/changing-compass-widget-icon-in-arcgis-maps-sdk/m-p/1350675): Fixed an issue with the Compass widget and FullScreen widget that wasn't allowing the icon to be customized.
- [Esri Community - 1351209](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/elevationprofile-widget-in-dark-theme/m-p/1351209): Fixed an issue with the ElevationProfile widget where the chart tooltip text was not legible in the dark theme.
- Fixed an issue where the dropdown for grouped actions was not anchored to the [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html) when zooming in/out of the view.
- Added new [VisibleElements](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#VisibleElements) to the [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html): `actionBar`, `collapseButton`, `heading`, `spinner`
- When loading a web-tier authenticated [portal](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html), the [request](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) `trustedServers` property no longer needs to be set with the portal url to prompt for credentials.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.28 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library is deprecated at version 4.29. Use [components](https://developers.arcgis.com/javascript/latest/components/) or the [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules instead.

<details>
  <summary>Click to expand the complete list</summary>

- Accessor.get deprecated since version 4.28. Use optional chaining instead.
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
- Editor.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation
- Editor.startCreateWorkflowAtFeatureEdit deprecated since 4.23
- Editor.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection instead.
- Editor.useDeprecatedCreateWorkflow deprecated since version 4.23. Although new at 4.23, this property was introduced to help migrate from the legacy CreateWorkflow to the updated CreateFeaturesWorkflow. Once CreateWorkflow is fully removed, this property will no longer be necessary.
- EditorViewModel.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation.
- EditorViewModel.startCreateWorkflowAtFeatureEdit deprecated since 4.23
- EditorViewModel.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection.
- ElevationProfile.iconClass deprecated since 4.27. Use icon instead.
- Expand.collapseIconClass deprecated since 4.27. Use collapseIcon instead.
- Expand.expandIconClass deprecated since 4.27. Use expandIcon instead.
- externalRenderers.forceWebGLContext deprecated since 4.27.
- FeatureForm.view deprecated since 4.27. Use map instead.
- FeatureFormViewModel.inputFields deprecated since version 4.27. Instead use inputs.
- FeatureTable.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.deselectRows deprecated since 4.25. Use highlightIds.remove() instead.
- FeatureTable.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTable.selection-change deprecated since version 4.25. Listen for changes on highlightIds instead.
- FeatureTable.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FeatureTableViewModel.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTableViewModel.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTableViewModel.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTableViewModel.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FieldElement.editable deprecated since version 4.26. Use editableExpression instead. Assigning editableExpression values of "true" and "false" will have the same effect as assigning true and false to editable.
- For local builds, Webpack versions prior to 5.84.0 are deprecated at 4.27. This is related to bug fixes in Webpack.
- GroupInput.state deprecated since version 4.28. Instead use open.
- HandleOwner deprecated since version 4.28. Use addHandles() and removeHandles() from Accessor instead.
- iconClass.iconClass deprecated since 4.27. Use icon instead.
- ImageHistogramParameters.renderingRule deprecated since version 4.27. Use rasterFunction instead.
- ImageIdentifyParameters.renderingRule deprecated since version 4.27. Use rasterFunctions instead.
- ImageIdentifyParameters.renderingRules deprecated since version 4.27. Use rasterFunctions instead.
- ImageryLayer.renderingRule deprecated since 4.27. Use rasterFunction instead.
- InputField.description deprecated since 4.27. Use FieldInput.description instead.
- InputField.domain deprecated since 4.27. Use FieldInput.domain instead.
- InputField.editable deprecated since 4.27. Use FieldInput.editable instead.
- InputField.editorType deprecated since 4.27. Use FieldInput.inputType instead.
- InputField.error deprecated since 4.27. Use FieldInput.error instead.
- InputField.errorMessage deprecated since 4.27. Use FieldInput.error instead.
- InputField.group deprecated since 4.27. Use FieldInput.group instead.
- InputField.hint deprecated since 4.27. Use FieldInput.hint instead.
- InputField.includeTime deprecated since 4.27. Use FieldInput.includeTime instead.
- InputField.label deprecated since 4.27. Use FieldInput.label instead.
- InputField.maxLength deprecated since 4.27. Use FieldInput.maxLength instead.
- InputField.minLength deprecated since 4.27. Use FieldInput.minLength instead.
- InputField.name deprecated since 4.27. Use FieldInput.name instead.
- InputField.required deprecated since 4.27. Use FieldInput.required instead.
- InputField.submittable deprecated since 4.27. Use FieldInput.submittable instead.
- InputField.type deprecated since 4.27. Use FieldInput.dataType instead.
- InputField.updating deprecated since 4.27. Use FieldInput.updating instead.
- InputField.valid deprecated since 4.27. Use FieldInput.valid instead.
- InputField.value deprecated since 4.27. Use FieldInput.value instead.
- InputField.visible deprecated since 4.27. Use FieldInput.visible instead.
- InputField deprecated since 4.27. Use FieldInput instead.
- InputFieldGroup.description deprecated since 4.27. Use GroupInput.description instead.
- InputFieldGroup.evaluatedVisibilityExpression deprecated since 4.27. Use GroupInput.visible instead.
- InputFieldGroup.inputFields deprecated since 4.27. Use GroupInput.inputs instead.
- InputFieldGroup.label deprecated since 4.27. Use GroupInput.label instead.
- InputFieldGroup.state deprecated since 4.27. Use GroupInput.state instead.
- InputFieldGroup.visibilityExpression deprecated since 4.27. Use Element.visibilityExpression instead.
- InputFieldGroup.visible deprecated since 4.27. Use GroupInput.visible instead.
- InputFieldGroup deprecated since 4.27. Use GroupInput instead.
- LayerList.iconClass deprecated since 4.27. Use icon instead.
- Legend.iconClass deprecated since 4.27. Use icon instead.
- Lighting deprecated since version 4.24. Use SunLighting instead.
- LineOfSight.iconClass deprecated since 4.27. Use icon instead.
- Locate.useHeadingEnabled deprecated since 4.27. Use rotationEnabled instead.
- Measurement.iconClass deprecated since 4.27. Use icon instead.
- MosaicRule.itemRenderingRule deprecated since version 4.27. Use itemRasterFunction instead.
- Popup.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- Popup.collapseEnabled deprecated since 4.29. Use PopupVisibleElements.collapseButton instead.
- Popup.spinnerEnabled deprecated since 4.29. Use PopupVisibleElements.spinner instead.
- PopupViewModel.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- Print.iconClass deprecated since 4.27. Use icon instead.
- Search.iconClass deprecated since 4.27. Use icon instead.
- ShadowCast.iconClass deprecated since 4.27. Use icon instead.
- Sketch.iconClass deprecated since 4.27. Use icon instead.
- Slice.iconClass deprecated since 4.27. Use icon instead.
- SnappingControls.iconClass deprecated since 4.27. Use icon instead.
- Subclassing and extending esri/widgets/Widget when building custom widgets is deprecated at 4.27. Use the JavaScript framework of your choice to create an HTMLElement and use View.ui to add it to the MapView or SceneView.
- SunLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- SunLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- Swipe.iconClass deprecated since 4.27. Use icon instead.
- The allowAttachments property within Editor.layerInfos is deprecated at 4.25. Use either attachmentsOnCreateEnabled or attachmentsOnUpdateEnabled instead.
- The "non-metric" possible value for ScaleBar.unit is deprecated at 4.27. Please use "imperial" instead.
- TimeSlider.iconClass deprecated since 4.27. Use icon instead.
- Track.useHeadingEnabled deprecated since 4.27. Use rotationEnabled instead.
- UtilityNetworkTrace.iconClass deprecated since 4.27. Use icon instead.
- ValidateNetworkTopologyResult.dirtyAreaCount deprecated since version 4.28. Dirty area count was implemented in the original version of utility network, but as of schema version 4 of the utility network, this is no longer supported.
- VirtualLighting.ambientOcclusionEnabled deprecated since version 4.27. Ambient occlusion is automatically shown and this property has no effect.
- VirtualLighting.waterReflectionEnabled deprecated since version 4.27. Reflections are automatically shown and this property has no effect.
- VoxelVariable deprecated This module was moved in 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated This module was moved in 4.25. Use VoxelVolumeStyle instead.
- Weather.iconClass deprecated since 4.27. Use icon instead.
- Widget.own deprecated since 4.28 Use addHandles() instead.
- Zoom.iconClass deprecated since 4.27. Use icon instead.

</details>
