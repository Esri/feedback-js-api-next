# Change log

The `next` version of 4.19 is now available.  Planned release date is April 2021.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Breaking changes

* Local NPM installs of `@arcgis/core` and `arcgis-js-api` are now required to set `config.assetsPath`. The default value has been removed. Errors will be thrown if this property is not set. 

## Bug fixes and enhancements

* BUG-000134522: Fixed an issue where the UniqueValueRenderer failed to display PictureMarkerSymbol graphics when attempting to load over a thousand images.
* BUG-000135733: Fixed an issue where a Graphic with an Extent geometry containing a TextSymbol disappeared from the map at certain zoom levels.
* BUG-000136086: Fixed an issue where the return type of the added and coordinates properties of the Sketch widget's VertexAddEventInfo were documented to return Graphic[] instead of Number[].
* Fixed an issue with printing layers from a MapServer if the map service supports dynamic layers.

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
* projection.isSupported deprecated since version 4.18.
* ChartMediaInfoValueSeries.x deprecated since version 4.17. Use value instead.
* ChartMediaInfoValueSeries.y deprecated since version 4.17. Use tooltip instead.
* SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
* PathSymbol3DLayer.size deprecated since version 4.12. Use PathSymbol3DLayer.width or PathSymbol3DLayer.height instead.
* symbolPreview deprecated since version 4.11. Use symbolUtils instead.
* symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
* ImageServiceIdentifyTask deprecated since version 4.18. Use ImageIdentifyTask instead.
* ImageServiceIdentifyParameters deprecated since version 4.18. Use ImageIdentifyParameters instead.
* ImageServiceIdentifyResult deprecated since version 4.18. Use ImageIdentifyResult instead.
* PrintTemplate.preserveScale deprecated since version 4.16. Use PrintTemplate.scalePreserved instead.
* ProjectParameters.outSR deprecated since version 4.4. Use ProjectParameters.outSpatialReference instead.
* PointDrawAction.coordinates deprecated
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
* widget.renderable deprecated since version 4.19. All properties are automatically tracked now and don't need to be decorated with this decorator.
