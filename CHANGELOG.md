# Change log

The `next` version of 5.0 is now available. Planned release date is Feburary 2026.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Map components

## Component and widget updates

## Breaking changes

### Core API breaking changes

- The following named `easing` presets on [GoToOptions3D](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#GoToOptions3D) presets were deprecated at 4.33 and have now been removed: `in-cubic`, `out-cubic`, `in-out-cubic`, `in-expo`, `out-expo`, `in-out-expo`, and `in-out-coast-quad`. Please use a supported [EasingName](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-animation-types.html#EasingName) instead.
- The [IPSInfo.SmoothingProperties](https://developers.arcgis.com/javascript/latest/api-reference/esri-webdoc-ips-SmoothingProperties.html#enabled) are no longer enabled by default. To enable smoothing, set the `enabled` property to `true`.

The following classes, methods, properties and events were previously deprecated and have now been removed from the API:

| Class/Property/Method/Event                              | Alternate option                                                                                                                                                                                                                                                                                                                                                     | Version deprecated |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `esri/geometry`                                          | Use [`GeometryUnion`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-types.html#GeometryUnion) or import geometry classes directly, for example [esri/geometry/Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html).                                                                          | 4.32               |
| `esri/geometry#Extent`                                   | Use [esri/geometry/Extent](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Extent.html) instead.                                                                                                                                                                                                                                         | 4.32               |
| `esri/geometry#Geometry`                                 | Use [esri/geometry/Geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html) instead.                                                                                                                                                                                                                                     | 4.32               |
| `esri/geometry#Multipoint`                               | Use [esri/geometry/Multipoint](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Multipoint.html) instead.                                                                                                                                                                                                                                 | 4.32               |
| `esri/geometry#Point`                                    | Use [esri/geometry/Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) instead.                                                                                                                                                                                                                                           | 4.32               |
| `esri/geometry#Polygon`                                  | Use [esri/geometry/Polygon](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polygon.html) instead.                                                                                                                                                                                                                                       | 4.32               |
| `esri/geometry#Polyline`                                 | Use [esri/geometry/Polyline](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Polyline.html) instead.                                                                                                                                                                                                                                     | 4.32               |
| `esri/geometry#SpatialReference`                         | Use [esri/geometry/SpatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html) instead.                                                                                                                                                                                                                     | 4.32               |
| `esri/geometry/geometryEngineAsync`                      | Use [geometry operators](../spatial-analysis/intro-geometry-operators/) instead.                                                                                                                                                                                                                                                                                     | 4.32               |
| `esri/geometry/projection`                               | Use [@arcgis/core/geometry/operators/projectOperator](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-operators-projectOperator.html) instead.                                                                                                                                                                                           | 4.32               |
| `esri/geometry/support/GeographicTransformation`         | Use [@arcgis/core/geometry/operators/support/GeographicTransformation](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-operators-support-GeographicTransformation.html) instead.                                                                                                                                                         | 4.32               |
| `esri/geometry/support/GeographicTransformationStep`     | Use [@arcgis/core/geometry/operator/support/GeographicTransformationStep](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-operators-support-GeographicTransformationStep.html) instead.                                                                                                                                                  | 4.32               |
| `esri/pointCloudRenderers`                               | Use [`PointCloudRendererUnion`](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-pointCloud-types.html#PointCloudRendererUnion) or import classes directly, for example [esri/renderers/PointCloudStretchRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudStretchRenderer.html). | 4.32               |
| `esri/pointCloudRenderers#PointCloudClassBreaksRenderer` | Use [esri/renderers/PointCloudClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudClassBreaksRenderer.html) instead.                                                                                                                                                                                         | 4.32               |
| `esri/pointCloudRenderers#PointCloudRGBRenderer`         | Use [esri/renderers/PointCloudRGBRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudRGBRenderer.html) instead.                                                                                                                                                                                                         | 4.32               |
| `esri/pointCloudRenderers#PointCloudStretchRenderer`     | Use [esri/renderers/PointCloudStretchRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudStretchRenderer.html) instead.                                                                                                                                                                                                 | 4.32               |
| `esri/pointCloudRenderers#PointCloudUniqueValueRenderer` | Use [esri/renderers/PointCloudUniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PointCloudUniqueValueRenderer.html) instead.                                                                                                                                                                                         | 4.32               |
| `esri/rasterRenderers`                                   | Use [RasterRendererUnion](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-support-raster-types.html#RasterRendererUnion) or import classes directly, for example [esri/renderers/RasterStretchRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-RasterStretchRenderer.html).                       | 4.32               |
| `esri/rasterRenderers#ClassBreaksRenderer`               | Use [esri/renderers/ClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html) instead.                                                                                                                                                                                                             | 4.32               |
| `esri/rasterRenderers#FlowRenderer`                      | Use [esri/renderers/FlowRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-FlowRenderer.html) instead.                                                                                                                                                                                                                           | 4.32               |
| `esri/rasterRenderers#RasterColormapRenderer`            | Use [esri/renderers/RasterColormapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-RasterColormapRenderer.html) instead.                                                                                                                                                                                                       | 4.32               |
| `esri/rasterRenderers#RasterShadedReliefRenderer`        | Use [esri/renderers/RasterShadedReliefRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-RasterShadedReliefRenderer.html) instead.                                                                                                                                                                                               | 4.32               |
| `esri/rasterRenderers#RasterStretchRenderer`             | Use [esri/renderers/RasterStretchRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-RasterStretchRenderer.html) instead.                                                                                                                                                                                                         | 4.32               |
| `esri/rasterRenderers#UniqueValueRenderer`               | Use [esri/renderers/UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html) instead.                                                                                                                                                                                                             | 4.32               |
| `esri/rasterRenderers#VectorFieldRenderer`               | Use [esri/renderers/VectorFieldRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-VectorFieldRenderer.html) instead.                                                                                                                                                                                                             | 4.32               |
| `esri/renderers`                                         | Use [`RendererUnion`](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-types.html#RendererUnion) or import classes directly, for example [esri/renderers/DotDensityRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-DotDensityRenderer.html).                                                      | 4.32               |
| `esri/renderers#ClassBreaksRenderer`                     | Use [esri/renderers/ClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html) instead.                                                                                                                                                                                                             | 4.32               |
| `esri/renderers#DictionaryRenderer`                      | Use [esri/renderers/DictionaryRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-DictionaryRenderer.html) instead.                                                                                                                                                                                                               | 4.32               |
| `esri/renderers#DotDensityRenderer`                      | Use [esri/renderers/DotDensityRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-DotDensityRenderer.html) instead.                                                                                                                                                                                                               | 4.32               |
| `esri/renderers#HeatmapRenderer`                         | Use [esri/renderers/HeatmapRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-HeatmapRenderer.html) instead.                                                                                                                                                                                                                     | 4.32               |
| `esri/renderers#PieChartRenderer`                        | Use [esri/renderers/PieChartRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-PieChartRenderer.html) instead.                                                                                                                                                                                                                   | 4.32               |
| `esri/renderers#RendererWithVisualVariables`             | Use [`RendererWithVisualVariablesUnion`](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-types.html#RendererWithVisualVariablesUnion) from `esri/unionTypes`.                                                                                                                                                                           | 4.32               |
| `esri/renderers#SimpleRenderer`                          | Use [esri/renderers/SimpleRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html) instead.                                                                                                                                                                                                                       | 4.32               |
| `esri/renderers#UniqueValueRenderer`                     | Use [esri/renderers/UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html) instead.                                                                                                                                                                                                             | 4.32               |
| `GeographicParameters.geographic`                        | Use the mesh [`vertexSpace`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Mesh.html#vertexSpace) together with the spatial reference to control global versus local operations.                                                                                                                                                       | 4.30               |
| `meshUtils.georeference()`                               | Use [`meshUtils.convertVertexSpace`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-support-meshUtils.html#convertVertexSpace) instead.                                                                                                                                                                                                 | 4.30               |
| `meshUtils.ungeoreference()`                             | Use [`meshUtils.convertVertexSpace`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-support-meshUtils.html#convertVertexSpace) instead.                                                                                                                                                                                                 | 4.30               |
| `Navigation.mouseWheelZoomEnabled`                       | Set [`Navigation.actionMap.mouseWheel`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-navigation-NavigationActionMap.html#mouseWheel) to control mouse-wheel behavior.                                                                                                                                                                    | 4.32               |
| `Polygon.isSelfIntersecting`                             | Use [`simplifyOperator.isSimple`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-operators-simplifyOperator.html#isSimple) to validate polygon geometry.                                                                                                                                                                                | 4.33               |
| `WebStyleSymbol.fetchCIMSymbol()`                        | Use [WebStyleSymbol.fetchSymbol()](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-WebStyleSymbol.html#fetchSymbol) instead.                                                                                                                                                                                                              | 4.33               |
| `ConvertMeshOptions.location`                            | Use [ConvertMeshOptions.origin](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-SceneLayer.html#ConvertMeshOptions) instead                                                                                                                                                                                                                | 4.34               |

### Map components breaking changes

- State property changes no longer reflect to DOM attributes. As a result, any CSS or JavaScript that depended on observing state via reflected attributes (for example, attribute selectors, `getAttribute`, or mutation observers) will no longer work and should be updated to rely on property values or other supported APIs.
- The `open` method on [`arcgis-features`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-features/) and [`arcgis-popup`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-popup/) has been removed. Use the `open` **property** on [`arcgis-features`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-features/#open) and [`arcgis-popup`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-popup/#open) instead.

The following components, methods, properties and events were previously deprecated and have now been removed from the API:

| Component/Property/Method/Event                   | Alternate option                                                                                                                                                       | Version deprecated |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `arcgis-placement` component                      | Use the [`slot`](xref://site.javascript/building-your-ui/#slots) attribute directly on a component or element instead.                                                 | 4.34               |
| `position` attribute                              | Use [`slot`](xref://site.javascript/building-your-ui/#slots) instead.                                                                                                  | 4.34               |
| `Expand.focusTrapEnabled`                         | Use [`focusTrapDisabled`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-expand/#focusTrapDisabled) instead.                         | 4.33               |
| `Feature.hideContentAttachments` property         | Use the [`hideAttachmentsContent`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideAttachmentsContent) property instead. | 4.34               |
| `Feature.hideContentExpression` property          | Use the [`hideContentExpression`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideContentExpression) property instead.   | 4.34               |
| `Feature.hideContentFields` property              | Use the [`hideFieldsContent`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideFieldsContent) property instead.           | 4.34               |
| `Feature.hideContentMedia` property               | Use the [`hideMediaContent`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideMediaContent) property instead.             | 4.34               |
| `Feature.hideContentText` property                | Use the [`hideTextContent`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideTextContent) property instead.               | 4.34               |
| `Feature.hideLastEditInfo` property               | Use the [`hideLastEditedInfo`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideLastEditedInfo) property instead.         | 4.33               |
| `Feature.hideTitle` property                      | Use the [`hideHeading`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/#hideHeading) property instead.                       | 4.34               |
| `Features.closed` property                        | Use the [`visible`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-features/#visible) property instead.                              | 4.34               |
| `Features.featuresTitle` property                 | Use the [`heading`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-features/#heading) property instead.                              | 4.34               |
| `Legend.respectLayerVisibilityDisabled` property. | Use [`ignoreLayerVisibility`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/#ignoreLayerVisibility) instead.                 | 4.34               |

## Bug fixes and enhancements

- Fixed an issue with the [integrateOperator](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-operators-integrateOperator.html) to allow for the returning of null values that indicate when geometries were removed, e.g. slivers and collapsed close vertices. The use case is to match the number of input geometries with the same number of output values (null or geometry). This will allow users to determine which vertices got removed as a result of the operation.
- Fixed an issue in the [LayerList widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html) where legends for nested [sublayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#sublayers) were not displaying correctly.
- Fixed an issue in the [Legend component](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/) where the `basemapLegendVisible` property was not working as expected.
- Fixed an issue in the [Locate component](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-locate/) where the `goToOverride` function was not being returned.
- Fixed an issue in the [Video Player component](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-video-player/) where the "Settings" string was not being localized.
- Fixed a memory leak in the [geodeticAreaOperator](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-operators-geodeticAreaOperator.html).
- BUG-000174729: Fixed an issue where the [Shadow Cast component](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-shadow-cast/) displays shadows for zero time range in "Area above threshold" visualization.
- BUG-000176880: Fixed the loading order of the [IntegratedMeshLayer](/api-reference/esri-layers-IntegratedMeshLayer.html) when its elevation differs from terrain elevation.
- BUG-000173701: Fixed an issue where rendering large features in client-side [FeatureLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#source) resulted in poor performance.

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.34 and earlier, additional information is available in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecations).

### core API deprecations

<details>
  <summary>Click to expand the complete list</summary>

The following are deprecated and will be removed in a future release:

- Accessor.watch deprecated since version 4.32. Use reactiveUtils.watch instead.
- geometry deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- Circle.centroid deprecated since 4.34. Please use centroidOperator.execute() instead.
- Circle.isSelfIntersecting deprecated since 4.33. Please use simplifyOperator.isSimple() instead.
- geometryEngine deprecated since version 4.32. Use geometry operators instead.
- geometryEngine.buffer deprecated since 4.32. Use bufferOperator instead.
- geometryEngine.clip deprecated since version 4.32. Use clipOperator instead.
- geometryEngine.contains deprecated since version 4.32. Use containsOperator instead.
- geometryEngine.convexHull deprecated since version 4.32. Use convexHullOperator instead.
- geometryEngine.crosses deprecated since version 4.32. Use crossesOperator instead.
- geometryEngine.cut deprecated since version 4.32. Use cutOperator instead.
- geometryEngine.densify deprecated since 4.32. Use densifyOperator instead.
- geometryEngine.difference deprecated since version 4.32. Use differenceOperator instead.
- geometryEngine.disjoint deprecated since version 4.32. Use disjointOperator instead.
- geometryEngine.distance deprecated since version 4.32. Use distanceOperator instead.
- geometryEngine.equals deprecated since version 4.32. Use equalsOperator instead.
- geometryEngine.extendedSpatialReferenceInfo deprecated since version 4.32.
- geometryEngine.flipHorizontal deprecated since 4.32. Use Transformation's flipY() method and the affineTransformationOperator instead.
- geometryEngine.flipVertical deprecated since 4.32. Use Transformation's flipX() method and the affineTransformationOperator instead.
- geometryEngine.generalize deprecated since 4.32. Use generalizeOperator instead.
- geometryEngine.geodesicArea deprecated since 4.32. Use geodeticAreaOperator instead.
- geometryEngine.geodesicBuffer deprecated since 4.32. Use geodesicBufferOperator instead.
- geometryEngine.geodesicDensify deprecated since 4.32. Use geodeticDensifyOperator instead.
- geometryEngine.geodesicLength deprecated since 4.32. Use geodeticLengthOperator instead.
- geometryEngine.intersect deprecated since version 4.32. Use intersectionOperator instead.
- geometryEngine.intersectLinesToPoints deprecated since 4.32. Use intersectionOperator's executeMany() method instead.
- geometryEngine.intersects deprecated since version 4.32. Use intersectsOperator instead.
- geometryEngine.isSimple deprecated since version 4.32. Use simplifyOperator's isSimple() method instead.
- geometryEngine.nearestCoordinate deprecated since 4.32. Use proximityOperator's getNearestCoordinate() method instead.
- geometryEngine.nearestVertex deprecated since 4.32. Use proximityOperator's getNearestVertex() method instead.
- geometryEngine.nearestVertices deprecated since 4.32. Use proximityOperator's getNearestVertices() method instead.
- geometryEngine.offset deprecated since 4.32. Use offsetOperator instead.
- geometryEngine.overlaps deprecated since version 4.32. Use overlapsOperator instead.
- geometryEngine.planarArea deprecated since 4.32. Use areaOperator instead.
- geometryEngine.planarLength deprecated since 4.32. Use lengthOperator instead.
- geometryEngine.relate deprecated since version 4.32. Use relateOperator instead.
- geometryEngine.rotate deprecated since 4.32. Use Transformation's rotate() method and the affineTransformationOperator instead.
- geometryEngine.simplify deprecated since version 4.32. Use simplifyOperator instead.
- geometryEngine.symmetricDifference deprecated since 4.32. Use symmetricDifferenceOperator instead.
- geometryEngine.touches deprecated since version 4.32. Use touchesOperator instead.
- geometryEngine.union deprecated since 4.32. Use unionOperator instead.
- geometryEngine.within deprecated since version 4.32. Use withinOperator instead.
- geometryEngineAsync deprecated since version 4.32. Use geometry operators instead. You can use the web workers to perform geometry operations in a separate thread, which can improve the performance. Options include using the SDK's worker utility, creating a custom worker, or using a helper library such as Comlink.
- geometryEngineAsync.buffer deprecated since 4.32. Use bufferOperator instead.
- geometryEngineAsync.clip deprecated since version 4.32. clipOperator instead.
- geometryEngineAsync.contains deprecated since version 4.32. Use containsOperator instead.
- geometryEngineAsync.convexHull deprecated since version 4.32. Use convexHullOperator instead.
- geometryEngineAsync.crosses deprecated since version 4.32. Use crossesOperator instead.
- geometryEngineAsync.cut deprecated since version 4.32. Use cutOperator instead.
- geometryEngineAsync.densify deprecated since 4.32. Use densifyOperator instead.
- geometryEngineAsync.difference deprecated since version 4.32. Use differenceOperator instead.
- geometryEngineAsync.disjoint deprecated since version 4.32. Use disjointOperator instead.
- geometryEngineAsync.distance deprecated since version 4.32. Use distanceOperator instead.
- geometryEngineAsync.equals deprecated since version 4.32. Use equalsOperator instead.
- geometryEngineAsync.extendedSpatialReferenceInfo deprecated since version 4.32.
- geometryEngineAsync.flipHorizontal deprecated since 4.32. Use Transformation's flipY() method and the affineTransformationOperator instead.
- geometryEngineAsync.flipVertical deprecated since 4.32. Use Transformation's flipX() method and the affineTransformationOperator instead.
- geometryEngineAsync.generalize deprecated since 4.32. Use generalizeOperator instead.
- geometryEngineAsync.geodesicArea deprecated since 4.32. Use geodeticAreaOperator instead.
- geometryEngineAsync.geodesicBuffer deprecated since 4.32. Use geodesicBufferOperator instead.
- geometryEngineAsync.geodesicDensify deprecated since 4.32. Use geodeticDensifyOperator instead.
- geometryEngineAsync.geodesicLength deprecated since 4.32. Use geodeticLengthOperator instead.
- geometryEngineAsync.intersect deprecated since version 4.32. Use intersectionOperator instead.
- geometryEngineAsync.intersectLinesToPoints deprecated since 4.32. Use intersectionOperator's executeMany() method instead.
- geometryEngineAsync.intersects deprecated since version 4.32. Use intersectsOperator instead.
- geometryEngineAsync.isSimple deprecated since version 4.32. Use simplifyOperator's isSimple() method instead.
- geometryEngineAsync.nearestCoordinate deprecated since 4.32. Use proximityOperator's getNearestCoordinate() method instead.
- geometryEngineAsync.nearestVertex deprecated since 4.32. Use proximityOperator's getNearestVertex() method instead.
- geometryEngineAsync.nearestVertices deprecated since 4.32. Use proximityOperator's getNearestVertices() method instead.
- geometryEngineAsync.offset deprecated since 4.32. Use offsetOperator instead.
- geometryEngineAsync.overlaps deprecated since version 4.32. Use overlapsOperator instead.
- geometryEngineAsync.planarArea deprecated since 4.32. Use areaOperator instead.
- geometryEngineAsync.planarLength deprecated since 4.32. Use lengthOperator instead.
- geometryEngineAsync.relate deprecated since version 4.32. Use relateOperator instead.
- geometryEngineAsync.rotate deprecated since 4.32. Use Transformation's rotate() method and the affineTransformationOperator instead.
- geometryEngineAsync.simplify deprecated since version 4.32. Use simplifyOperator instead.
- geometryEngineAsync.symmetricDifference deprecated since 4.32. Use symmetricDifferenceOperator instead.
- geometryEngineAsync.touches deprecated since version 4.32. Use touchesOperator instead.
- geometryEngineAsync.union deprecated since 4.32. Use unionOperator instead.
- geometryEngineAsync.within deprecated since version 4.32. Use withinOperator instead.
- geometryEngineAsync~SpatialReferenceInfo.SpatialReferenceInfo deprecated since version 4.32.
- geometryEngine~AreaUnits.AreaUnits deprecated since version 4.32. Use AreaUnit instead.
- geometryEngine~LinearUnits.LinearUnits deprecated since version 4.32. Use LengthUnit instead.
- geometryEngine~NearestPointResult.NearestPointResult deprecated since version 4.32. Use proximityOperator's ProximityResult instead.
- geometryEngine~SpatialReferenceInfo.SpatialReferenceInfo deprecated since version 4.32.
- Polygon.centroid deprecated since 4.34. Please use centroidOperator.execute() instead.
- Polygon.isSelfIntersecting deprecated since 4.33. Please use simplifyOperator.isSimple() instead.
- projection deprecated since version 4.32. Use the projectOperator instead.
- projection.getTransformation deprecated since version 4.32. Use the geographicTransformationUtils.getTransformation() method instead.
- projection.getTransformations deprecated since version 4.32. Use the geographicTransformationUtils.getTransformations() method instead.
- projection.isLoaded deprecated since version 4.32. Use the projectOperator.isLoaded() method instead.
- projection.load deprecated since version 4.32. Use the projectOperator.load() method instead.
- projection.project deprecated since version 4.32. Use the projectOperator instead.
- geodesicUtils deprecated since version 4.33. Use geometry operators instead.
- geodesicUtils.geodesicAreas deprecated since version 4.33. Use geodeticAreaOperator instead.
- geodesicUtils.geodesicDensify deprecated since version 4.33. Use geodeticDensifyOperator instead.
- geodesicUtils.geodesicDistance deprecated since version 4.33. Use geodeticUtilsOperator's calculateDistanceAndAzimuth method instead.
- geodesicUtils.geodesicLengths deprecated since version 4.33. Use geodeticLengthOperator instead.
- geodesicUtils.pointFromDistance deprecated since version 4.33. Use geodeticUtilsOperator's pointFromDistance method instead.
- geodesicUtils~GeodesicDistanceResult.GeodesicDistanceResult deprecated since version 4.33. Use geodeticUtilsOperator's CalculateDistanceAndAzimuthResult instead.
- GeographicTransformation deprecated since version 4.32. Use GeographicTransformation instead.
- GeographicTransformation.getInverse deprecated since version 4.32. Use GeographicTransformation's getInverse() method instead.
- GeographicTransformation.steps deprecated since version 4.32. Use GeographicTransformation's steps property instead.
- GeographicTransformationStep deprecated since version 4.32. Use GeographicTransformationStep instead.
- GeographicTransformationStep.getInverse deprecated since version 4.32. Use GeographicTransformationStep's getInverse() method instead.
- GeographicTransformationStep.wkid deprecated since version 4.32. Use the GeographicTransformationStep's wkid property instead.
- GeographicTransformationStep.wkt deprecated since version 4.32. Use the GeographicTransformationStep's wkt property instead.
- meshUtils.georeference deprecated since version 4.30. Use convertVertexSpace instead.
- meshUtils.ungeoreference deprecated since version 4.30. Use convertVertexSpace instead.
- geometry~Extent.Extent deprecated since version 4.32. Import Extent directly instead.
- geometry~Geometry.Geometry deprecated since version 4.32. Use GeometryUnion instead.
- geometry~Multipoint.Multipoint deprecated since version 4.32. Import Multipoint directly instead.
- geometry~Point.Point deprecated since version 4.32. Import Point directly instead.
- geometry~Polygon.Polygon deprecated since version 4.32. Import Polygon directly instead.
- geometry~Polyline.Polyline deprecated since version 4.32. Import Polyline directly instead.
- geometry~SpatialReference.SpatialReference deprecated since version 4.32. Import SpatialReference directly instead.
- BingMapsLayer deprecated since version 4.33.
- ImageryLayer.fetchImage deprecated since version 4.33. Use ImageryLayer.fetchPixels instead.
- pointCloudRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- pointCloudRenderers~PointCloudClassBreaksRenderer.PointCloudClassBreaksRenderer deprecated since version 4.32. Import PointCloudClassBreaksRenderer directly instead.
- pointCloudRenderers~PointCloudRenderer.PointCloudRenderer deprecated since version 4.32. Use PointCloudRendererUnion instead.
- pointCloudRenderers~PointCloudRGBRenderer.PointCloudRGBRenderer deprecated since version 4.32. Import PointCloudRGBRenderer directly instead.
- pointCloudRenderers~PointCloudStretchRenderer.PointCloudStretchRenderer deprecated since version 4.32. Import PointCloudStretchRenderer directly instead.
- pointCloudRenderers~PointCloudUniqueValueRenderer.PointCloudUniqueValueRenderer deprecated since version 4.32. Import PointCloudUniqueValueRenderer directly instead.
- rasterRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- rasterRenderers~ClassBreaksRenderer.ClassBreaksRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
- rasterRenderers~FlowRenderer.FlowRenderer deprecated since version 4.32. Import FlowRenderer directly instead.
- rasterRenderers~RasterColormapRenderer.RasterColormapRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
- rasterRenderers~RasterShadedReliefRenderer.RasterShadedReliefRenderer deprecated since version 4.32. Import RasterShadedReliefRenderer directly instead.
- rasterRenderers~RasterStretchRenderer.RasterStretchRenderer deprecated since version 4.32. Import RasterStretchRenderer directly instead.
- rasterRenderers~UniqueValueRenderer.UniqueValueRenderer deprecated since version 4.32. Import UniqueValueRenderer directly instead.
- rasterRenderers~VectorFieldRenderer.VectorFieldRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
- renderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- renderers~ClassBreaksRenderer.ClassBreaksRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
- renderers~DictionaryRenderer.DictionaryRenderer deprecated since version 4.32. Import DictionaryRenderer directly instead.
- renderers~DotDensityRenderer.DotDensityRenderer deprecated since version 4.32. Import DotDensityRenderer directly instead.
- renderers~HeatmapRenderer.HeatmapRenderer deprecated since version 4.32. Import HeatmapRenderer directly instead.
- renderers~PieChartRenderer.PieChartRenderer deprecated since version 4.32. Import PieChartRenderer directly instead.
- renderers~Renderer.Renderer deprecated since version 4.32. Use RendererUnion instead.
- renderers~RendererWithVisualVariables.RendererWithVisualVariables deprecated since version 4.32. Use RendererWithVisualVariablesUnion instead.
- renderers~SimpleRenderer.SimpleRenderer deprecated since version 4.32. Import SimpleRenderer directly instead.
- renderers~UniqueValueRenderer.UniqueValueRenderer deprecated since version 4.32. Import UniqueValueRenderer directly instead.
- symbols deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
- WebStyleSymbol.fetchCIMSymbol deprecated since version 4.33. Use fetchSymbol instead. Pass { acceptedFormats: ["cim"] } as options to fetchSymbol to retrieve only CIM symbols.
- symbols~CIMSymbol.CIMSymbol deprecated since version 4.32. Import CIMSymbol directly instead.
- symbols~ExtrudeSymbol3DLayer.ExtrudeSymbol3DLayer deprecated since version 4.32. Import ExtrudeSymbol3DLayer directly instead.
- symbols~FillSymbol.FillSymbol deprecated since version 4.32. Use FillSymbol2DUnion instead.
- symbols~FillSymbol3DLayer.FillSymbol3DLayer deprecated since version 4.32. Import FillSymbol3DLayer directly instead.
- symbols~Font.Font deprecated since version 4.32. Import Font directly instead.
- symbols~IconSymbol3DLayer.IconSymbol3DLayer deprecated since version 4.32. Import IconSymbol3DLayer directly instead.
- symbols~LabelSymbol3D.LabelSymbol3D deprecated since version 4.32. Import LabelSymbol3D directly instead.
- symbols~LineSymbol3D.LineSymbol3D deprecated since version 4.32. Import LineSymbol3D directly instead.
- symbols~LineSymbol3DLayer.LineSymbol3DLayer deprecated since version 4.32. Import LineSymbol3DLayer directly instead.
- symbols~MarkerSymbol.MarkerSymbol deprecated since version 4.32. Use MarkerSymbol2DUnion instead.
- symbols~MeshSymbol3D.MeshSymbol3D deprecated since version 4.32. Import MeshSymbol3D directly instead.
- symbols~ObjectSymbol3DLayer.ObjectSymbol3DLayer deprecated since version 4.32. Import ObjectSymbol3DLayer directly instead.
- symbols~PathSymbol3DLayer.PathSymbol3DLayer deprecated since version 4.32. Import PathSymbol3DLayer directly instead.
- symbols~PictureFillSymbol.PictureFillSymbol deprecated since version 4.32. Import PictureFillSymbol directly instead.
- symbols~PictureMarkerSymbol.PictureMarkerSymbol deprecated since version 4.32. Import PictureMarkerSymbol directly instead.
- symbols~PointSymbol3D.PointSymbol3D deprecated since version 4.32. Import PointSymbol3D directly instead.
- symbols~PolygonSymbol3D.PolygonSymbol3D deprecated since version 4.32. Import PolygonSymbol3D directly instead.
- symbols~SimpleFillSymbol.SimpleFillSymbol deprecated since version 4.32. Import SimpleFillSymbol directly instead.
- symbols~SimpleLineSymbol.SimpleLineSymbol deprecated since version 4.32. Import SimpleLineSymbol directly instead.
- symbols~SimpleMarkerSymbol.SimpleMarkerSymbol deprecated since version 4.32. Import SimpleMarkerSymbol directly instead.
- symbols~Symbol.Symbol deprecated since version 4.32. Use SymbolUnion instead.
- symbols~Symbol2D.Symbol2D deprecated since version 4.32. Use Symbol2DUnion instead.
- symbols~Symbol2D3D.Symbol2D3D deprecated since version 4.32. Use Symbol2D3DUnion instead.
- symbols~Symbol3D.Symbol3D deprecated since version 4.32. Use Symbol3DUnion instead.
- symbols~Symbol3DLayer.Symbol3DLayer deprecated since version 4.32. Use Symbol3DLayerUnion instead.
- symbols~TextSymbol.TextSymbol deprecated since version 4.32. Import TextSymbol directly instead.
- symbols~TextSymbol3DLayer.TextSymbol3DLayer deprecated since version 4.32. Import TextSymbol3DLayer directly instead.
- symbols~WaterSymbol3DLayer.WaterSymbol3DLayer deprecated since version 4.32. Import WaterSymbol3DLayer directly instead.
- symbols~WebStyleSymbol.WebStyleSymbol deprecated since version 4.32. Import WebStyleSymbol directly instead.
- elements~AttributeTableAttachmentElement.AttributeTableAttachmentElement deprecated since version 4.34. Import AttributeTableAttachmentElement directly instead.
- elements~AttributeTableElement.AttributeTableElement deprecated since version 4.34. Import individual element modules directly instead.
- elements~AttributeTableFieldElement.AttributeTableFieldElement deprecated since version 4.34. Import AttributeTableFieldElement directly instead.
- elements~AttributeTableGroupElement.AttributeTableGroupElement deprecated since version 4.34. Import AttributeTableGroupElement directly instead.
- elements~AttributeTableRelationshipElement.AttributeTableRelationshipElement deprecated since version 4.34. Import AttributeTableRelationshipElement directly instead.
- CatalogFootprintLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- CSVLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- FeatureLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- GeoJSONLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- GraphicsLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- HighlightLayerViewMixin.highlightOptions.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- ImageryLayerView.highlightOptions.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- OGCFeatureLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- ParquetLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- StreamLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- WFSLayerView.highlightOptions deprecated since version 4.34. Use the View.highlights property instead.
- LinkChartView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- MapView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- Navigation.mouseWheelZoomEnabled deprecated since version 4.32. Use actionMap.mouseWheel instead.
- SceneView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- View2D.highlightOptions deprecated since version 4.32. Use the highlights property instead.
- AreaMeasurement3D deprecated since 4.33. Use the Area Measurement 3D component instead. For information on widget deprecation, read about Esri's move to web components.
- AreaMeasurement3DViewModel deprecated since 4.33. Use the Area Measurement 3D component or AreaMeasurementAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- BasemapGallery deprecated since 4.32. Use the Basemap Gallery component instead. For information on widget deprecation, read about Esri's move to web components.
- BasemapToggle deprecated since 4.32. Use the Basemap Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- Bookmarks deprecated since 4.34. Use the Bookmarks component instead. For information on widget deprecation, read about Esri's move to web components.
- Compass deprecated since 4.32. Use the Compass component instead. For information on widget deprecation, read about Esri's move to web components.
- CoordinateConversion deprecated since 4.34. Use the CoordinateConversion component instead. For information on widget deprecation, read about Esri's move to web components.
- Daylight deprecated since 4.34. Use the Daylight component instead. For information on widget deprecation, read about Esri's move to web components.
- DaylightViewModel deprecated since 4.34. Use the Daylight component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectionalPad deprecated since 4.32. Use the Directional Pad component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectLineMeasurement3D deprecated since 4.33. Use the Direct Line Measurement 3D component instead. For information on widget deprecation, read about Esri's move to web components.
- DirectLineMeasurement3DViewModel deprecated since 4.33. Use the Direct Line Measurement 3D component or DirectLineMeasurementAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- Editor.deleteFeatureFromWorkflow deprecated since version 4.33. Use deleteFeatures instead.
- EditorViewModel.deleteFeatureFromWorkflow deprecated since version 4.33. Use deleteFeatures instead.
- UpdateFeaturesWorkflowData.features deprecated since version 4.34. Refer to featureInfos instead.
- Expand deprecated since 4.34. Use the Expand component instead. For information on widget deprecation, read about Esri's move to web components.
- Feature deprecated since 4.34. Use the Feature component instead. For information on widget deprecation, read about Esri's move to web components.
- Features deprecated since 4.34. Use the Features component instead. For information on widget deprecation, read about Esri's move to web components.
- FeatureTable.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTable.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FeatureTableViewModel.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds() instead.
- FeatureTableViewModel.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
- FieldColumn.name deprecated since version 4.30, use FieldColumn.fieldName instead.
- Fullscreen deprecated since 4.32. Use the Fullscreen component instead. For information on widget deprecation, read about Esri's move to web components.
- FullscreenViewModel deprecated since 4.33. Use the JavaScript Fullscreen API directly instead.
- Home deprecated since 4.32. Use the Home component instead. For information on widget deprecation, read about Esri's move to web components.
- Legend deprecated since 4.34. Use the Legend component instead. For information on widget deprecation, read about Esri's move to web components.
- LineOfSight deprecated since 4.33. Use the Line Of Sight component instead. For information on widget deprecation, read about Esri's move to web components.
- LineOfSightTarget deprecated since 4.33. Use the LineOfSightAnalysisTarget on LineOfSightAnalysis instead.
- LineOfSightViewModel deprecated since 4.33. Use the Line Of Sight component or LineOfSightAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- Locate deprecated since 4.32. Use the Locate component instead. For information on widget deprecation, read about Esri's move to web components.
- LocateViewModel deprecated since 4.34. Use the Locate component instead. For information on widget deprecation, read about Esri's move to web components.
- NavigationToggle deprecated since 4.32. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- NavigationToggleViewModel deprecated since 4.33. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
- Print deprecated since 4.33. Use the Print component instead. For information on widget deprecation, read about Esri's move to web components.
- ScaleBar deprecated since 4.32. Use the Scale Bar component instead. For information on widget deprecation, read about Esri's move to web components.
- Search deprecated since 4.33. Use the Search component instead. For information on widget deprecation, read about Esri's move to web components.
- Slice deprecated since 4.33. Use the Slice component instead. For information on widget deprecation, read about Esri's move to web components.
- SliceViewModel deprecated since 4.33. Use the Slice component or SliceAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
- GridControls deprecated since 4.33. Use the Grid Controls component instead. For information on widget deprecation, read about Esri's move to web components.
- Swipe deprecated since 4.32. Use the Swipe component instead. For information on widget deprecation, read about Esri's move to web components.
- TimeZoneLabel deprecated since 4.33. Use the Time Zone Label component instead. For information on widget deprecation, read about Esri's move to web components.
- Track deprecated since 4.32. Use the Track component instead. For information on widget deprecation, read about Esri's move to web components.
- VideoPlayer deprecated since 4.33. Use the Video Player component instead. For information on widget deprecation, read about Esri's move to web components.
- Weather deprecated since 4.33. Use the Weather component instead. For information on widget deprecation, read about Esri's move to web components.
- WeatherViewModel deprecated since 4.33. Use the Weather component instead. For information on widget deprecation, read about Esri's move to web components.
- Zoom deprecated since 4.32. Use the Zoom component instead. For information on widget deprecation, read about Esri's move to web components.

BELOW ARE THE MANUALLY ADDED DEPRECATED CLASSES, PROPERTIES, METHODS, EVENTS

- The "connectivity" possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use "junction-junction-connectivity" instead.
- The following named easing presets on GoToOptions3D presets are deprecated at 4.33: in-cubic, out-cubic, in-out-cubic, in-expo, out-expo, in-out-expo, and in-out-coast-quad. Please use cubic-in, cubic-out, cubic-in-out, expo-in, expo-out, expo-in-out, and quad-in-out-coast instead.

</details>

### Map components deprecations

<details>
  <summary>Click to expand the complete list</summary>

- The addLayer method on the Link Chart, Map, and Scene components is deprecated since 4.33. Use element.map.add(layer) instead.
- The addLayers method on the Link Chart, Map, and Scene components is deprecated since 4.33. Use element.map.addMany([layer]) instead.
- The addTable method on the Map and Scene is deprecated since 4.33. Use element.map.tables.add(table) instead.
- The addTables method on the Map and Scene is deprecated since 4.33. Use element.map.tables.addMany([table]) instead.
- The arcgis-directline-measurement-3d component is deprecated since 4.33. Use arcgis-direct-line-measurement-3d instead.
- The arcgis-placement component is deprecated since 4.34. Use the slot attribute directly on a component or element instead.
- The closed property on the Features component is deprecated since 4.34. Use visible instead.
- The featuresTitle property on the Features component is deprecated since 4.34. Use heading instead.
- The focusTrapEnabled property on the Expand component is deprecated since 4.33. Use focusTrapDisabled instead.
- The hideContentAttachments property on the Feature component is deprecated since 4.34. Use hideAttachmentsContent instead.
- The hideContentExpression property on the Feature component is deprecated since 4.34. Use hideExpressionContent instead.
- The hideContentFields property on the Feature component is deprecated since 4.34. Use hideFieldsContent instead.
- The hideContentMedia property on the Feature component is deprecated since 4.34. Use hideMediaContent instead.
- The hideContentText property on the Feature component is deprecated since 4.34. Use hideTextContent instead.
- The hideLastEditInfo property on the Feature component is deprecated since 4.33. Use hideLastEditedInfo instead.
- The hideTitle property on the Feature component is deprecated since 4.34. Use hideHeading instead.
- The highlightOptions property on the Map and Scene is deprecated since 4.33. Use highlights instead.
- The position property on all map components is deprecated since 4.34. Use slot instead.
- The respectLayerVisibilityDisabled property on the Legend component is deprecated since 4.34. Use ignoreLayerVisibility instead.
- The visibleElementsConnectivityAssociationsSettingsArrowsToggle property on the Utility Network Associations component is deprecated since 4.32, use showConnectivityAssociationsSettingsArrowsToggle instead.
- The visibleElementsConnectivityAssociationsSettingsCapSelect property on the Utility Network Associations component is deprecated since 4.32, use showConnectivityAssociationsSettingsCapSelect instead.
- The visibleElementsConnectivityAssociationsSettingsColorPicker property on the Utility Network Associations component is deprecated since 4.32, use hideConnectivityAssociationsSettingsColorPicker instead.
- The visibleElementsConnectivityAssociationsSettingsStylePicker property on the Utility Network Associations component is deprecated since 4.32, use hideConnectivityAssociationsSettingsStylePicker instead.
- The visibleElementsConnectivityAssociationsSettingsWidthInput property on the Utility Network Associations component is deprecated since 4.32, use hideConnectivityAssociationsSettingsWidthInput instead.
- The visibleElementsMaxAllowableAssociationsSlider property on the Utility Network Associations component is deprecated since 4.32, use showMaxAllowableAssociationsSlider instead.
- The visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle property on the Utility Network Associations component is deprecated since 4.32, use showStructuralAttachmentAssociationsSettingsArrowsToggle instead.
- The visibleElementsStructuralAttachmentAssociationsSettingsCapSelect property on the Utility Network Associations component is deprecated since 4.32, use showStructuralAttachmentAssociationsSettingsCapSelect instead.
- The visibleElementsStructuralAttachmentAssociationsSettingsColorPicker property on the Utility Network Associations component is deprecated since 4.32, use hideStructuralAttachmentAssociationsSettingsColorPicker instead.
- The visibleElementsStructuralAttachmentAssociationsSettingsStylePicker property on the Utility Network Associations component is deprecated since 4.32, use hideStructuralAttachmentAssociationsSettingsStylePicker instead.
- The visibleElementsStructuralAttachmentAssociationsSettingsWidthInput property on the Utility Network Associations component is deprecated since 4.32, use hideStructuralAttachmentAssociationsSettingsWidthInput instead.

</details>

### Charts components deprecations
