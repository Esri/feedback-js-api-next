# Change log

The `next` version of 4.23 is now available.  Planned release date is March 2022.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)


## Breaking changes

* TBD

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|-----------------------------|------------------|--------------------|
| `TBD` | `TBD` | `TBD` |

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4x API.

## Bug fixes and enhancements

* TBD

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.22 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand!</summary>  
  
* **Widget view source code:**   Starting at 4.21, the `.tsx` widget view source code is being deprecated for all widgets. This will be removed in a future release. Many of these files contain references to modules that are not open sourced or for internal-use only. This change does not affect the ability to build custom widgets, extend the ViewModel or customize widget CSS.
* AddressCandidate deprecated since version 4.20. Use AddressCandidate instead.
* AlgorithmicColorRamp deprecated since version 4.20. Use AlgorithmicColorRamp instead.
* AreasAndLengthsParameters deprecated since version 4.20. Use AreasAndLengthsParameters instead.
* AttachmentQuery deprecated since version 4.20. Use AttachmentQuery instead.
* BasemapToggle.toggle deprecated since version 4.22. Use BasemapToggle instead.
* Bookmark.extent deprecated since 4.17. Use viewpoint instead.
* BufferParameters deprecated since version 4.20. Use BufferParameters instead.
* ClosestFacilityParameters deprecated since version 4.20. Use ClosestFacilityParameters instead.
* ClosestFacilitySolveResult deprecated since version 4.20. Use ClosestFacilitySolveResult instead.
* ClosestFacilityTask deprecated since version 4.20. Use closestFacility instead.
* ColorRamp deprecated since version 4.20. Use ColorRamp instead.
* CSVLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* DataFile deprecated since version 4.20. Use DataFile instead.
* DataLayer deprecated since version 4.20. Use DataLayer instead.
* decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
* DensifyParameters deprecated since version 4.20. Use DensifyParameters instead.
* DirectionsFeatureSet deprecated since version 4.20. Use DirectionsFeatureSet instead.
* DistanceParameters deprecated since version 4.20. Use DistanceParameters instead.
* Editor.layerInfos.fieldConfig deprecated since version 4.22. Set the Editor's editable fields via layerInfo.formTemplate.elements and pass in either a FieldElement or GroupElement instead.
* Editor.supportingWidgetDefaults.featureForm.fieldConfig deprecated since version 4.22. Set the Editor's editable fields via layerInfos.formTemplate.elements and pass in either a FieldElement or GroupElement instead.
* Effect.Effect deprecated since version 4.21. Use Effect instead.
* FeatureEffect deprecated since version 4.22. Use esri/layers/support/FeatureEffect instead.
* FeatureFilter deprecated since version 4.22. Use esri/layers/support/FeatureFilter instead.
* FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* FeatureSet deprecated since version 4.20. Use FeatureSet instead.
* FieldConfig.editorType deprecated since version 4.16
* FindParameters deprecated since version 4.20. Use FindParameters instead.
* FindResult deprecated since version 4.20. Use FindResult instead.
* FindTask deprecated since version 4.20. Use find instead.
* GeneralizeParameters deprecated since version 4.20. Use GeneralizeParameters instead.
* GeoJSONLayerView.effect deprecated since version 4.22. Use featureEffect instead.
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
* OGCFeatureLayerView.effect deprecated since version 4.22. Use featureEffect instead.
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
* PrintViewModel.scaleEnabled deprecated since version 4.22. Instead, use TemplateOptions if using the Print widget, or PrintTemplate if calling print() directly.
* ProjectParameters deprecated since version 4.20. Use ProjectParameters inste
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
* SearchViewModel.defaultSymbol deprecated Use defaultSymbols instead.
* ServiceAreaParameters deprecated since version 4.20. Use ServiceAreaParameters instead.
* ServiceAreaSolveResult deprecated since version 4.20. Use ServiceAreaSolveResult instead.
* ServiceAreaTask deprecated since version 4.20. Use serviceArea instead.
* StatisticDefinition deprecated since version 4.20. Use StatisticDefinition instead.
* StreamLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* Task deprecated since version 4.20.
* Theme: the light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, dark-red are deprecated since 4.19. Please use light or dark instead, or create your own theme.
* TimeSlider.values deprecated since version 4.20. Use timeExtent instead.
* TimeSliderViewModel.values deprecated since version 4.20. Use timeExtent instead.
* TrimExtendParameters deprecated since version 4.20. Use TrimExtendParameters instead.
* WFSLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* widget.renderable deprecated since version 4.19. All properties are automatically tracked now and don't need to be decorated with this decorator.

</details>
