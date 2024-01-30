# Change log

The `next` version of 4.29 is now available. Planned release date is February 2024.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Layer updates

### Pagination on WFSLayer

WFSLayer now uses pagination on requests to the service instead of requesting the features all at once, which should lead to better performance and load time of large WFSLayers. Use the `maxRecordCount` property to set the maximum number of features that can be returned in a single request.

## Widget Updates

### LayerList, BasemapLayerList and TableList widgets redesigned to use Calcite Design System

We have redesigned the [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html), [BasemapLayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapLayerList.html) and [TableList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TableList.html) widgets to use the [Calcite Design System](https://developers.arcgis.com/calcite-design-system/). The refactor also allowed us to implement filtering the layers and tables. We have also added a ListItemPanel to table list items.

We've updated the properties that control selection and reordering in list widgets. The now deprecated `selectionEnabled` property, which controlled both selection and reordering, has been replaced with `dragEnabled` and `selectionMode`. `dragEnabled` controls reordering, while `selectionMode` manages selection.

`selectionMode` can be set to:
| Value | Description |
| ----- | ----------- |
| multiple | Allows any number of items to be selected at once. This is useful when you want to apply an operation to multiple items at the same time. |
| none | Disables selection. Use this when you want to prevent selecting items. |
| single | Allows only one item to be selected at a time. If another item is selected, the previous selection is cleared. This is useful when you want to ensure that a maximum of one item is selected at a time. |
| single-persist | Allows only one item to be selected at a time and prevents de-selection. Once an item is selected, it remains selected until another item is selected. This is useful when you want to ensure that there is always exactly one selected item. |

By adding `selectionMode`, `multipleSelectionEnabled` is no longer necessary and it has been deprecated and will be removed in a future release.

[ListItemPanel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList-ListItemPanel.html)s now do not include any padding by default. We want to leave the spacing inside the ListItemPanel, and its content to the application developer. We have also added a `flowEnabled` property to the ListItemPanels to control if the panel opens in a slot at the bottom of the ListItem or in a [Calcite Flow](https://developers.arcgis.com/calcite-design-system/components/flow/) that allows for drilling in and out of panels.

#### This is a quick summary of the changes.
- Deprecates the `multipleSelectionEnabled` property. Use `selectionMode` instead.
- Deprecates the `selectionEnabled` property. Use `selectionMode` and `dragEnabled` as appropriate.
- Adds `collapsed` property that indicates whether the widget is collapsed with the `visibleElements.collapseButton`
- Adds `dragEnabled` property that enables ListItems to be sortable via a draggable button.
- Adds `filterPlaceholder` property for placeholder text used in the filter input if `visibleElements.filter` is true.
- Adds `filterText` property for the value of the filter input text string if `visibleElements.filter` is true.
- Adds `headingLevel` property that indicates the heading level to use for the heading of the widget.
- Adds `selectionMode` property that specifies the selection mode - "multiple" (allow any number of selected items), "single" (allow one selected item), "single-persist" (allow one selected item and prevent de-selection), or "none" (no selected items). Selected items are available in the selectedItems property.
- Adds `visibleElement` properties:
  - `closeButton`:  Indicates whether to display a close button in the widget's heading.
  - `collapseButton`: Indicates whether to display a collapse button in the widget's heading.
  - `filter`: Adds a filter input that allows filtering the layers or tables
  - `flow`: Determines whether the widget should be shown within its built-in [flow component](https://developers.arcgis.com/calcite-design-system/components/flow/) or if the flow component should be excluded.
  - `heading`: Indicates whether to display the widget heading.

```js
const layerList = new LayerList({
  collapsed: false,
  dragEnabled: true,
  filterPlaceholder: "Filter layers",
  headingLevel: 3,
  selectionMode: "multiple",
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

### Feature order in the Popup and Features widget
The [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html) and [Features](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Features.html) widgets now display features from multiple layers in the order they are displayed in the map. This means that the features of the topmost layer in the map will appear first, followed by the features of the next layer, and so on. In previous versions, the features were displayed in the order they were returned from the server.

### Configure ScaleRangeSlider mode

The `mode` property on [ScaleRangeSlider](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleRangeSlider.html) allows you to configure which of the slider thumbs are adjustable. Possible values are `range` (both thumbs adjustable), `max-scale-only`, and `min-scale-only`.

## Breaking Changes

- At version 4.29, only WebGL2-enabled browsers are supported for both 2D and 3D. See the [System Requirements](https://developers.arcgis.com/javascript/latest/system-requirements/) for more information.
- For local builds, using [Webpack](https://webpack.js.org/) versions prior to `5.84.0` is not recommended for 4.29. This is related to bug fixes in Webpack.

### Removal of FetchPopupFeaturesResult members in the Popup class
The [`FetchPopupFeaturesResult`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#FetchPopupFeaturesResult) type definition in the Popup class had the following properties removed from the API at this release:
| Property | Replacement |
| -- | -- |
| `FetchPopupFeaturesResult.clientOnlyGraphics` | [`FetchPopupFeaturesResult.allGraphicsPromise`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#FetchPopupFeaturesResult) |
| `FetchPopupFeaturesResult.promisesPerLayerView` | [`FetchPopupFeaturesResult.allGraphicsPromise`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#FetchPopupFeaturesResult) |
| `FetchPopupFeaturesPromisesPerLayerView` | N/A |

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
| `CreateWorkflow` | [CreateFeaturesWorkflow](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-CreateFeaturesWorkflow.html)  | 4.23 |
| `CreateWorkflowData` | [CreateFeaturesWorkflowData](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-CreateFeaturesWorkflowData.html)  | 4.23 |
| `Editor.startCreateWorkflowAtFeatureCreation`  | [Editor.startCreateFeaturesWorkflowAtFeatureCreation](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startCreateFeaturesWorkflowAtFeatureCreation)  | 4.23 |
| `EditorViewModel.startCreateWorkflowAtFeatureCreation`  | [EditorViewModel.startCreateFeaturesWorkflowAtFeatureCreation](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startCreateFeaturesWorkflowAtFeatureCreation)  | 4.23 |
| `Editor.startCreateWorkflowAtFeatureTypeSelection`  | [Editor.startCreateFeaturesWorkflowAtFeatureTypeSelection](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startCreateFeaturesWorkflowAtFeatureTypeSelection)  | 4.23 |
| `EditorViewModel.startCreateWorkflowAtFeatureTypeSelection`  | [EditorViewModel.startCreateFeaturesWorkflowAtFeatureTypeSelection](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startCreateFeaturesWorkflowAtFeatureTypeSelection)  | 4.23 |
| `Editor.startCreateWorkflowAtFeatureEdit`  | [Editor.startCreateFeaturesWorkflowAtFeatureEdit](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startCreateFeaturesWorkflowAtFeatureEdit)  | 4.23 |
| `EditorViewModel.startCreateWorkflowAtFeatureEdit`  | [EditorViewModel.startCreateFeaturesWorkflowAtFeatureEdit](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startCreateFeaturesWorkflowAtFeatureEdit)  | 4.23 |
| `Editor.useDeprecatedCreateWorkflow` | no longer applicable | 4.23 |
| `FeatureTable.clearHighlights()`  | call [removeAll](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#removeAll) from [FeatureTable.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#highlightIds)  | 4.25 |
| `FeatureTableViewModel.clearHighlights()`  | call [removeAll](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#removeAll) from [FeatureTableViewModel.highlightIds](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable-FeatureTableViewModel.html#highlightIds)  | 4.25 |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

- BUG-000129596: Improved the clipping of point symbols at large scales when a size visual variable is defined with [real world size](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-SizeVariable.html#RealWorldSize).
- BUG-000149236 Fixed an issue where [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) features flash when zooming in or out while [applyEdits](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#applyEdits) is called.
- BUG-000156355: Fixed an issue where a [WFSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WFSLayer.html) was not loading when the service's `outputFormat` was defined as `geo+json`.
- BUG-000163592: Fixed an issue with typings where the [FeatureService.applyEdits](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-featureService-FeatureService.html#applyEdits) method parameters were not included in the TypeScript definitions.
- BUG-000160409: Fixed an issue where [OGCFeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OGCFeatureLayer.html) popups were not appearing when displaying a field name that contains a `.` (period).
- ENH-000120327: Added support for creating a client-side [ImageryTileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html) from [pixelData](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html#PixelData) by setting the `source` property.
- ENH-000156986: Added support for using the `$view.scale` profile variable in primitive override expressions for graphics in with GraphicLayer.
- ENH-000157271: Updated the default ordering of features in the [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html) and [Features](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Features.html) widget to show features in layer order starting with the topmost layer in the map.
- [Esri Community - 1339508](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/cimsymbol-marker-placement-relativeto-quot/m-p/1339508): Fixed an issue where a [CIMSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-CIMSymbol.html) with the marker placement type `CIMMarkerPlacementOnLine` was not rendering when `relativeTo` was set to `"SegmentMidpoint"`.
- [Esri community - 1350675](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/changing-compass-widget-icon-in-arcgis-maps-sdk/m-p/1350675): Fixed an issue with the Compass widget and FullScreen widget that wasn't allowing the icon to be customized.
- [Esri Community - 1351209](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/elevationprofile-widget-in-dark-theme/m-p/1351209): Fixed an issue with the [ElevationProfile](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ElevationProfile.html) widget where the chart tooltip text was not legible in the dark theme.
- [GitHub - 268](https://github.com/Esri/feedback-js-api-next/issues/268): Fixed an issue where [MapView.goTo](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#goTo) was not honoring its abort signal.
- Fixed an issue where the dropdown for grouped actions was not anchored to the [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html) when zooming in/out of the view.
- Fixed an issue where [MapView.hitTest()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) was returning an empty [graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) for [ImageryLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html). No result is returned now.
- Added a new [`getAllHeaders()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-request.html#getAllHeaders) method to [`esri/request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-request.html) to retrieve all headers sent from the server.
- Added a new `no-prompt` [Portal.authMode](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#authMode) to control whether to display a sign-in prompt after checking if the user is already signed in.
- Added new [VisibleElements](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#VisibleElements) to the [Popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html): `actionBar`, `collapseButton`, `heading`, `spinner`
- Added the `flow` [VisibleElement](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Features.html#VisibleElements) to the [Features](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Features.html) widget to control whether to display the widget in its default Calcite [flow](https://developers.arcgis.com/calcite-design-system/components/flow/) or place the widget in a custom flow component.
- Added support for an asynchronous `updateBasemapsCallback` function in [PortalBasemapsSource](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery-support-PortalBasemapsSource.html#UpdateBasemapsCallback).
- Added support for resources with relative paths in an [OGCFeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-OGCFeatureLayer.html).
- When loading a web-tier authenticated [portal](v/api-reference/esri-portal-Portal.html), the [request](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) `trustedServers` property no longer needs to be set with the portal url to prompt for credentials.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.28 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

- The AMD npm package [`arcgis-js-api`](https://www.npmjs.com/package/arcgis-js-api) is deprecated at version 4.29. This is related to dropping local build support for legacy Dojo 1 and RequireJS. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.
- The npm package [`@arcgis/cli`](https://www.npmjs.com/package/@arcgis/cli) is deprecated at version 4.29. Plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) and Calcite.
- The [`esri-loader`](https://github.com/Esri/esri-loader/blob/master/README.md) library is deprecated at version 4.29. Use [@arcgis/core](https://developers.arcgis.com/javascript/latest/es-modules/) ES modules or plan on moving to [components (beta)](https://developers.arcgis.com/javascript/latest/components/) instead.

<details>
  <summary>Click to expand the complete list</summary>

- Accessor.get deprecated since version 4.28. Use optional chaining instead.
- AreaMeasurement2D.iconClass deprecated since 4.27. Use icon instead.
- AreaMeasurement3D.iconClass deprecated since 4.27. Use icon instead.
- Attribution.iconClass deprecated since 4.27. Use icon instead.
- BasemapGallery.iconClass deprecated since 4.27. Use icon instead.
- BasemapLayerList.iconClass deprecated since 4.27. Use icon instead.
- BasemapLayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- BasemapLayerList.editingEnabled deprecated since 4.29. Use dragEnabled, selectionMode, and visibleElements.editButton instead.
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
- LayerList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- LayerList.selectionEnabled deprecated since 4.29. Use dragEnabled and selectionMode instead.
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
- TableList.multipleSelectionEnabled deprecated since 4.29. Use selectionMode instead.
- TableList.selectionEnabled deprecated since 4.29. Use dragEnabled and selectionMode instead.
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
