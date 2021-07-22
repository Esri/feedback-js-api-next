# Change log

The `next` version of 4.21 is now available.  Planned release date is September 2021.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Breaking changes

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| `Bookmarks.bookmarkCreationOptions` | `Bookmarks.defaultCreateOptions` | 4.18 |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4x API.

## Bug fixes and enhancements

- BUG-000141284: Fixed an issue with [WMSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html) where custom parameters would be added to the GetLegendGraphic request with a `?` instead of an `&`, causing the request to fail.
- Fixed an issue where layer effects were not being applied to ImageryLayer.
- Fixed an issue where VectorFieldRenderer would not update when used with the TimeSlider widget.

## Deprecations

<details>
  <summary>Click to expand!</summary>
  
The following are deprecated and will be removed in a future release:

*	decorators.declared deprecated since version 4.16. declared() is not needed to extend Accessor anymore. See Implementing Accessor for updated information.
*	promiseUtils.reject deprecated since version 4.19. Use the native Promise.reject() method instead.
*	promiseUtils.resolve deprecated since version 4.19. Use the native Promise.resolve() method instead.
*	projection.isSupported deprecated since version 4.18.
*	AttachmentInfo deprecated since version 4.19. Use AttachmentInfo instead.
* ChartMediaInfoValueSeries.x deprecated since version 4.17. Use value instead.
*	ChartMediaInfoValueSeries.y deprecated since version 4.17. Use tooltip instead.
*	SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
*	PathSymbol3DLayer.size deprecated since version 4.12. Use PathSymbol3DLayer.width or PathSymbol3DLayer.height instead.
*	symbolPreview deprecated since version 4.11. Use symbolUtils instead.
*	symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
*	ClosestFacilityTask deprecated since version 4.20. Use closestFacility instead.
*	FindTask deprecated since version 4.20. Use find instead.
*	GeometryService deprecated since version 4.20. Use geometryService instead.
*	Geoprocessor deprecated since version 4.20. Use geoprocessor instead.
*	IdentifyTask deprecated since version 4.20. Use identify instead.
*	ImageIdentifyTask deprecated since version 4.20. Use imageService instead.
*	ImageServiceIdentifyTask deprecated since version 4.18. Use imageService instead.
*	Locator deprecated since version 4.20. Use locator instead.
*	PrintTask deprecated since version 4.20. Use print instead.
*	QueryTask deprecated since version 4.20. Use query instead.
*	RouteTask deprecated since version 4.20. Use route instead.
*	ServiceAreaTask deprecated since version 4.20. Use serviceArea instead.
*	AddressCandidate deprecated since version 4.20. Use AddressCandidate instead.
*	AlgorithmicColorRamp deprecated since version 4.20. Use AlgorithmicColorRamp instead.
*	AreasAndLengthsParameters deprecated since version 4.20. Use AreasAndLengthsParameters instead.
*	AttachmentQuery deprecated since version 4.20. Use AttachmentQuery instead.
*	BufferParameters deprecated since version 4.20. Use BufferParameters instead.
*	ClosestFacilityParameters deprecated since version 4.20. Use ClosestFacilityParameters instead.
*	ClosestFacilitySolveResult deprecated since version 4.20. Use ClosestFacilitySolveResult instead.
*	ColorRamp deprecated since version 4.20. Use ColorRamp instead.
*	DataFile deprecated since version 4.20. Use DataFile instead.
*	DataLayer deprecated since version 4.20. Use DataLayer instead.
*	DensifyParameters deprecated since version 4.20. Use DensifyParameters instead.
*	DirectionsFeatureSet deprecated since version 4.20. Use DirectionsFeatureSet instead.
*	DistanceParameters deprecated since version 4.20. Use DistanceParameters instead.
*	FeatureSet deprecated since version 4.20. Use FeatureSet instead.
*	FindParameters deprecated since version 4.20. Use FindParameters instead.
*	FindResult deprecated since version 4.20. Use FindResult instead.
*	GeneralizeParameters deprecated since version 4.20. Use GeneralizeParameters instead.
*	GPMessage deprecated since version 4.20. Use GPMessage instead.
*	IdentifyParameters deprecated since version 4.20. Use IdentifyParameters instead.
*	IdentifyResult deprecated since version 4.20. Use IdentifyResult instead.
*	ImageHistogramParameters deprecated since version 4.20. Use ImageHistogramParameters instead.
*	ImageIdentifyParameters deprecated since version 4.20. Use ImageIdentifyParameters instead.
*	ImageIdentifyResult deprecated since version 4.20. Use ImageIdentifyResult instead.
*	ImageServiceIdentifyParameters deprecated since version 4.18. Use ImageIdentifyParameters instead.
*	ImageServiceIdentifyResult deprecated since version 4.18. Use ImageIdentifyResult instead.
*	JobInfo deprecated since version 4.20. Use JobInfo instead.
*	LegendLayer deprecated since version 4.20. Use LegendLayer instead.
*	LengthsParameters deprecated since version 4.20. Use LengthsParameters instead.
*	LinearUnit deprecated since version 4.20. Use LinearUnit instead.
*	MultipartColorRamp deprecated since version 4.20. Use MultipartColorRamp instead.
*	NAMessage deprecated since version 4.20. Use NAMessage instead.
*	OffsetParameters deprecated since version 4.20. Use OffsetParameters instead.
*	ParameterValue deprecated since version 4.20. Use ParameterValue instead.
*	PrintParameters deprecated since version 4.20. Use PrintParameters instead.
*	PrintTemplate deprecated since version 4.20. Use PrintTemplate instead.
*	ProjectParameters deprecated since version 4.20. Use ProjectParameters instead.
*	Query deprecated since version 4.20. Use Query instead.
*	RasterData deprecated since version 4.20. Use RasterData instead.
*	RelationParameters deprecated since version 4.20. Use RelationParameters instead.
*	RelationshipQuery deprecated since version 4.20. Use RelationshipQuery instead.
*	RouteParameters deprecated since version 4.20. Use RouteParameters instead.
*	RouteResult deprecated since version 4.20. Use RouteResult instead.
*	ServiceAreaParameters deprecated since version 4.20. Use ServiceAreaParameters instead.
*	ServiceAreaSolveResult deprecated since version 4.20. Use ServiceAreaSolveResult instead.
*	StatisticDefinition deprecated since version 4.20. Use StatisticDefinition instead.
*	TrimExtendParameters deprecated since version 4.20. Use TrimExtendParameters instead.
*	Task deprecated since version 4.20.
*	PointDrawAction.coordinates deprecated since version 4.19. Use vertices instead.
*	Bookmark.extent deprecated since 4.17. Use viewpoint instead.
*	BasemapLayerList.statusIndicatorsVisible deprecated since version 4.15. Use BasemapLayerList.visibleElements.statusIndicators instead.
*	FeatureForm.description deprecated since version 4.20. Set it via the FormTemplate.description.
*	FeatureForm.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
*	FeatureForm.title deprecated since version 4.20. Set it via the FormTemplate.title.
*	FeatureFormViewModel.description deprecated since version 4.20. Set it via the FormTemplate.description.
*	FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
*	FeatureFormViewModel.title deprecated since version 4.20. Set it via the FormTemplate.title.
*	LayerList.statusIndicatorsVisible deprecated since version 4.15. Use LayerList.visibleElements.statusIndicators instead.
*	Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
*	Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
*	widget.renderable deprecated since version 4.19. All properties are automatically tracked now and don't need to be decorated with this decorator.
*	TimeSlider.values deprecated since version 4.20. Use timeExtent instead.
*	TimeSliderViewModel.values deprecated since version 4.20. Use timeExtent instead.

BELOW ARE THE MANUALLY ADDED DEPRECATED CLASSES, PROPERTIES, METHODS, EVENTS

*	decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
*	LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
*	SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
*	SmartMapping.params.basemap deprecated since version 4.13. Use view instead.
*	The light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, dark-red are deprecated since 4.19. Please use light or dark instead, or create your own theme.

</details>
