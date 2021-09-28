# Change log

The `next` version of 4.22 is now available.  Planned release date is December 2021.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Breaking changes

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| `BasemapLayerList.statusIndicatorsVisible` | `BasemapLayerList.visibleElements.statusIndicators` | 4.15 |
| `Bookmarks.bookmarkCreationOptions` | `Bookmarks.defaultCreateOptions` | 4.18 |
| `esri/tasks/ImageServiceIdentifyTask` | `imageService.identify` | 4.18 |
| `esri/tasks/support/ImageServiceIdentifyResult` | `ImageIdentifyResult` | 4.18 |
| `esri/tasks/support/ImageServiceIdentifyParameters` | `ImageIdentifyParameters` | 4.18 |
| `FeatureForm.description` and `FeatureFormViewModel.description`  | `FormTemplate.description` set either on the `FeatureForm` or `FeatureLayer.formTemplate` | 4.18 |
| `FeatureForm.fieldConfig` and `FeatureFormViewModel.fieldConfig` | `FieldElement/GroupElement` set in the `FormTemplate.elements` | 4.16 |
| `FeatureForm.title` and `FeatureFormViewModel.title` | `FormTemplate.title` set either on the `FeatureForm` or `FeatureLayer.formTemplate`  | 4.18 |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4x API.

## Bug fixes and enhancements

* TBD

## Deprecations
The following are deprecated and will be removed in a future release. For anything deprecated in 4.20 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand!</summary>  
  
*  **Widget view source code:**   Starting at 4.21, the `.tsx` widget view source code is being deprecated for all widgets. This will be removed in a future release. Many of these files contain references to modules that are not open sourced or for internal-use only. This change does not affect the ability to build custom widgets, extend the ViewModel or customize widget CSS.
*    AddressCandidate deprecated since version 4.20. Use AddressCandidate instead.
*    AlgorithmicColorRamp deprecated since version 4.20. Use AlgorithmicColorRamp instead.
*    AreasAndLengthsParameters deprecated since version 4.20. Use AreasAndLengthsParameters instead.
*    AttachmentInfo deprecated since version 4.19. Use AttachmentInfo instead.
*    AttachmentQuery deprecated since version 4.20. Use AttachmentQuery instead.
*    Bookmark.extent deprecated since 4.17. Use viewpoint instead.
*    BufferParameters deprecated since version 4.20. Use BufferParameters instead.
*    ChartMediaInfoValueSeries.x deprecated since version 4.17. Use value instead.
*    ChartMediaInfoValueSeries.y deprecated since version 4.17. Use tooltip instead.
*    ClosestFacilityParameters deprecated since version 4.20. Use ClosestFacilityParameters instead.
*    ClosestFacilitySolveResult deprecated since version 4.20. Use ClosestFacilitySolveResult instead.
*    ClosestFacilityTask deprecated since version 4.20. Use closestFacility instead.
*    ColorRamp deprecated since version 4.20. Use ColorRamp instead.
*    DataFile deprecated since version 4.20. Use DataFile instead.
*    DataLayer deprecated since version 4.20. Use DataLayer instead.
*    decorators.cast deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
*    decorators.declared deprecated since version 4.16. `declared` is not needed to extend Accessor anymore. See Implementing Accessor for updated information.
*    DensifyParameters deprecated since version 4.20. Use DensifyParameters instead.
*    DirectionsFeatureSet deprecated since version 4.20. Use DirectionsFeatureSet instead.
*    DistanceParameters deprecated since version 4.20. Use DistanceParameters instead.
*    FeatureForm.description deprecated since version 4.20. Set it via the FormTemplate.description.
*    FeatureForm.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
*    FeatureForm.title deprecated since version 4.20. Set it via the FormTemplate.title.
*    FeatureFormViewModel.description deprecated since version 4.20. Set it via the FormTemplate.description.
*    FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
*    FeatureFormViewModel.title deprecated since version 4.20. Set it via the FormTemplate.title.
*    FeatureSet deprecated since version 4.20. Use FeatureSet instead.
*    FindParameters deprecated since version 4.20. Use FindParameters instead.
*    FindResult deprecated since version 4.20. Use FindResult instead.
*    FindTask deprecated since version 4.20. Use find instead.
*    GeneralizeParameters deprecated since version 4.20. Use GeneralizeParameters instead.
*    GeometryService deprecated since version 4.20. Use geometryService instead.
*    Geoprocessor deprecated since version 4.20. Use geoprocessor instead.
*    GPMessage deprecated since version 4.20. Use GPMessage instead.
*    IdentifyParameters deprecated since version 4.20. Use IdentifyParameters instead.
*    IdentifyResult deprecated since version 4.20. Use IdentifyResult instead.
*    IdentifyTask deprecated since version 4.20. Use identify instead.
*    ImageHistogramParameters deprecated since version 4.20. Use ImageHistogramParameters instead.
*    ImageIdentifyParameters deprecated since version 4.20. Use ImageIdentifyParameters instead.
*    ImageIdentifyResult deprecated since version 4.20. Use ImageIdentifyResult instead.
*    ImageIdentifyTask deprecated since version 4.20. Use imageService instead.
*    JobInfo deprecated since version 4.20. Use JobInfo instead.
*    LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
*    LegendLayer deprecated since version 4.20. Use LegendLayer instead.
*    LengthsParameters deprecated since version 4.20. Use LengthsParameters instead.
*    LinearUnit deprecated since version 4.20. Use LinearUnit instead.
*    Locator deprecated since version 4.20. Use locator instead.
*    MultipartColorRamp deprecated since version 4.20. Use MultipartColorRamp instead.
*    NAMessage deprecated since version 4.20. Use NAMessage instead.
*    OffsetParameters deprecated since version 4.20. Use OffsetParameters instead.
*    ParameterValue deprecated since version 4.20. Use ParameterValue instead.
*    PointDrawAction.coordinates deprecated since version 4.19. Use vertices instead.
*    Portal.createClosestFacilityTask deprecated since version 4.21.
*    Portal.createGeometryService deprecated since version 4.21.
*    Portal.createPrintTask deprecated since version 4.21.
*    Portal.createRouteTask deprecated since version 4.21.
*    Portal.createServiceAreaTask deprecated since version 4.21.
*    PrintParameters deprecated since version 4.20. Use PrintParameters instead.
*    PrintTask deprecated since version 4.20. Use print instead.
*    PrintTemplate deprecated since version 4.20. Use PrintTemplate instead.
*    projection.isSupported deprecated since version 4.18.
*    ProjectParameters deprecated since version 4.20. Use ProjectParameters instead.
*    promiseUtils.reject deprecated since version 4.19. Use the native Promise.reject method instead.
*    promiseUtils.resolve deprecated since version 4.19. Use the native Promise.resolve method instead.
*    Query deprecated since version 4.20. Use Query instead.
*    QueryTask deprecated since version 4.20. Use query instead.
*    RasterData deprecated since version 4.20. Use RasterData instead.
*    RelationParameters deprecated since version 4.20. Use RelationParameters instead.
*    RelationshipQuery deprecated since version 4.20. Use RelationshipQuery instead.
*    RouteParameters deprecated since version 4.20. Use RouteParameters instead.
*    RouteResult deprecated since version 4.20. Use RouteResult instead.
*    RouteTask deprecated since version 4.20. Use route instead.
*    SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
*    ServiceAreaParameters deprecated since version 4.20. Use ServiceAreaParameters instead.
*    ServiceAreaSolveResult deprecated since version 4.20. Use ServiceAreaSolveResult instead.
*    ServiceAreaTask deprecated since version 4.20. Use serviceArea instead.
*    SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
*    Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
*    Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
*    StatisticDefinition deprecated since version 4.20. Use StatisticDefinition instead.
*    symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
*    symbolPreview deprecated since version 4.11. Use symbolUtils instead.
*    Task deprecated since version 4.20.
*    TimeSlider.values deprecated since version 4.20. Use timeExtent instead.
*    TimeSliderViewModel.values deprecated since version 4.20. Use timeExtent instead.
*    TrimExtendParameters deprecated since version 4.20. Use TrimExtendParameters instead.
*    widget.renderable deprecated since version 4.19. All properties are automatically tracked now and don't need to be decorated with this decorator.
*    `SmartMapping.params.basemap` deprecated since version 4.13. Use `view` instead.
*    The light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, dark-red are deprecated since 4.19. Please use `light` or `dark` instead, or create your own theme.


BELOW ARE THE MANUALLY ADDED DEPRECATED CLASSES, PROPERTIES, METHODS, EVENTS

* TBD

</details>
