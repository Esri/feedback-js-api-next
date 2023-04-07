# Change log

The `next` version of 4.27 is now available.  Planned release date is June 2023.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Widget Updates

### Calcite Icon in the Expand widget

We've added support for [Calcite icons](https://developers.arcgis.com/calcite-design-system/icons/?library=Calcite%20UI&version=3.21.2) in the Expand widget through the new `expandIcon` and `collapseIcon` properties. This gives you access to over 800 icons that can be used out of the box in the Expand widget, simply by referencing the name of the icon.

```js
const expandWidget = new Expand({
  view: view,
  expandIcon: "pie-chart", // calcite icon
  collapseIcon: "caret-square-right",
  content: chartDiv // your widget or HTML content
})
```

### View Popup deprecations and changes
In a continuous effort to optimize the performance and load time of the API, the Popup widget will no longer be bundled with the MapView and SceneView. The Popup widget receives new features regularly, such as when browsing related records. Each new feature added to the Popup widget increases the size of the widget and amount of built code that is sent to the web browser. For example, the Popup module, which is bundled with the MapView, represents around 50% of the size of the bundle.

In this release, the Popup widget loading is deferred until the view is ready and finished updating, and will only be loaded if View.popupEnabled is true. Please expand the details below for breaking changes and the migration strategy.

TODO: Add code examples.

<details>
  <summary>Click to expand the details regarding the migration strategy and breaking changes for the view's popup</summary>  

### Scenarios that still work

If using any of the following scenarios, your application will **not** break:
  
#### Setting popup options
```js
const view = new MapView({
  popup: {
    dockEnabled: true
  }
});
view.popup.dockEnabled = true;
```

#### Opening & closing the popup
- It is recommended to use the new `View.openPopup()` method instead of `view.popup.open()`, however, it will still work.
```js
// prompts a deprecation warning if popup isn't created
// calls view.openPopup() under the hood
view.popup.open(...);

// new
view.openPopup(...);
```
- It is recommended to use the new `View.closePopup()` method instead of `view.popup.close()`, however, it will still work.
```js
// prompts a deprecation warning if popup isn't created
// calls view.closePopup() under the hood
view.popup.close(...);

// new
view.closePopup();
```

#### Disable the view's popup
```js
// autoOpenEnabled deprecated
view.popup.autoOpenEnabled = true;

// new
view.popupEnabled = true;
```

### Breaks and require immediate attention

Using functions other than `open` and `close`, like `watch`. Use `reactiveUtils` instead.
```js
// old - will break
view.popup.watch("selectedFeature", ...)

// new
reactiveUtils.watch(() => view.popup?.selectedFeature, ...);
```

Modifying properties that don't exist anymore.
```js
// old - will break
view.popup.actions.push(...)

// or define the property with the actions
view.popup.actions = [ ... ]
// new: or wait for the popup
reactiveUtils.whenOnce(() => view.popup.actions != null);
view.popup.actions.push(...)
```

Same as above, `viewModel` doesn't exist.

```js
// old - will break
get active() {
  return view.popup.viewModel.active;
}

// new
get active() {
  return view.popup?.viewModel?.active ?? false;
}
```

### Migration Strategy

#### When do you have to migrate, and what to do?

1. If the application creates a `Popup` instance, no changes are necessary. This is also **the fastest migration strategy**, and equivalent to the 4.26 behavior.

```js
const view = new SceneView({
  popup: new Popup(...)
});
```

2. If the application accesses properties of the view model, use conditionally access.

```js
view.popup.viewModel.active;
// becomes
view.popup?.viewModel?.active;
```

3. If the application uses `view.popup.open()` or `close()`, search and replace with `view.openPopup()` and `view.closePopup()`.

4. If the application is only setting options on the popup, no changes are necessary.

```js
const view = new MapView({
  popup: {
    dockEnabled: true.
    dockPosition: ....
  }
})
```

### Configuring the `Popup`

There are multiple ways to configure the popup:

```js
// popup shows for features and other use such as Search results.
// view.popup is available immediately
view.popup = new Popup() 
        
//  popup shows for features and other use such as Search results.
// view.popup is created on demand when the user clicks on the view, or when `openPopup()` is called the first time.
view.popup = { /*...*/ };

// popup is completely disabled and won't show on features, Search results, and `openPopup()`.
view.popup = null;

// popup doesn't show for features on click, but will on Search results and `openPopup()`.
view.popupEnabled = false;
```
</details>

## Breaking Changes

* TBD

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the SDK:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| TBD | TBD | TBD |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4.x.

## Bug fixes and enhancements

* BUG-000140665: Fixed an issue in the Bookmarks widget where the bookmark's thumbnail would display in editing mode, even if visibleElements.thumbnail was false.
* [Esri Community - 1272209](https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/cimsymbol-not-tiling-correctly/m-p/1272209): Fixed an issue where some CIM symbols with a CIMHatchFill symbol layer were not aligned at tile boundaries at large scales.
* Fixed an accessibility issue where the Bookmarks widget's drag/reorder tooltip was not displayed when in focus for keyboard-only users.
* Enhanced the ScaleBar widget to support additional units (centimeters and inches) at larger scales.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.26 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand the complete list</summary>  

- Compatibility with implementations that don't support async/await at runtime, within AMD modules, is deprecated since version 4.25. For example, Angular applications using esri-loader will need to migrate from AMD modules to using @arcgis/core ES modules.
- CreateWorkflow deprecated since version 4.23. Use CreateFeaturesWorkflow instead.
- CreateWorkflowData.edits deprecated since 4.23. Use CreateFeaturesWorkflow.pendingFeatures to access edits made to the workflow data.
- CreateWorkflowData deprecated since version 4.23. Use CreateFeaturesWorkflowData instead.
- Directions.routeServiceUrl deprecated since version 4.24. Use url from layer instead.
- Directions.routeSymbol deprecated since version 4.24. Use directionLines from layer instead.
- Directions.stopSymbols deprecated since version 4.24. Use RouteStopSymbols from layer instead.
- DirectionsViewModel.highlightSegment deprecated since version 4.24. Use highlight instead.
- DirectionsViewModel.routeServiceUrl deprecated since version 4.24. Use url from layer instead.
- DirectionsViewModel.routeSymbol deprecated since version 4.24. Use directionLines from layer instead.
- DirectionsViewModel.stops deprecated since version 4.24. Use stops from layer instead.
- DirectionsViewModel.stopSymbols deprecated since version 4.24. Use RouteStopSymbols from layer instead.
- Editor.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation
- Editor.startCreateWorkflowAtFeatureEdit deprecated since 4.23
- Editor.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection instead.
- Editor.useDeprecatedCreateWorkflow deprecated since version 4.23. Although new at 4.23, this property was introduced to help migrate from the legacy CreateWorkflow to the updated CreateFeaturesWorkflow. Once CreateWorkflow is fully removed, this property will no longer be necessary.
- EditorViewModel.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation.
- EditorViewModel.startCreateWorkflowAtFeatureEdit deprecated since 4.23
- EditorViewModel.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection.
- EventAttachedCallback.EventAttachedCallback deprecated since version 4.24. Use reactiveUtils.ReactiveListenerChangeCallback() instead.
- FeatureTable.clearHighlights deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.clearSelection deprecated since version 4.25. Use highlightIds.removeAll() instead.
- FeatureTable.deselectRows deprecated since 4.25. Use highlightIds.remove() instead.
- FeatureTable.fieldConfigs deprecated since version 4.24. Use FieldColumnTemplate via the - FeatureTable's tableTemplate.
- FeatureTable.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTable.selection-change deprecated since version 4.25. Listen for changes on highlightIds instead.
- FeatureTable.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FeatureTableViewModel.clearHighlights deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTableViewModel.clearSelection deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTableViewModel.fieldConfigs deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FeatureTableViewModel.highlightOnRowSelectEnabled deprecated since version 4.25. Use highlightEnabled instead.
- FeatureTableViewModel.selectRows deprecated since 4.25. Use highlightIds.add() instead.
- FieldColumn.config deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FieldColumnConfig deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
- FieldElement.editable deprecated since version 4.26. Use editableExpression instead. Assigning editableExpression values of "true" and "false" will have the same effect as assigning true and false to editable.
- FieldGroupConfig.visibilityExpression deprecated since version 4.23. Set fields via the GroupElement.visibilityExpression
- FieldGroupConfig deprecated since version 4.23. Set field groupings via the GroupElement.
- ImageParameters deprecated since version 4.24. Use ImageParameters instead.
- HeatmapRenderer.blurRadius is deprecated since version 4.24. Use radius instead.
- HeatmapRenderer.maxPixelIntensity is deprecated since version 4.24. Use maxDensity instead.
- HeatmapRenderer.minPixelIntensity is deprecated since version 4.24. Use minDensity instead.
- InputFieldGroup.visibilityExpression deprecated Since 4.23. Use groupElement.visibilityExpression
Lighting deprecated since version 4.24. Use SunLighting instead.
- PausableWatchHandle.PausableWatchHandle deprecated since version 4.24.
- Popup.autoOpenEnabled deprecated since 4.27. Use MapView/SceneView.popupEnabled instead.
- PromisedWatchHandle.PromisedWatchHandle deprecated since version 4.24. Use Promise instead.
promiseUtils.create deprecated since version 4.24. Use Promise instead.
- The allowAttachments property within Editor.layerInfos is deprecated at 4.25. Use either attachmentsOnCreateEnabled or attachmentsOnUpdateEnabled instead.
- UtilityNetwork.rulesTableId deprecated since version 4.25. Use networkSystemLayers.rulesTableId instead.
- UtilityNetwork.rulesTableUrl deprecated since version 4.25. Use networkSystemLayers.rulesTableUrl instead.
- UtilityNetwork.subnetworksTableId deprecated since version 4.25. Use networkSystemLayers.subnetworksTableId instead.
- UtilityNetwork.subnetworksTableUrl deprecated since version 4.25. Use networkSystemLayers.subnetworksTableUrl instead.
- VoxelVariable deprecated since 4.25. Use VoxelVariable instead.
- VoxelVolumeStyle deprecated since 4.25. Use VoxelVolumeStyle instead.
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

</details>

The following are deprecations to the SDK's TypeScript type definitions, and will be removed in a future release (expand to read more).

<details>
<summary>Click to expand</summary>

- `IPromise` deprecated since version 4.25. Use native `Promise` instead.
- Instances of `*Constructor` deprecated since 4.25. Update usage of `__esri.ModuleConstructor` to `typeof __esri.Module`, or `import` the module from typings and change the type assignment to `typeof Module`.

</details>
