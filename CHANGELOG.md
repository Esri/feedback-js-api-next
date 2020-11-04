# Change log

The `next` version of 4.18 is now available.  Planned release date is December 2020.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## ES modules

Consuming the API with [@arcgis/core ES modules](https://www.npmjs.com/package/@arcgis/core) will be an additional option alongside the existing AMD modules. We are looking for your help to ensure that the new modules work seamlessly with modern web developer tooling.  See https://www.esri.com/arcgis-blog/products/js-api-arcgis/announcements/es-modules-are-coming-soon-in-the-arcgis-api-for-javascript/

## Breaking changes

* IE11 is no longer supported.
* The format for the takeScreenshot() method on MapView and SceneView now defaults to png instead of jpg.
* The mediaType property was removed from OGCFeatureLayer. All requests for metadata and data content will now be made with the "f=json" url parameter.

## Bug fixes and enhancements

* BUG-000126854: Fixed an issue where the MapView is panned when trying to move a selected graphic with the Sketch widget.
* BUG-000132412: Fixed an issue where a WMTSLayer was rendered with incorrect levels of detail (LOD) after zooming in and out multiple times.
* BUG-000134238: Fixed an issue where a WMSLayer would get slightly offset if the screen resolution was higher the maxWidth or maxHeight of the layer.
* BUG-000134595: Fixed an issue where HeatmapStatistics fail when using a spatial reference other than Web Mercator (102100).
* GEONET-261976: Fixed an issue where near simultaneous calls to FeatureLayer.applyEdits were not working as expected.
* GEONET-958751: Fixed an issue where the Search widget would throw an error message in the browser console when Search.locationEnabled is set to false.
* GEONET-959033: Fixed the Invalid time value error message that gets thrown when there is a date FieldInfo specified at the PopupTemplate and rendered within the popup.
* ENH-000124689 - The request class is now used for legend graphic requests on WMSLayers to allow for request interception.
* Enhanced UniqueValueInfo.value to accept number values as unique values in addition to strings. Previously, numbers were autocasted to strings.
* Added additional options to the symbolConfig property of symbolUtils.renderPreviewHTML()
* Enhanced accessibility on the LayerList widget when actions are defined.

## Deprecation

The following are deprecated and will be removed in a future release:

* BookmarksViewModel.BookmarkCreationOptions.captureExtent deprecated since version 4.17. Use captureViewpoint instead.
* decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
* Extending multiple classes deprecated since version 4.13. Create mixins with TypeScript and JavaScript instead.
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
* SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
* SmartMapping.params.basemap deprecated since version 4.13. Use view instead.

and

* decorators.declared deprecated since version 4.16. declared() is not needed to extend Accessor anymore. See Implementing Accessor for updated information.
* projection.isSupported deprecated since version 4.18. IE11 is not supported and all modern browsers support the projection engine.
* ChartMediaInfoValueSeries.x deprecated since version 4.17. Use value instead.
* ChartMediaInfoValueSeries.y deprecated since version 4.17. Use tooltip instead.
* SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
* PathSymbol3DLayer.size deprecated since version 4.12. Use PathSymbol3DLayer.width or PathSymbol3DLayer.height instead.
* symbolPreview deprecated since version 4.11. Use symbolUtils instead.
* symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
* PrintTemplate.preserveScale deprecated since version 4.16. Use PrintTemplate.scalePreserved instead.
* ProjectParameters.outSR deprecated since version 4.4. Use ProjectParameters.outSpatialReference instead.
* RouteParameters.barriers deprecated since version 4.11. Use pointBarriers, polygonBarriers, and/or polylineBarriers instead.
* Bookmark.extent deprecated since 4.17. Use viewpoint instead.
* AreaMeasurement2DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* AreaMeasurement2DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* AreaMeasurement3DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* AreaMeasurement3DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* BasemapLayerList.statusIndicatorsVisible deprecated since version 4.15. Use BasemapLayerList.visibleElements.statusIndicators instead.
* BasemapToggle.titleVisible deprecated since version 4.15. Use BasemapToggle.visibleElements.title instead.
* Bookmarks.bookmarkCreationOptions deprecated since 4.18. Use defaultCreateOptions instead.
* Bookmarks.select-bookmark deprecated since version 4.17. Use bookmark-select instead.
* DirectLineMeasurement3DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* DirectLineMeasurement3DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* DistanceMeasurement2DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* DistanceMeasurement2DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* FeatureForm.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureTemplates.filterEnabled deprecated since version 4.15. Use FeatureTemplates.visibleElements.filter instead.
* LayerList.statusIndicatorsVisible deprecated since version 4.15. Use LayerList.visibleElements.statusIndicators instead.
* Popup.featureNavigationEnabled deprecated since version 4.15. Use Popup.visibleElements.featureNavigation instead.
* SliceViewModel.clearSlice deprecated since version 4.16. Use clear instead.
* SliceViewModel.newSlice deprecated since version 4.16. Use start instead.
* Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
* Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
