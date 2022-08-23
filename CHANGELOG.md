# Change log

The `next` version of 4.25 is now available.  Planned release date is November 2022.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## TBD

## Breaking changes

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
TBD

The following tasks have been deprecated for at least 3 releases and have now been removed from the API (expand to read more):

<details>
<summary>Complete list of removed tasks</summary>

| Task removed | Alternate option | Version deprecated |
|--------------|------------------|--------------------|
| `esri/portal/Portal/createClosestFacilityTask` | Use [closestFacility](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-closestFacility.html) with [helperServices](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#helperServices) | 4.21 |
| `esri/portal/Portal/createGeometryService` | Use [geometryService](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-geometryService.html) with [helperServices](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#helperServices) | 4.21 |
| `esri/portal/Portal/createPrintTask` | Use [print](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-print.html) with [helperServices](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#helperServices) | 4.21 |
| `esri/portal/Portal/createRouteTask` | Use [route](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-route.html) with [helperServices](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#helperServices) | 4.21 |
| `esri/portal/Portal/createServiceAreaTask` | Use [serviceArea](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-serviceArea.html) with [helperServices](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#helperServices) | 4.21 |
| `esri/tasks/ClosestFacilityTask`  | [closestFacility](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-closestFacility.html) | 4.20 |
| `esri/tasks/FindTask`  | [find](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-find.html) | 4.20 |
| `esri/tasks/GeometryService` | [geometryService](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-geometryService.html) | 4.20 |
| `esri/tasks/Geoprocessor` | [geoprcessor](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-geoprocessor.html) | 4.20 |
| `esri/tasks/IdentifyTask`  | [identify](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-identify.html) | 4.20 |
| `esri/tasks/ImageIdentifyTask` | [imageService](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-imageService.html) | 4.20 |
| `esri/tasks/ImageServiceIdentifyTask` | [imageService.identify](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-imageService.html#identify) | 4.18 |
| `esri/tasks/Locator` | [locator](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-locator.html) | 4.20 |
| `esri/tasks/PrintTask` | [print](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-print.html) | 4.20 |
| `esri/tasks/QueryTask` | [query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-query.html) | 4.20 |
| `esri/tasks/RouteTask` | [route](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-route.html) | 4.20 |
| `esri/tasks/ServiceAreaTask` | [serviceArea](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-serviceArea.html) | 4.20 |
| `esri/tasks/Task` | n/a | 4.20 |
| `esri/tasks/supportAddressCandidate` | [AddressCandidate](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-AddressCandidate.html) | 4.20 |
| `esri/tasks/supportAlgorithmicColorRamp` | [AlgorithmicColorRamp](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-AlgorithmicColorRamp.html) | 4.20 |
| `esri/tasks/supportAreasAndLengthsParameters` | [AreasAndLengthsParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-AreasAndLengthsParameters.html) | 4.20 |
| `esri/tasks/supportAttachmentQuery` | [AttachmentQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-AttachmentQuery.html) | 4.20 |
| `esri/tasks/supportBufferParameters` | [BufferParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-BufferParameters.html) | 4.20 |
| `esri/tasks/supportClosestFacilityParameters` | [ClosestFacilityParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ClosestFacilityParameters.html) | 4.20 |
| `esri/tasks/supportClosestFacilitySolveResult` | [ClosestFacilitySolveResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ClosestFacilitySolveResult.html) | 4.20 |
| `esri/tasks/supportColorRamp` | [ColorRamp](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ColorRamp.html) | 4.20 |
| `esri/tasks/supportDataFile` | [DataFile](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-DataFile.html) | 4.20 |
| `esri/tasks/supportDataLayer` | [DataLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-DataLayer.html) | 4.20 |
| `esri/tasks/supportDensifyParameters` | [DensifyParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-DensifyParameters.html) | 4.20 |
| `esri/tasks/supportDirectionsFeatureSet` | [DirectionsFeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-DirectionsFeatureSet.html) | 4.20 |
| `esri/tasks/supportDistanceParameters` | [DistanceParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-DistanceParameters.html) | 4.20 |
| `esri/tasks/supportFeatureSet` | [FeatureSet](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FeatureSet.html) | 4.20 |
| `esri/tasks/supportFindParameters` | [FindParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FindParameters.html) | 4.20 |
| `esri/tasks/supportFindResult` | [FindResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-FindResult.html) | 4.20 |
| `esri/tasks/supportGeneralizeParameters` | [GeneralizeParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-GeneralizeParameters.html) | 4.20 |
| `esri/tasks/supportGPMessage` | [GPMessage](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-GPMessage.html) | 4.20 |
| `esri/tasks/supportIdentifyParameters` | [IdentifyParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-IdentifyParameters.html) | 4.20 |
| `esri/tasks/supportIdentifyResult` | [IdentifyResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-IdentifyResult.html) | 4.20 |
| `esri/tasks/supportImageIdentifyParameters` | [ImageIdentifyParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageIdentifyParameters.html) | 4.20 |
| `esri/tasks/supportImageIdentifyResult` |[ ImageIdentifyResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageIdentifyResult.html) | 4.20 |
| `esri/tasks/supportImageHistogramParameters` | [ImageHistogramParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageHistogramParameters.html) | 4.20 |
| `esri/tasks/supportImageServiceIdentifyParameters` | [ImageServiceIdentifyParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageIdentifyParameters.html) | 4.18 |
| `esri/tasks/supportImageServiceIdentifyResult` | [ImageServiceIdentifyResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ImageIdentifyResult.html) | 4.18 |
| `esri/tasks/supportJobInfo` | [JobInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-JobInfo.html) | 4.20 |
| `esri/tasks/supportLegendLayer` | [LegendLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-LegendLayer.html) | 4.20 |
| `esri/tasks/supportLengthsParameters` | [LengthsParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-LengthsParameters.html) | 4.20 |
| `esri/tasks/supportLinearUnit` | [LinearUnit](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-LinearUnit.html) | 4.20 |
| `esri/tasks/supportMultipartColorRamp` | [MultipartColorRamp](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-MultipartColorRamp.html) | 4.20 |
| `esri/tasks/supportNAMessage` | [NAMessage](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-NAMessage.html) | 4.20 |
| `esri/tasks/supportOffsetParameters` | [OffsetParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-OffsetParameters.html) | 4.20 |
| `esri/tasks/supportParameterValue` | [ParameterValue](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ParameterValue.html) | 4.20 |
| `esri/tasks/supportPrintParameters` | [PrintParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-PrintParameters.html) | 4.20 |
| `esri/tasks/supportPrintTemplate` | [PrintTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-PrintTemplate.html) | 4.20 |
| `esri/tasks/supportProjectParameters` | [ProjectParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ProjectParameters.html) | 4.20 |
| `esri/tasks/supportQuery` | [Query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html) | 4.20 |
| `esri/tasks/supportRasterData` | [RasterData](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RasterData.html) | 4.20 |
| `esri/tasks/supportRelationParameters` | [RelationParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RelationParameters.html) | 4.20 |
| `esri/tasks/supportRelationshipQuery` | [RelationshipQuery](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RelationshipQuery.html) | 4.20 |
| `esri/tasks/supportRouteParameters` | [RouteParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RouteParameters.html) | 4.20 |
| `esri/tasks/supportRouteResult` | [RouteResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-RouteResult.html) | 4.20 |
| `esri/tasks/supportServiceAreaParameters` | [ServiceAreaParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ServiceAreaParameters.html) | 4.20 |
| `esri/tasks/supportServiceAreaSolveResult` | [ServiceAreaSolveResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-ServiceAreaSolveResult.html) | 4.20 |
| `esri/tasks/supportStatisticDefinition` | [StatisticDefinition](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-StatisticDefinition.html) | 4.20 |
| `esri/tasks/supportTrimExtendParameters` | [TrimExtendParameters](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-TrimExtendParameters.html) | 4.20 |

</details>

Please refer to the [Breaking changes](https://developers.arcgis.com/javascript/latest/breaking-changes/) guide topic for a complete list of breaking changes across all releases of the 4x API.

## Bug fixes and enhancements

- TBD

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