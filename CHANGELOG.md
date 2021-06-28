# Change log

The `next` version of 4.20 is now available.  Planned release date is June 2021.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Breaking changes

* CodedValueDomain.codedValues now returns an array of CodedValue type definition objects. Prior to this, it used an array of generic objects. The properties within the codedValue have not changed.
* RotateEventInfo.angle is now reported in degree by the SketchViewModel.
* The keyboard shortcut key has changed from Ctrl to Shift in Sketch and SketchViewModel for creating a polgyon graphic (rectangle or circle) with predefined shapes.
* The keyboard shortcut key has changed from C to Enter in Sketch, SketchViewModel, and Draw for completing a polyline, polygon, or point graphic.

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
|Bookmarks.select-bookmark|Bookmarks.bookmark-select|4.17|
|BookmarksViewModel.BookmarkOptions.captureExtent|BookmarksViewModel.BookmarkOptions.captureViewpoint|4.17|
|FeatureTemplates.filterEnabled|FeatureTemplates.visibleElements.filter|4.15|
|Popup.featureNavigationEnabled|Popup.visibleElements.featureNavigation|4.15|

## Bug fixes and enhancements

- BUG-000130223: Fixed an issue where some FeatureLayers and MapImageLayers would not draw on the specific Android devices when the opacity was not set to 1.
- BUG-000132202: Fixed an issue where FeatureLayer.refresh() method was throwing an error.
- BUG-000139909: Fixed an issue where map services added to web maps using the root service URL would not display properly on certain Android devices.
- BUG-000135228: Fixed an issue where the Set scale option of the Print widget would lock the extent for successive map printouts.
- BUG-000135386: Fixed an issue where the StreamLayer.purgeOptions.ageReceived settings were not properly honored.
- BUG-000136368: Fixed an issue where the popup doesn't request the feature geometry when some geometry functions are used in Arcade expressions.
- BUG-000137657: Fixed an issue where symbols with unique value set to null fail to render when there are two fields in UniqueValueRenderer.
- BUG-000137883: Fixed an issue where labels would not update correctly after editing their associated values using the Editor widget.
- BUG-000137996: Fixed an issue where simultaneous creation of multiple hierarchical group layers causes UI blocking.
- BUG-000138085: Fixed an issue VectorTileLayer.currentStyleInfo.style was not reflecting changes made to the VectorTileLayer's style.
- BUG-000138460: Fixed an issue where some layers showed an offset when zooming in. This was done by providing the ability to set the MapView's scale 1:1 by creating additional LODs via TileInfo.create() and set the generated LODs in the MapView.constraints.
- BUG-000138666: Fixed an issue where the TimeSlider widget was throwing an error when fullTimeExtent was set while the TimeSlider widget is invisible.
- BUG-000139192: Fixed an issue where the multipoint geometries are split into two or more points after zooming past certain scales.
- BUG-000139265: Fixed an issue where ImageryTileLayer is not displayed if it does not have fixed level factors.
- BUG-000139825: Fixed an issue where the performance of VectorTileLayers was impacted when panning.
- BUG-000139849: Fixed an issue with the Sketch widget where it would not remove a graphic via the esc key after clicking the undo button.
- BUG-000140487: Fixed an issue where the geodatabase version information was not included in identify and IdentifyTask operations.
- BUG-000140489: Fixed an issue where the sorted graphics in GraphicsLayer lose the order after zooming in or out on the map.
- BUG-000140061: Fixed an issue where passing a layer from ArcGIS Server as a FeatureSnappingLayerSource was causing timeouts.
- BUG-000139631: Fixed an issue where drawing a geometry using Sketch or SketchViewModel was throwing console errors whenever the Map projection was not in Web Mercator or WGS 84.
- BUG-000139485: Fixed an issue where the Legend is not updated when the RasterRenderingRule is changed.
- Esri Community - 1046301: Added a property called featuresPerPage on PopupViewModel.
- Esri Community - 1048724: Added a support for new characters for the coordinateFormatter.fromLatitudeLongitude() method.
- Esri Community - 1051281: Fixed an issue where FeatureLayer.historicMoment was not being honored after the initial change.
- Esri Community - 1052876: Fixed an issue where PictureMarkerSymbols were being cut off along tile edges.
- Esri Community - 1056484: Fixed an issue where ImageryLayer was throwing a warning when UniqueValueRenderer and renderingRule are both set on Imagerylayer.
- Esri Community - 1058789: Fixed an issue where the OGCFeatureLayer was requesting the wrong CRS for some services, which could cause a slight offset.
- Esri Community - 1058935: Fixed an issue where updates made to a map's FeatureLayer did not reflect within the corresponding FeatureTable widget.
- Esri Community - 1059410: Fixed an issue where ImageryLayer was throwing an error when lerc format was requested.
- GitHub - 109 - Fixed an issue with esri-loader throwing unhandled promise exceptions when used with Angular 12 and zone.js.
- GitHub - 296 - Fixed an issue where sometimes the map would not display when adding a ScaleBar widget to a MapImageLayer without a basemap.
- Fixed an issue in 2D MapViews where labels would not display if the where clause used a field that wasn't in the labelExpressionInfo.expression.
- Fixed an issue where a CIMSymbol with CIMPictureMarker symbol layer would not render when the image size was too large.
- Fixed an issue where a multi-level nested CIMSymbol would not render.
- Fixed an issue where CIMSymbol's primitiveOverride was not working with the color property of a CIMSolidFill symbol layer.
- Fixed an issue where features with null geometries could display off the map.
- Fixed an issue where hitTest would fail on a line CIMSymbol with a VectorMarker symbol layer.
- Fixed an issue where printing clustered features with different browser window sizes caused inconsistent print results.
- Fixed an issue where the font color of links in the FeatureTable in dark theme did not have enough contrast with the table's background color.
- Fixed an issue where the layer fails to draw features when some Arcade geometry functions are used in the renderer.
- Fixed an issue where the Search widget suggestions dropdown could remain open when a user clicks on another HTML element on the page.
- Fixed an issue where time enabled layers were not printed properly with the Print widget and PrintTask.
- Fixed an issue where visual variables were not being honored when set on a DictionaryRenderer.
- Fixed an issue with the geometryEngine.difference() method failing with some line geometries.
- Fixed an issue with the LayerList widget behavior when working with non-dynamic MapImageLayer sublayers.
- Fixed an issue with the z-order of symbol layers in a CIMSymbol.
- Esri Community - 1009348: Enhanced the CoordinateConversion widget to use sessionStorage with a new storageEnabled property.
- Enhanced summaryStatistics by adding support for string fields.
- Enhanced summaryStatistics by adding a nullcount property in SummaryStatisticsResult to return the number of null values stored in a given field.
- Enhanced SceneLayer by supporting Basis Texture and 3D extent provided by I3S version 1.8.

## Deprecations

The following are deprecated and will be removed in a future release:

- AddressCandidate deprecated since version 4.20. Use AddressCandidate instead.
- AlgorithmicColorRamp deprecated since version 4.20. Use AlgorithmicColorRamp instead.
- AreasAndLengthsParameters deprecated since version 4.20. Use AreasAndLengthsParameters instead.
- AttachmentInfo deprecated since version 4.19. Use AttachmentInfo instead.
- AttachmentQuery deprecated since version 4.20. Use AttachmentQuery instead.
- BasemapLayerList.statusIndicatorsVisible deprecated since version 4.15. Use BasemapLayerList.visibleElements.statusIndicators instead.
- Bookmark.extent deprecated since 4.17. Use viewpoint instead.
- Bookmarks.bookmarkCreationOptions deprecated since 4.18. Use defaultCreateOptions instead.
- BufferParameters deprecated since version 4.20. Use BufferParameters instead.
- ChartMediaInfoValueSeries.x deprecated since version 4.17. Use value instead.
- ChartMediaInfoValueSeries.y deprecated since version 4.17. Use tooltip instead.
- ClosestFacilityParameters deprecated since version 4.20. Use ClosestFacilityParameters instead.
- ClosestFacilitySolveResult deprecated since version 4.20. Use ClosestFacilitySolveResult instead.
- ClosestFacilityTask deprecated since version 4.20. Use closestFacility instead.
- ColorRamp deprecated since version 4.20. Use ColorRamp instead.
- DataFile deprecated since version 4.20. Use DataFile instead.
- DataLayer deprecated since version 4.20. Use DataLayer instead.
- decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
- decorators.declared deprecated since version 4.16. declared() is not needed to extend Accessor anymore. See Implementing Accessor for updated information.
- DensifyParameters deprecated since version 4.20. Use DensifyParameters instead.
- DirectionsFeatureSet deprecated since version 4.20. Use DirectionsFeatureSet instead.
- DistanceParameters deprecated since version 4.20. Use DistanceParameters instead.
- FeatureForm.description deprecated since version 4.20. Set it via the FormTemplate.description.
- FeatureForm.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
- FeatureForm.title deprecated since version 4.20. Set it via the FormTemplate.title.
- FeatureFormViewModel.description deprecated since version 4.20. Set it via the FormTemplate.description.
- FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
- FeatureFormViewModel.title deprecated since version 4.20. Set it via the FormTemplate.title.
- FeatureSet deprecated since version 4.20. Use FeatureSet instead.
- FindParameters deprecated since version 4.20. Use FindParameters instead.
- FindResult deprecated since version 4.20. Use FindResult instead.
- FindTask deprecated since version 4.20. Use find instead.
- GeneralizeParameters deprecated since version 4.20. Use GeneralizeParameters instead.
- GeometryService deprecated since version 4.20. Use geometryService instead.
- Geoprocessor deprecated since version 4.20. Use geoprocessor instead.
- GPMessage deprecated since version 4.20. Use GPMessage instead.
- IdentifyParameters deprecated since version 4.20. Use IdentifyParameters instead.
- IdentifyResult deprecated since version 4.20. Use IdentifyResult instead.
- IdentifyTask deprecated since version 4.20. Use identify instead.
- ImageHistogramParameters deprecated since version 4.20. Use ImageHistogramParameters instead.
- ImageIdentifyParameters deprecated since version 4.20. Use ImageIdentifyParameters instead.
- ImageIdentifyResult deprecated since version 4.20. Use ImageIdentifyResult instead.
- ImageIdentifyTask deprecated since version 4.20. Use imageService instead.
- ImageServiceIdentifyParameters deprecated since version 4.18. Use ImageIdentifyParameters instead.
- ImageServiceIdentifyResult deprecated since version 4.18. Use ImageIdentifyResult instead.
- ImageServiceIdentifyTask deprecated since version 4.18. Use imageService instead.
- JobInfo deprecated since version 4.20. Use JobInfo instead.
- LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
- LayerList.statusIndicatorsVisible deprecated since version 4.15. Use LayerList.visibleElements.statusIndicators instead.
- LegendLayer deprecated since version 4.20. Use LegendLayer instead.
- LengthsParameters deprecated since version 4.20. Use LengthsParameters instead.
- LinearUnit deprecated since version 4.20. Use LinearUnit instead.
- Locator deprecated since version 4.20. Use locator instead.
- MultipartColorRamp deprecated since version 4.20. Use MultipartColorRamp instead.
- NAMessage deprecated since version 4.20. Use NAMessage instead.
- OffsetParameters deprecated since version 4.20. Use OffsetParameters instead.
- ParameterValue deprecated since version 4.20. Use ParameterValue instead.
- PathSymbol3DLayer.size deprecated since version 4.12. Use PathSymbol3DLayer.width or PathSymbol3DLayer.height instead.
- PointDrawAction.coordinates deprecated since version 4.19. Use vertices instead.
- PrintParameters deprecated since version 4.20. Use PrintParameters instead.
- PrintTask deprecated since version 4.20. Use print instead.
- PrintTemplate deprecated since version 4.20. Use PrintTemplate instead.
- projection.isSupported deprecated since version 4.18.
- ProjectParameters deprecated since version 4.20. Use ProjectParameters instead.
- promiseUtils.reject deprecated since version 4.19. Use the native Promise.reject() method instead.
- promiseUtils.resolve deprecated since version 4.19. Use the native Promise.resolve() method instead.
- Query deprecated since version 4.20. Use Query instead.
- QueryTask deprecated since version 4.20. Use query instead.
- RasterData deprecated since version 4.20. Use RasterData instead.
- RelationParameters deprecated since version 4.20. Use RelationParameters instead.
- RelationshipQuery deprecated since version 4.20. Use RelationshipQuery instead.
- RouteParameters deprecated since version 4.20. Use RouteParameters instead.
- RouteResult deprecated since version 4.20. Use RouteResult instead.
- RouteTask deprecated since version 4.20. Use route instead.
- SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
- ServiceAreaParameters deprecated since version 4.20. Use ServiceAreaParameters instead.
- ServiceAreaSolveResult deprecated since version 4.20. Use ServiceAreaSolveResult instead.
- ServiceAreaTask deprecated since version 4.20. Use serviceArea instead.
- SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
- Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
- Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
- SmartMapping.params.basemap deprecated since version 4.13. Use view instead.
- StatisticDefinition deprecated since version 4.20. Use StatisticDefinition instead.
- symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
- symbolPreview deprecated since version 4.11. Use symbolUtils instead.
- Task deprecated since version 4.20.
- TimeSlider.values deprecated since version 4.20. Use timeExtent instead.
- TimeSliderViewModel.values deprecated since version 4.20. Use timeExtent instead.
- TrimExtendParameters deprecated since version 4.20. Use TrimExtendParameters instead.
- widget.renderable deprecated since version 4.19. All properties are automatically tracked now and don't need to be decorated with this decorator.
- The light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, dark-red themes have been deprecated since 4.19. Please use light or dark instead, or create your own theme.
