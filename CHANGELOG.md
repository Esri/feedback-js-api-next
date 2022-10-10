# Change log

The `next` version of 4.25 is now available.  Planned release date is November 2022.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## No CDN hosting of non-esri packages

As of version 4.25, the CDN on js.arcgis.com will no longer host AMD packages not used by ArcGIS API for JavaScript. For historic reasons, this included dgrid, dijit, dojo, dojox, dstore, and tslib.

## Convert SVG to CIM Symbol

- Added support for `generateSymbol()` on `esri/rest/symbolService`, which connects to the [REST API](https://developers.arcgis.com/rest/services-reference/enterprise/generate-symbol.htm) to convert an SVG to a CIMSymbol.

```js
const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
    <path d="M150 0 L75 200 L225 200 Z" />
  </svg>
`;
const params = { svgImage: svgString };
symbolService.generateSymbol(symbolServiceUrl, params).then({symbol} => {
  // apply the CIMSymbol to a graphic
  graphicA.symbol = symbol;
});
```

## Widget updates

### Editor

- The Editor widget added better support for handling a feature service's operation restrictions. These can include operations such as `create` (add), `read` (query), `update` (update), and `delete` (delete). The Editor UI will update based on the service-level permissions and apply a more intuitive interface to provide or limit what types of edits can be handled within the widget.

- New updates to workflows involving attachment editing. Prior to this release, creating and editing attachments were somewhat limited.

- 2d support was added for `tooltipOptions` in both the Editor widget and its viewModel. Similar to 3d, this feedback allows the visual feedback of line segment and polygon information.

### Sketch

- 2d support was added for `tooltipOptions` in both the Sketch widget and its viewModel. Similar to 3d, this feedback allows the visual feedback of line segment and polygon information. 


### SnappingControls

It is now possible to toggle visibility for sections of the SnappingControls. This is handled via its visibleElements property.

### FeatureTable


- It is now possible to _delete_ records within the FeatureTable widget. 

- Application-level queries can now control sort order better via a new `activeSortOrders` property added to both the FeatureTable widget and its viewModel.


### FeatureForm

Asynchronous support has been added to the FeatureForm's field elements. 

### Popups

- `RelationshipContent` has been added as a new [content](https://developers.arcgis.com/javascript/latest/api-reference/esri-popup-content.html) type for [PopupTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) which allows you to represent a relationship element associated with a feature within a popup. When configuring `RelationshipContent`, the related layer or table must be added to the map. Editing related records is currently not supported and will be added in a later release. See the following example on how to configure `RelationshipContent` within a popup and browse a feature's related records: https://codepen.io/laurenb14/pen/MWGoqRW

- Displaying AttachmentsContent with `displayType.preview` automatically hides the attachment's file name.

## Layer updates

- Added support for configurable `maxRecordCount` on OGCFeatureLayer to define maximum paging size. This will override the max record count in the service, if defined.
- Added extensibility support for WMSLayer popups. You can now use the `fetchFeatureInfoFunction` to override the default popup behavior on WMSLayer, as shown in this [example](https://codepen.io/annefitz/pen/abGbVyv).
- Added support for `ControlPointsGeoreference` MediaLayer. An image or video can now be positioned, scaled, and rotated with two control points. Additionally, it will be skewed with three control points. With four control points, a perspective transformation is applied to the element.

  ```js
  // the spatial reference for the MediaLayer, North American Datum 1927
  const spatialReference = new SpatialReference({ wkid: 4267 });

  // create an array of four control points composed of a sourcePoint, a point
  // on the image element in pixels, and a mapPoint which is the location of the
  // sourcePoint in map space
  const swCorner = {
      sourcePoint: { x: 80, y: 1732 },
      mapPoint: new Point({ x: -107.875, y: 37.875, spatialReference })
  };

  const nwCorner = {
      sourcePoint: { x: 75, y: 102 },
      mapPoint: new Point({ x: -107.875, y: 38, spatialReference })
  };

  const neCorner = {
      sourcePoint: { x: 1353, y: 99 },
      mapPoint: new Point({ x: -107.75, y: 38, spatialReference })
  };

  const seCorner = {
      sourcePoint: { x: 1361, y: 1721 },
      mapPoint: new Point({ x: -107.75, y: 37.875, spatialReference })
  };

  const controlPoints = [swCorner, nwCorner, neCorner, seCorner];

  // georeference for the imageElement using the control points,
  // image width, and image height
  const georeference = new ControlPointsGeoreference({ controlPoints, width: 1991, height: 2500 });

  const imageElement = new ImageElement({
      image: "https://jsapi.maps.arcgis.com/sharing/rest/content/items/1a3df04e7d734535a3a6a09dfec5a6b2/data",
      georeference
  });

  // create a MediaLayer using the georeferenced ImageElement
  const mediaLayer = new MediaLayer({
      source: [imageElement],
      title: "Geologic Map of the Telluride Quadrangle, Southwestern Colorado",
      copyright: "Wilbur S Burbank and Robert G. Luedke, 1966",
      opacity: 0.5,
      spatialReference
  });
  ```

## Breaking changes

- The default value of MapNotesLayer.listMode changed from show to hide-children.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| `BasemapToggle.toggle` and `BasemapToggleViewModel.toggle` events | Watch the [activeBasemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapToggle.html#activeBasemap) property instead | 4.22 |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4x API.

## Bug fixes and enhancements

- BUG-000116539: Fixed an issue where the miles unit provided to Geometry Engine operations referred to US survey mile. Now miles refers to the International Mile since the U.S. foot was recently deprecated.
- BUG-000117009: Fixed an issue where Legend shows multiple entries for grouped UniqueValueRenderer unique value infos.
- BUG-000145323: Fixed an issue where numeric custom expressions formatted with a digit separator failed to display in a pie chart configured in a Popup.
- BUG-000136723: Fixed an issue where MapImageLayer popup queries didn't contain time parameters.
- BUG-000149598: Fixed an issue where popup was not returning all attributes for ImageryLayer's pixel values that equal 0.
- BUG-000150976: Fixed an issue where the subtype coded value was displaying in popups for MapImageLayers rather than the subtype description.
- BUG-000152279: Fixed an issue where a GraphicsLayer would flash and then disappear when added to the map at a scale less than the layer's `minScale`.
- Esri Community - 1196642: Fixed an issue where MediaLayer was not displaying 24 and 32 bit PNGs with transparent background correctly.
- Fixed an issue where WMSLayer sublayers were being displayed in reverse order in the LayerList widget.
- Fixed an issue where PopupTemplate content defined with a function was not able to access the feature's geometry even though returnGeometry was set to true.
- Fixed an issue where the [Legend](/api-reference/esri-widgets-Legend.html) was missing the field alias for field-based heatmap symbology.
- ENH-000116507 - Enhanced MapImageLayer to highlight the selected feature when displaying its Popup.
- ArcGIS Ideas - 940733: Attachment content file names are automatically hidden when the displayType is preview in Popups.
- Enhanced the behavior of MapNotesLayer.listMode to have a default value of hide-children instead of show.
- Updated CustomContent documentation to allow an optional `PopupTemplateCreatorEvent` parameter for the `PopupTemplateContentCreator` and the `PopupTemplateContentDesroyer` to reference the graphic used to represent the feature.
- When embedding a video in a popup using the HTML `<video>` tag, the video will automatically resize to fit inside the popup if it is larger than the popup window.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.24 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand!</summary>  

* Compatibility with implementations that don't support [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) at runtime, within AMD modules, is deprecated since version 4.25. For example, Angular applications using [esri-loader](https://github.com/Esri/esri-loader) will need to migrate from AMD modules to using [@arcgis/core ES modules](https://developers.arcgis.com/javascript/latest/es-modules/).
* BasemapToggle.toggle deprecated since version 4.22. Watch the activeBasemap property instead.
* CreateWorkflow deprecated since version 4.23. Use CreateFeaturesWorkflow instead.
* CreateWorkflowData.edits deprecated since 4.23. Use CreateFeaturesWorkflow.pendingFeatures to access edits made to the workflow data.
* CreateWorkflowData deprecated since version 4.23. Use CreateFeaturesWorkflowData instead.
* CSVLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* Directions.routeServiceUrl deprecated since version 4.24. Use url from layer instead.
* Directions.routeSymbol deprecated since version 4.24. Use directionLines from layer instead.
* Directions.stopSymbols deprecated since version 4.24. Use RouteStopSymbols from layer instead.
* DirectionsViewModel.highlightSegment deprecated since version 4.24. Use highlight instead.
* DirectionsViewModel.routeServiceUrl deprecated since version 4.24. Use url from layer instead.
* DirectionsViewModel.routeSymbol deprecated since version 4.24. Use directionLines from layer instead.
* DirectionsViewModel.stops deprecated since version 4.24. Use stops from layer instead.
* DirectionsViewModel.stopSymbols deprecated since version 4.24. Use RouteStopSymbols from layer instead.
* Editor.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation
* Editor.startCreateWorkflowAtFeatureEdit deprecated since 4.23
* Editor.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection instead.
* Editor.useDeprecatedCreateWorkflow deprecated since version 4.23. Although new at 4.23, this property was introduced to help migrate from the legacy CreateWorkflow to the updated CreateFeaturesWorkflow. Once CreateWorkflow is fully removed, this property will no longer be necessary.
* EditorViewModel.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation.
* EditorViewModel.startCreateWorkflowAtFeatureEdit deprecated since 4.23
* EditorViewModel.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection.
* Effect.Effect deprecated since version 4.21. Use Effect instead.
* EventAttachedCallback.EventAttachedCallback deprecated since version 4.24. Use reactiveUtils.ReactiveListenerChangeCallback() instead.
* FeatureEffect deprecated since version 4.22. Use esri/layers/support/FeatureEffect instead.
* FeatureFilter deprecated since version 4.22. Use FeatureFilter instead.
* FeatureLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* FeatureTable.fieldConfigs deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
* FeatureTableViewModel.fieldConfigs deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
* FieldColumn.config deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
* FieldColumnConfig deprecated since version 4.24. Use FieldColumnTemplate via the FeatureTable's tableTemplate.
* FieldGroupConfig.visibilityExpression deprecated since version 4.23. Set fields via the GroupElement.visibilityExpression
* FieldGroupConfig deprecated since version 4.23. Set field groupings via the GroupElement.
* GeoJSONLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* HeatmapRenderer.blurRadius is deprecated since version 4.24. Use radius instead.
* HeatmapRenderer.maxPixelIntensity is deprecated since version 4.24. Use maxDensity instead.
* HeatmapRenderer.minPixelIntensity is deprecated since version 4.24. Use minDensity instead.
* ImageParameters deprecated since version 4.24. Use ImageParameters instead.
* InputFieldGroup.visibilityExpression deprecated Since 4.23. Use groupElement.visibilityExpression
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
* Lighting deprecated since version 4.24. Use SunLighting instead.
* OGCFeatureLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* PausableWatchHandle.PausableWatchHandle deprecated since version 4.24.
* PrintViewModel.scaleEnabled deprecated since version 4.22. Instead, use TemplateOptions if using the Print widget, or PrintTemplate if calling print() directly.
* PromisedWatchHandle.PromisedWatchHandle deprecated since version 4.24. Use Promise instead.
* promiseUtils.create deprecated since version 4.24. Use Promise instead.
* SearchViewModel.defaultSymbol deprecated since version 4.22. Use defaultSymbols instead.
* SlicePlane deprecated This module was moved in 4.23. Use SlicePlane instead.
* StreamLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* watchUtils.init deprecated since 4.24. Use reactiveUtils.watch() instead.
* watchUtils.on deprecated since 4.24. Use reactiveUtils.on() instead.
* watchUtils.once deprecated since 4.24. Use reactiveUtils.once() instead.
* watchUtils.pausable deprecated Since 4.24.
* watchUtils.watch deprecated since 4.24. Use reactiveUtils.watch() instead.
* watchUtils.when deprecated since 4.24. Use reactiveUtils.when() instead.
* watchUtils.whenDefined deprecated since 4.24. Use reactiveUtils.when() instead.
* watchUtils.whenDefinedOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils.whenEqual deprecated since 4.24. Use reactiveUtils.when() instead
* watchUtils.whenEqualOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils.whenFalse deprecated since 4.24. Use reactiveUtils.when() instead.
* watchUtils.whenFalseOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils.whenNot deprecated since 4.24. Use reactiveUtils.when() instead.
* watchUtils.whenNotOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils.whenOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils.whenTrue deprecated since 4.24. Use reactiveUtils.when() instead.
* watchUtils.whenTrueOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils.whenUndefined deprecated since 4.24. Use reactiveUtils.when() instead.
* watchUtils.whenUndefinedOnce deprecated since 4.24. Use reactiveUtils.whenOnce() instead.
* watchUtils deprecated since version 4.24. Use reactiveUtils instead.
* WFSLayerView.effect deprecated since version 4.22. Use featureEffect instead.

</details>

The following are deprecations to the API's TypeScript type definitions, and will be removed in a future release (expand to read more). 

<details>
<summary>Click to expand</summary>

* `IPromise` deprecated since version 4.25. Use native `Promise` instead.
* Instances of `*Constructor` deprecated since 4.25. Update usage of `__esri.ModuleConstructor` to `typeof __esri.Module`, or `import` the module from typings and change the type assignment to `typeof Module`.

</details>
