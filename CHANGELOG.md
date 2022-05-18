# Change log

The `next` version of 4.24 is now available.  Planned release date is July 2022.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Task removal

At version 4.20 of the ArcGIS API for JavaScript, we deprecated Tasks in favor of using the modular methods found inside the `esri/rest` folder. At version 4.24, we removed support for Tasks inside the `esri/tasks` and `esri/tasks/support` folders. We removed the five task-based Portal helper methods (which were deprecated since version 4.21) as well. 

You can test this today using `next` via CDN or NPM to see how this breaking change affects your apps before the official release.

There’s a good blog available that goes into more detail here:
[Rest is up to the task](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/rest-is-up-to-the-task/)

And there’s a great video from René Rubalcava that clearly explains the story here:
[Migrate off Tasks in the ArcGIS API for JavaScript TODAY!](https://www.youtube.com/watch?v=vVZkUdmia3w&t=2s)

## Breaking changes

The following classes, methods, properties and events have been deprecated for at least 2 releases and have now been removed from the API:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| `LocatorSearchSource.locator` | [LocatorSearchSource.url](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search-LocatorSearchSource.html#url) | 4.22 |
| `Bookmark.extent` | [Bookmark.viewpoint](https://developers.arcgis.com/javascript/latest/api-reference/esri-webmap-Bookmark.html#viewpoint) | 4.17 |

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

- BUG-000119268: Fixed an issue in SceneView where [hitTest](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#hitTest) now returns multiple results for non-draped icons and shows multiple results in popups.
- BUG-000127344: Fixed an issue where the shape of the [HeatmapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-HeatmapRenderer.html) was changed to a square instead of a circle as the layer was zoomed out to a smaller scale.
- BUG-000130727: Fixed an issue where layers rendered with [HeatmapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-HeatmapRenderer.html) would not display labels.
- BUG-000147907 - Fixed an issue where [LayerList.listItemCreatedFunction](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html#listItemCreatedFunction) was called multiple times causing performance degradation. However, the fix introduces a breaking change; if you need to know something about the ListItem's title or layer (e.g. `layer.type`) then you must watch the listItem for `updating` to be `false` before checking these properties.
- Fixed an issue where layers rendered with [HeatmapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-HeatmapRenderer.html) would not display popups.
- [Esri Community - 1161336](https://community.esri.com/t5/arcgis-api-for-javascript-questions/changing-basemaps-using-activebasemap-lt-basemapid/m-p/1161336): Fixed an issue with the [BasemapGallery](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html) when changing the `activeBasemap` programmatically to a named basemap id.
- [Esri Community - 1166552](https://community.esri.com/t5/arcgis-api-for-javascript-questions/arabic-characters-in-textsymbol-not-being/m-p/1166552): Fixed an issue with [TextSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-TextSymbol.html) and displaying right-to-left (RTL) languages.
- Attribution widget no longer mirrors for right-to-left (RTL).
- [Esri Community - 1137736](https://community.esri.com/t5/arcgis-api-for-javascript-questions/hover-on-popup-list/m-p/1137736): When hovering over an item in a [popup](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html) feature menu, the corresponding feature will be highlighted in the map.
- Enhanced [FeatureFilter](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html)/[FeatureEffect](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureEffect.html) to work for layers with [HeatmapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-HeatmapRenderer.html).
- Enhanced [Layer.fromPortalItem()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#fromPortalItem) to handle existing KML items uploaded by file instead of by URL.
- Enhanced the [Attribution Widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Attribution.html) to not be clickable when all the attribution text fits and is not expandable.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.23 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand!</summary>  

* CSVLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* FeatureLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* GeoJSONLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* OGCFeatureLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* StreamLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* FeatureEffect deprecated since version 4.22. Use esri/layers/support/FeatureEffect instead.
* Effect.Effect deprecated since version 4.21. Use Effect instead.
* FeatureFilter deprecated since version 4.22. Use esri/layers/support/FeatureFilter instead.
* WFSLayerView.effect deprecated since version 4.22. Use featureEffect instead.
* BasemapToggle.toggle deprecated since version 4.22. Watch the activeBasemap property instead.
* Directions.routeServiceUrl deprecated since version 4.24. Use {link: module:esri/layers/RouteLayer#url} from layer instead.
* Directions.routeSymbol deprecated since version 4.24. Use {link: module:esri/layers/support/RouteSymbols#directionLines} from layer instead.
* Directions.stopSymbols deprecated since version 4.24. Use {link: module:esri/layers/support/RouteStopSymbols} from layer instead.
* DirectionsViewModel.routeServiceUrl deprecated since version 4.24. Use {link: module:esri/layers/RouteLayer#url} from layer instead.
* DirectionsViewModel.routeSymbol deprecated since version 4.24. Use {link: module:esri/layers/support/RouteSymbols#directionLines} from layer instead.
* DirectionsViewModel.stops deprecated since version 4.24. Use {link: module:esri/layers/RouteLayer#stops} from layer instead.
* DirectionsViewModel.stopSymbols deprecated since version 4.24. Use {link: module:esri/layers/support/RouteStopSymbols} from layer instead.
* Editor.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation
* Editor.startCreateWorkflowAtFeatureEdit deprecated since 4.23
* Editor.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection instead.
* Editor.useDeprecatedCreateWorkflow deprecated since version 4.23. Although new at 4.23, this property was introduced to help migrate from the legacy CreateWorkflow to the updated CreateFeaturesWorkflow. Once CreateWorkflow is fully removed, this property will no longer be necessary.
* CreateWorkflow deprecated since version 4.23. Use CreateFeaturesWorkflow instead.
* CreateWorkflowData deprecated since version 4.23. Use CreateFeaturesWorkflowData instead.
* CreateWorkflowData.edits deprecated since 4.23. Use CreateFeaturesWorkflow.pendingFeatures to access edits made to the workflow data.
* EditorViewModel.startCreateWorkflowAtFeatureCreation deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureCreation.
* EditorViewModel.startCreateWorkflowAtFeatureEdit deprecated since 4.23
* EditorViewModel.startCreateWorkflowAtFeatureTypeSelection deprecated since version 4.23. Instead use startCreateFeaturesWorkflowAtFeatureTypeSelection.
* FieldGroupConfig deprecated since version 4.23. Set field groupings via the GroupElement.
* FieldGroupConfig.description deprecated since version 4.23. Set field grouping description via the GroupElement.description.
* FieldGroupConfig.fieldConfig deprecated since version 4.23. Set fields via the FieldElement.
* FieldGroupConfig.label deprecated since version 4.23. Set label grouped fields via the GroupElement.label.
* FieldGroupConfig.visibilityExpression deprecated since version 4.23. Set fields via the GroupElement.visibilityExpression.
* InputFieldGroup.visibilityExpression deprecated Since 4.23. Use groupElement.visibilityExpression
* PrintViewModel.scaleEnabled deprecated since version 4.22. Instead, use TemplateOptions if using the Print widget, or PrintTemplate if calling print() directly.
* SearchViewModel.defaultSymbol deprecated since version 4.22. Use defaultSymbols instead.
* SlicePlane deprecated This module was moved in 4.23. Use SlicePlane instead.
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.

</details>
