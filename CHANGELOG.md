# Change log

The `next` version of 4.22 is now available.  Planned release date is December 2021.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)


## Editor widget

As we stated in the 4.21 [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#an-updated-and-improved-editor-widget-is-coming), the Editor widget is getting an overhaul for version 4.22. We anticipate having something to test against come mid-November. As stated in the release notes, the widget updates are planned to occur incrementally in a phased approach over the course of multiple releases. The initial version of the updated widget will include an updated UI with SnappingControls. In addition to this UI update, the initial Editor panel will be replaced with a panel consolidating much of the create workflow that will include the ability to perform continuous feature editing. 

We will keep everyone abreast of any updates/changes as we move forward in this release. Thank you all for your patience. We are looking forward to this new and improved widget and hope that it can bring additional functionality to your editing workflows.

## API keys

When a global API key is set, the default basemaps displayed in BasemapGallery widget will default to the basemaps for use with API keys (as defined by the Portal.devBasemapGalleryGroupQuery property).

## CSVLayer and GeoJSONLayer

We've added the following enhancements and improvements to the CSVLayer and GeoJSONLayer.

* CSVLayer and GeoJSONLayer can be refreshed, meaning that you can fetch new data after those layers are initialized and loaded to the map.
* The customParameters property supported in CSVLayer and GeoJSONLayer. You can set the customParameters property for additional query parameters when the layer is initialized or refreshed.
* GeoJSONLayer now supports string and number feature ids.

## Content Security Policy

It is no longer necessary to set Dojo's [`"csp-restrictions"`](https://github.com/dojo/docs/blob/d30563d6b5c039e12bd91028c362e7caff1d0573/releasenotes/1.11.rst#csp) `has` flag to `true` when CSP support is needed. Although this flag is no longer necessary, please be aware that there are still limitations when using the JavaScript API with CSP. Please refer to our [FAQ](https://developers.arcgis.com/javascript/latest/faq/#does-the-arcgis-api-for-javascript-support-all-content-security-policy-directives) section for additional information regarding this.

```js
// No longer needed
<script>
  var dojoConfig = {
    has: {
      "csp-restrictions": true
    }
  };
</script>
```

## Breaking changes

* Updated the request flow of workers so that an after interceptor receives the expected data type. This means after interceptors that were expecting array-buffers for client-side layers such as GeoJSONLayer and CSVLayer will now receive the expected data types json or text.
* The `basemap` parameter in all smartMapping methods within the `esri/smartMapping/renderers` folder was deprecated at version 4.13 and is now replaced by the `view` parameter.
* Attachment elements within popups no longer display `list` as the default `displayType`. Instead of `list`, it defaults to `auto`. This means that if the feature layer supports attachment resizing, it will automatically set the `displayType` as `preview`, otherwise it will display as `list`.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| decorators.declared() | declared is no longer needed to extend Accessor anymore | 4.16 |
| esri/layers/support/AttachmentInfo | esri/rest/query/support/AttachmentInfo |	4.19 |
| ChartMediaInfoValueSeries.x | esri/popup/content/support/ChartMediaInfoValueSeries.value | 4.17 |
| ChartMediaInfoValueSeries.y | esri/popup/content/support/ChartMediaInfoValueSeries.tooltip | 4.17 |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4x API.

## Bug fixes and enhancements

* ENH-000137806: StreamLayer now supports customParameters property. See the code below on how it can be used.

```js
const streamLayer = new StreamLayer({
  url: /* service URL */,
  customParameters: {
    foo: "bar",
    baz: "bat"
});
```

* BUG-000127497: Fixed an issue where PictureMarkerSymbol in a feature service had slight blurry texture when displayed in map.
* BUG-000135727: Fixed an issue with WMSLayer where the layer would not load if the spatial reference was not defined on the root layer in the service.
* BUG-000143043: Fixed an issue with WMTSLayer where duplicate parameters were being included in requests to the service.
* BUG-000135884: Fixed an issue where FeatureTemplate.drawingTool would return the wrong string value if derived from a layer's subtypes.
* BUG-000141133: Fixed an issue where workers were returning array-buffers in an after interceptor for GeoJSONLayer.
* BUG-000141451: Fixed an issue where ImageryTileLayer could be cropped when printed, depending on the browser window size or the #viewDiv dimensions.
* BUG-000142291: Content Security Policy issue addressed and a few instances of global `eval()` functions were removed from the API.
* Fixed an issue where the DirectionsFeatureSet.mergedGeometry had incorrect hasM and hasZ values.
* Enhanced the polygon labelPlacement behavior to better place labels in the center of a polygon.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.21 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand!</summary>  
  
* **Widget view source code:**   Starting at 4.21, the `.tsx` widget view source code is being deprecated for all widgets. This will be removed in a future release. Many of these files contain references to modules that are not open sourced or for internal-use only. This change does not affect the ability to build custom widgets, extend the ViewModel or customize widget CSS.
* AddressCandidate deprecated since version 4.20. Use AddressCandidate instead.
* AlgorithmicColorRamp deprecated since version 4.20. Use AlgorithmicColorRamp instead.
* AreasAndLengthsParameters deprecated since version 4.20. Use AreasAndLengthsParameters instead.
* AttachmentInfo deprecated since version 4.19. Use AttachmentInfo instead.
* AttachmentQuery deprecated since version 4.20. Use AttachmentQuery instead.
* Bookmark.extent deprecated since 4.17. Use viewpoint instead.
* BufferParameters deprecated since version 4.20. Use BufferParameters instead.
* ChartMediaInfoValueSeries.x deprecated since version 4.17. Use value instead.
* ChartMediaInfoValueSeries.y deprecated since version 4.17. Use tooltip instead.
* ClosestFacilityParameters deprecated since version 4.20. Use ClosestFacilityParameters instead.
* ClosestFacilitySolveResult deprecated since version 4.20. Use ClosestFacilitySolveResult instead.
* ClosestFacilityTask deprecated since version 4.20. Use closestFacility instead.
* ColorRamp deprecated since version 4.20. Use ColorRamp instead.
* DataFile deprecated since version 4.20. Use DataFile instead.
* DataLayer deprecated since version 4.20. Use DataLayer instead.
* decorators.cast deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
* decorators.declared deprecated since version 4.16. `declared` is not needed to extend Accessor anymore. See Implementing Accessor for updated information.
* DensifyParameters deprecated since version 4.20. Use DensifyParameters instead.
* DirectionsFeatureSet deprecated since version 4.20. Use DirectionsFeatureSet instead.
* DistanceParameters deprecated since version 4.20. Use DistanceParameters instead.
* FeatureForm.description deprecated since version 4.20. Set it via the FormTemplate.description.
* FeatureForm.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureForm.title deprecated since version 4.20. Set it via the FormTemplate.title.
* FeatureFormViewModel.description deprecated since version 4.20. Set it via the FormTemplate.description.
* FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureFormViewModel.title deprecated since version 4.20. Set it via the FormTemplate.title.
* FeatureSet deprecated since version 4.20. Use FeatureSet instead.
* FindParameters deprecated since version 4.20. Use FindParameters instead.
* FindResult deprecated since version 4.20. Use FindResult instead.
* FindTask deprecated since version 4.20. Use find instead.
* GeneralizeParameters deprecated since version 4.20. Use GeneralizeParameters instead.
* GeometryService deprecated since version 4.20. Use geometryService instead.
* Geoprocessor deprecated since version 4.20. Use geoprocessor instead.
* GPMessage deprecated since version 4.20. Use GPMessage instead.
* IdentifyParameters deprecated since version 4.20. Use IdentifyParameters instead.
* IdentifyResult deprecated since version 4.20. Use IdentifyResult instead.
* IdentifyTask deprecated since version 4.20. Use identify instead.
* ImageHistogramParameters deprecated since version 4.20. Use ImageHistogramParameters instead.
* ImageIdentifyParameters deprecated since version 4.20. Use ImageIdentifyParameters instead.
* ImageIdentifyResult deprecated since version 4.20. Use ImageIdentifyResult instead.
* ImageIdentifyTask deprecated since version 4.20. Use imageService instead.
* JobInfo deprecated since version 4.20. Use JobInfo instead.
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
* LegendLayer deprecated since version 4.20. Use LegendLayer instead.
* LengthsParameters deprecated since version 4.20. Use LengthsParameters instead.
* LinearUnit deprecated since version 4.20. Use LinearUnit instead.
* Locator deprecated since version 4.20. Use locator instead.
* MultipartColorRamp deprecated since version 4.20. Use MultipartColorRamp instead.
* NAMessage deprecated since version 4.20. Use NAMessage instead.
* OffsetParameters deprecated since version 4.20. Use OffsetParameters instead.
* ParameterValue deprecated since version 4.20. Use ParameterValue instead.
* PointDrawAction.coordinates deprecated since version 4.19. Use vertices instead.
* Portal.createClosestFacilityTask deprecated since version 4.21.
* Portal.createGeometryService deprecated since version 4.21.
* Portal.createPrintTask deprecated since version 4.21.
* Portal.createRouteTask deprecated since version 4.21.
* Portal.createServiceAreaTask deprecated since version 4.21.
* PrintParameters deprecated since version 4.20. Use PrintParameters instead.
* PrintTask deprecated since version 4.20. Use print instead.
* PrintTemplate deprecated since version 4.20. Use PrintTemplate instead.
* projection.isSupported deprecated since version 4.18.
* ProjectParameters deprecated since version 4.20. Use ProjectParameters instead.
* promiseUtils.reject deprecated since version 4.19. Use the native Promise.reject method instead.
* promiseUtils.resolve deprecated since version 4.19. Use the native Promise.resolve method instead.
* Query deprecated since version 4.20. Use Query instead.
* QueryTask deprecated since version 4.20. Use query instead.
* RasterData deprecated since version 4.20. Use RasterData instead.
* RelationParameters deprecated since version 4.20. Use RelationParameters instead.
* RelationshipQuery deprecated since version 4.20. Use RelationshipQuery instead.
* RouteParameters deprecated since version 4.20. Use RouteParameters instead.
* RouteResult deprecated since version 4.20. Use RouteResult instead.
* RouteTask deprecated since version 4.20. Use route instead.
* SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
* ServiceAreaParameters deprecated since version 4.20. Use ServiceAreaParameters instead.
* ServiceAreaSolveResult deprecated since version 4.20. Use ServiceAreaSolveResult instead.
* ServiceAreaTask deprecated since version 4.20. Use serviceArea instead.
* SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
* Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
* Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
* `SmartMapping.params.basemap` deprecated since version 4.13. Use `view` instead.
* StatisticDefinition deprecated since version 4.20. Use StatisticDefinition instead.
* symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
* symbolPreview deprecated since version 4.11. Use symbolUtils instead.
* Task deprecated since version 4.20.
* Themes: The light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, dark-red are deprecated since 4.19. Please use `light` or `dark` instead, or create your own theme.
* TimeSlider.values deprecated since version 4.20. Use timeExtent instead.
* TimeSliderViewModel.values deprecated since version 4.20. Use timeExtent instead.
* TrimExtendParameters deprecated since version 4.20. Use TrimExtendParameters instead.
* widget.renderable deprecated since version 4.19. All properties are automatically tracked now and don't need to be decorated with this decorator.

</details>
