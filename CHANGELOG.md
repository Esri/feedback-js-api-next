# Change log

The `next` version of 4.34 is now available. Planned release date is October 2025.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Component and widget updates

## Breaking Changes

## Bug fixes and enhancements

## Deprecations

The following are deprecated and will be removed in a future release. For anything deprecated in 4.32 and earlier, additional information and links are in the [release notes](https://developers.arcgis.com/javascript/latest/release-notes/#deprecated-classes-properties-methods-events).

<details>
  <summary>Click to expand the complete list</summary>

The following are deprecated and will be removed in a future release:

-	Accessor.watch deprecated since version 4.32. Use reactiveUtils.watch instead.
-	geometry deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
-	Circle.isSelfIntersecting deprecated since 4.33. Please use simplifyOperator.isSimple() instead.
-	geometryEngine deprecated since version 4.32. Use geometry operators instead.
-	geometryEngine.buffer deprecated since 4.32. Use bufferOperator instead.
-	geometryEngine.clip deprecated since version 4.32. Use clipOperator instead.
-	geometryEngine.contains deprecated since version 4.32. Use containsOperator instead.
-	geometryEngine.convexHull deprecated since version 4.32. Use convexHullOperator instead.
-	geometryEngine.crosses deprecated since version 4.32. Use crossesOperator instead.
-	geometryEngine.cut deprecated since version 4.32. Use cutOperator instead.
-	geometryEngine.densify deprecated since 4.32. Use densifyOperator instead.
-	geometryEngine.difference deprecated since version 4.32. Use differenceOperator instead.
-	geometryEngine.disjoint deprecated since version 4.32. Use disjointOperator instead.
-	geometryEngine.distance deprecated since version 4.32. Use distanceOperator instead.
-	geometryEngine.equals deprecated since version 4.32. Use equalsOperator instead.
-	geometryEngine.extendedSpatialReferenceInfo deprecated since version 4.32.
-	geometryEngine.flipHorizontal deprecated since 4.32. Use Transformation's flipY() method and the affineTransformationOperator instead.
-	geometryEngine.flipVertical deprecated since 4.32. Use Transformation's flipX() method and the affineTransformationOperator instead.
-	geometryEngine.generalize deprecated since 4.32. Use generalizeOperator instead.
-	geometryEngine.geodesicArea deprecated since 4.32. Use geodeticAreaOperator instead.
-	geometryEngine.geodesicBuffer deprecated since 4.32. Use geodesicBufferOperator instead.
-	geometryEngine.geodesicDensify deprecated since 4.32. Use geodeticDensifyOperator instead.
-	geometryEngine.geodesicLength deprecated since 4.32. Use geodeticLengthOperator instead.
-	geometryEngine.intersect deprecated since version 4.32. Use intersectionOperator instead.
-	geometryEngine.intersectLinesToPoints deprecated since 4.32. Use intersectionOperator's executeMany() method instead.
-	geometryEngine.intersects deprecated since version 4.32. Use intersectsOperator instead.
-	geometryEngine.isSimple deprecated since version 4.32. Use simplifyOperator's isSimple() method instead.
-	geometryEngine.nearestCoordinate deprecated since 4.32. Use proximityOperator's getNearestCoordinate() method instead.
-	geometryEngine.nearestVertex deprecated since 4.32. Use proximityOperator's getNearestVertex() method instead.
-	geometryEngine.nearestVertices deprecated since 4.32. Use proximityOperator's getNearestVertices() method instead.
-	geometryEngine.offset deprecated since 4.32. Use offsetOperator instead.
-	geometryEngine.overlaps deprecated since version 4.32. Use overlapsOperator instead.
-	geometryEngine.planarArea deprecated since 4.32. Use areaOperator instead.
-	geometryEngine.planarLength deprecated since 4.32. Use lengthOperator instead.
-	geometryEngine.relate deprecated since version 4.32. Use relateOperator instead.
-	geometryEngine.rotate deprecated since 4.32. Use Transformation's rotate() method and the affineTransformationOperator instead.
-	geometryEngine.simplify deprecated since version 4.32. Use simplifyOperator instead.
-	geometryEngine.symmetricDifference deprecated since 4.32. Use symmetricDifferenceOperator instead.
-	geometryEngine.touches deprecated since version 4.32. Use touchesOperator instead.
-	geometryEngine.union deprecated since 4.32. Use unionOperator instead.
-	geometryEngine.within deprecated since version 4.32. Use withinOperator instead.
-	geometryEngineAsync deprecated since version 4.32. Use geometry operators instead. You can use the web workers to perform geometry operations in a separate thread, which can improve the performance. Options include using the SDK's worker utility, creating a custom worker, or using a helper library such as Comlink.
-	geometryEngineAsync.buffer deprecated since 4.32. Use bufferOperator instead.
-	geometryEngineAsync.clip deprecated since version 4.32. clipOperator instead.
-	geometryEngineAsync.contains deprecated since version 4.32. Use containsOperator instead.
-	geometryEngineAsync.convexHull deprecated since version 4.32. Use convexHullOperator instead.
-	geometryEngineAsync.crosses deprecated since version 4.32. Use crossesOperator instead.
-	geometryEngineAsync.cut deprecated since version 4.32. Use cutOperator instead.
-	geometryEngineAsync.densify deprecated since 4.32. Use densifyOperator instead.
-	geometryEngineAsync.difference deprecated since version 4.32. Use differenceOperator instead.
-	geometryEngineAsync.disjoint deprecated since version 4.32. Use disjointOperator instead.
-	geometryEngineAsync.distance deprecated since version 4.32. Use distanceOperator instead.
-	geometryEngineAsync.equals deprecated since version 4.32. Use equalsOperator instead.
-	geometryEngineAsync.extendedSpatialReferenceInfo deprecated since version 4.32.
-	geometryEngineAsync.flipHorizontal deprecated since 4.32. Use Transformation's flipY() method and the affineTransformationOperator instead.
-	geometryEngineAsync.flipVertical deprecated since 4.32. Use Transformation's flipX() method and the affineTransformationOperator instead.
-	geometryEngineAsync.generalize deprecated since 4.32. Use generalizeOperator instead.
-	geometryEngineAsync.geodesicArea deprecated since 4.32. Use geodeticAreaOperator instead.
-	geometryEngineAsync.geodesicBuffer deprecated since 4.32. Use geodesicBufferOperator instead.
-	geometryEngineAsync.geodesicDensify deprecated since 4.32. Use geodeticDensifyOperator instead.
-	geometryEngineAsync.geodesicLength deprecated since 4.32. Use geodeticLengthOperator instead.
-	geometryEngineAsync.intersect deprecated since version 4.32. Use intersectionOperator instead.
-	geometryEngineAsync.intersectLinesToPoints deprecated since 4.32. Use intersectionOperator's executeMany() method instead.
-	geometryEngineAsync.intersects deprecated since version 4.32. Use intersectsOperator instead.
-	geometryEngineAsync.isSimple deprecated since version 4.32. Use simplifyOperator's isSimple() method instead.
-	geometryEngineAsync.nearestCoordinate deprecated since 4.32. Use proximityOperator's getNearestCoordinate() method instead.
-	geometryEngineAsync.nearestVertex deprecated since 4.32. Use proximityOperator's getNearestVertex() method instead.
-	geometryEngineAsync.nearestVertices deprecated since 4.32. Use proximityOperator's getNearestVertices() method instead.
-	geometryEngineAsync.offset deprecated since 4.32. Use offsetOperator instead.
-	geometryEngineAsync.overlaps deprecated since version 4.32. Use overlapsOperator instead.
-	geometryEngineAsync.planarArea deprecated since 4.32. Use areaOperator instead.
-	geometryEngineAsync.planarLength deprecated since 4.32. Use lengthOperator instead.
-	geometryEngineAsync.relate deprecated since version 4.32. Use relateOperator instead.
-	geometryEngineAsync.rotate deprecated since 4.32. Use Transformation's rotate() method and the affineTransformationOperator instead.
-	geometryEngineAsync.simplify deprecated since version 4.32. Use simplifyOperator instead.
-	geometryEngineAsync.symmetricDifference deprecated since 4.32. Use symmetricDifferenceOperator instead.
-	geometryEngineAsync.touches deprecated since version 4.32. Use touchesOperator instead.
-	geometryEngineAsync.union deprecated since 4.32. Use unionOperator instead.
-	geometryEngineAsync.within deprecated since version 4.32. Use withinOperator instead.
-	geometryEngineAsync~SpatialReferenceInfo.SpatialReferenceInfo deprecated since version 4.32.
-	geometryEngine~AreaUnits.AreaUnits deprecated since version 4.32. Use AreaUnit instead.
-	geometryEngine~LinearUnits.LinearUnits deprecated since version 4.32. Use LengthUnit instead.
-	geometryEngine~NearestPointResult.NearestPointResult deprecated since version 4.32. Use proximityOperator's ProximityResult instead.
-	geometryEngine~SpatialReferenceInfo.SpatialReferenceInfo deprecated since version 4.32.
-	Polygon.isSelfIntersecting deprecated since 4.33. Please use simplifyOperator.isSimple() instead.
-	projection deprecated since version 4.32. Use the projectOperator instead.
-	projection.getTransformation deprecated since version 4.32. Use the geographicTransformationUtils.getTransformation() method instead.
-	projection.getTransformations deprecated since version 4.32. Use the geographicTransformationUtils.getTransformations() method instead.
-	projection.isLoaded deprecated since version 4.32. Use the projectOperator.isLoaded() method instead.
-	projection.load deprecated since version 4.32. Use the projectOperator.load() method instead.
-	projection.project deprecated since version 4.32. Use the projectOperator instead.
-	geodesicUtils deprecated since version 4.33. Use geometry operators instead.
-	geodesicUtils.geodesicAreas deprecated since version 4.33. Use geodeticAreaOperator instead.
-	geodesicUtils.geodesicDensify deprecated since version 4.33. Use geodeticDensifyOperator instead.
-	geodesicUtils.geodesicDistance deprecated since version 4.33. Use geodeticDistanceOperator instead.
-	geodesicUtils.geodesicLengths deprecated since version 4.33. Use geodeticLengthOperator instead.
-	geodesicUtils.pointFromDistance deprecated since version 4.33.
-	GeographicTransformation deprecated since version 4.32. Use GeographicTransformation instead.
-	GeographicTransformation.getInverse deprecated since version 4.32. Use GeographicTransformation's getInverse() method instead.
-	GeographicTransformation.steps deprecated since version 4.32. Use GeographicTransformation's steps property instead.
-	GeographicTransformationStep deprecated since version 4.32. Use GeographicTransformationStep instead.
-	GeographicTransformationStep.getInverse deprecated since version 4.32. Use GeographicTransformationStep's getInverse() method instead.
-	GeographicTransformationStep.wkid deprecated since version 4.32. Use the GeographicTransformationStep's wkid property instead.
-	GeographicTransformationStep.wkt deprecated since version 4.32. Use the GeographicTransformationStep's wkt property instead.
-	meshUtils.georeference deprecated since version 4.30. Use convertVertexSpace instead.
-	meshUtils.ungeoreference deprecated since version 4.30. Use convertVertexSpace instead.
-	geometry~Extent.Extent deprecated since version 4.32. Import Extent directly instead.
-	geometry~Geometry.Geometry deprecated since version 4.32. Use GeometryUnion instead.
-	geometry~Multipoint.Multipoint deprecated since version 4.32. Import Multipoint directly instead.
-	geometry~Point.Point deprecated since version 4.32. Import Point directly instead.
-	geometry~Polygon.Polygon deprecated since version 4.32. Import Polygon directly instead.
-	geometry~Polyline.Polyline deprecated since version 4.32. Import Polyline directly instead.
-	geometry~SpatialReference.SpatialReference deprecated since version 4.32. Import SpatialReference directly instead.
-	BingMapsLayer deprecated since version 4.33.
-	ImageryLayer.fetchImage deprecated since version 4.33. Use ImageryLayer.fetchPixels instead.
-	pointCloudRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
-	pointCloudRenderers~PointCloudClassBreaksRenderer.PointCloudClassBreaksRenderer deprecated since version 4.32. Import PointCloudClassBreaksRenderer directly instead.
-	pointCloudRenderers~PointCloudRenderer.PointCloudRenderer deprecated since version 4.32. Use PointCloudRendererUnion instead.
-	pointCloudRenderers~PointCloudRGBRenderer.PointCloudRGBRenderer deprecated since version 4.32. Import PointCloudRGBRenderer directly instead.
-	pointCloudRenderers~PointCloudStretchRenderer.PointCloudStretchRenderer deprecated since version 4.32. Import PointCloudStretchRenderer directly instead.
-	pointCloudRenderers~PointCloudUniqueValueRenderer.PointCloudUniqueValueRenderer deprecated since version 4.32. Import PointCloudUniqueValueRenderer directly instead.
-	rasterRenderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
-	rasterRenderers~ClassBreaksRenderer.ClassBreaksRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
-	rasterRenderers~FlowRenderer.FlowRenderer deprecated since version 4.32. Import FlowRenderer directly instead.
-	rasterRenderers~RasterColormapRenderer.RasterColormapRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
-	rasterRenderers~RasterShadedReliefRenderer.RasterShadedReliefRenderer deprecated since version 4.32. Import RasterShadedReliefRenderer directly instead.
-	rasterRenderers~RasterStretchRenderer.RasterStretchRenderer deprecated since version 4.32. Import RasterStretchRenderer directly instead.
-	rasterRenderers~UniqueValueRenderer.UniqueValueRenderer deprecated since version 4.32. Import UniqueValueRenderer directly instead.
-	rasterRenderers~VectorFieldRenderer.VectorFieldRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
-	renderers deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
-	RasterStretchRenderer.statistics deprecated since version 4.31. Use customStatistics instead.
-	renderers~ClassBreaksRenderer.ClassBreaksRenderer deprecated since version 4.32. Import ClassBreaksRenderer directly instead.
-	renderers~DictionaryRenderer.DictionaryRenderer deprecated since version 4.32. Import DictionaryRenderer directly instead.
-	renderers~DotDensityRenderer.DotDensityRenderer deprecated since version 4.32. Import DotDensityRenderer directly instead.
-	renderers~HeatmapRenderer.HeatmapRenderer deprecated since version 4.32. Import HeatmapRenderer directly instead.
-	renderers~PieChartRenderer.PieChartRenderer deprecated since version 4.32. Import PieChartRenderer directly instead.
-	renderers~Renderer.Renderer deprecated since version 4.32. Use RendererUnion instead.
-	renderers~RendererWithVisualVariables.RendererWithVisualVariables deprecated since version 4.32. Use RendererWithVisualVariablesUnion instead.
-	renderers~SimpleRenderer.SimpleRenderer deprecated since version 4.32. Import SimpleRenderer directly instead.
-	renderers~UniqueValueRenderer.UniqueValueRenderer deprecated since version 4.32. Import UniqueValueRenderer directly instead.
-	symbols deprecated since version 4.32. Use unionTypes to import union types, or individual modules to import classes.
-	WebStyleSymbol.fetchCIMSymbol deprecated since version 4.33. Use fetchSymbol instead. Pass { acceptedFormats: ["cim"] } as options to fetchSymbol to retrieve only CIM symbols.
-	symbols~CIMSymbol.CIMSymbol deprecated since version 4.32. Import CIMSymbol directly instead.
-	symbols~ExtrudeSymbol3DLayer.ExtrudeSymbol3DLayer deprecated since version 4.32. Import ExtrudeSymbol3DLayer directly instead.
-	symbols~FillSymbol.FillSymbol deprecated since version 4.32. Use FillSymbol2DUnion instead.
-	symbols~FillSymbol3DLayer.FillSymbol3DLayer deprecated since version 4.32. Import FillSymbol3DLayer directly instead.
-	symbols~Font.Font deprecated since version 4.32. Import Font directly instead.
-	symbols~IconSymbol3DLayer.IconSymbol3DLayer deprecated since version 4.32. Import IconSymbol3DLayer directly instead.
-	symbols~LabelSymbol3D.LabelSymbol3D deprecated since version 4.32. Import LabelSymbol3D directly instead.
-	symbols~LineSymbol3D.LineSymbol3D deprecated since version 4.32. Import LineSymbol3D directly instead.
-	symbols~LineSymbol3DLayer.LineSymbol3DLayer deprecated since version 4.32. Import LineSymbol3DLayer directly instead.
-	symbols~MarkerSymbol.MarkerSymbol deprecated since version 4.32. Use MarkerSymbol2DUnion instead.
-	symbols~MeshSymbol3D.MeshSymbol3D deprecated since version 4.32. Import MeshSymbol3D directly instead.
-	symbols~ObjectSymbol3DLayer.ObjectSymbol3DLayer deprecated since version 4.32. Import ObjectSymbol3DLayer directly instead.
-	symbols~PathSymbol3DLayer.PathSymbol3DLayer deprecated since version 4.32. Import PathSymbol3DLayer directly instead.
-	symbols~PictureFillSymbol.PictureFillSymbol deprecated since version 4.32. Import PictureFillSymbol directly instead.
-	symbols~PictureMarkerSymbol.PictureMarkerSymbol deprecated since version 4.32. Import PictureMarkerSymbol directly instead.
-	symbols~PointSymbol3D.PointSymbol3D deprecated since version 4.32. Import PointSymbol3D directly instead.
-	symbols~PolygonSymbol3D.PolygonSymbol3D deprecated since version 4.32. Import PolygonSymbol3D directly instead.
-	symbols~SimpleFillSymbol.SimpleFillSymbol deprecated since version 4.32. Import SimpleFillSymbol directly instead.
-	symbols~SimpleLineSymbol.SimpleLineSymbol deprecated since version 4.32. Import SimpleLineSymbol directly instead.
-	symbols~SimpleMarkerSymbol.SimpleMarkerSymbol deprecated since version 4.32. Import SimpleMarkerSymbol directly instead.
-	symbols~Symbol.Symbol deprecated since version 4.32. Use SymbolUnion instead.
-	symbols~Symbol2D.Symbol2D deprecated since version 4.32. Use Symbol2DUnion instead.
-	symbols~Symbol2D3D.Symbol2D3D deprecated since version 4.32. Use Symbol2D3DUnion instead.
-	symbols~Symbol3D.Symbol3D deprecated since version 4.32. Use Symbol3DUnion instead.
-	symbols~Symbol3DLayer.Symbol3DLayer deprecated since version 4.32. Use Symbol3DLayerUnion instead.
-	symbols~TextSymbol.TextSymbol deprecated since version 4.32. Import TextSymbol directly instead.
-	symbols~TextSymbol3DLayer.TextSymbol3DLayer deprecated since version 4.32. Import TextSymbol3DLayer directly instead.
-	symbols~WaterSymbol3DLayer.WaterSymbol3DLayer deprecated since version 4.32. Import WaterSymbol3DLayer directly instead.
-	symbols~WebStyleSymbol.WebStyleSymbol deprecated since version 4.32. Import WebStyleSymbol directly instead.
-	TimeExtent deprecated since version 4.31. Use TimeExtent instead.
-	TimeInterval deprecated since version 4.31. Use TimeInterval instead.
-	LinkChartView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
-	MapView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
-	Navigation.mouseWheelZoomEnabled deprecated since version 4.32. Use actionMap.mouseWheel instead.
-	SceneView.highlightOptions deprecated since version 4.32. Use the highlights property instead.
-	View2D.highlightOptions deprecated since version 4.32. Use the highlights property instead.
-	AreaMeasurement3D deprecated since 4.33. Use the Area Measurement 3D component instead. For information on widget deprecation, read about Esri's move to web components.
-	AreaMeasurement3DViewModel deprecated since 4.33. Use the Area Measurement 3D component or AreaMeasurementAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
-	BasemapGallery deprecated since 4.32. Use the Basemap Gallery component instead. For information on widget deprecation, read about Esri's move to web components.
-	BasemapToggle deprecated since 4.32. Use the Basemap Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
-	Compass deprecated since 4.32. Use the Compass component instead. For information on widget deprecation, read about Esri's move to web components.
-	DirectionalPad deprecated since 4.32. Use the Directional Pad component instead. For information on widget deprecation, read about Esri's move to web components.
-	DirectLineMeasurement3D deprecated since 4.33. Use the Direct Line Measurement 3D component instead. For information on widget deprecation, read about Esri's move to web components.
-	DirectLineMeasurement3DViewModel deprecated since 4.33. Use the Direct Line Measurement 3D component or DirectLineMeasurementAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
-	Editor.deleteFeatureFromWorkflow deprecated since version 4.33. Use deleteFeatures instead.
-	EditorViewModel.deleteFeatureFromWorkflow deprecated since version 4.33. Use deleteFeatures instead.
-	FeatureTable.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
-	FeatureTable.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
-	FeatureTableViewModel.clearSelectionFilter deprecated since version 4.30. Use filterBySelectionEnabled or objectIds() instead.
-	FeatureTableViewModel.filterBySelection deprecated since version 4.30. Use filterBySelectionEnabled or objectIds instead.
-	FieldColumn.name deprecated since version 4.30, use FieldColumn.fieldName instead.
-	ButtonMenu deprecated since version 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
-	ButtonMenuItem deprecated since version 4.30, use TableMenuItemConfig instead.
-	ButtonMenuViewModel deprecated since version 4.30, use TableMenuConfig, Calcite components - Dropdown, Calcite components - List, or Calcite components - Menu web components instead.
-	Fullscreen deprecated since 4.32. Use the Fullscreen component instead. For information on widget deprecation, read about Esri's move to web components.
-	FullscreenViewModel deprecated since 4.33. Use the JavaScript Fullscreen API directly instead.
-	Home deprecated since 4.32. Use the Home component instead. For information on widget deprecation, read about Esri's move to web components.
-	LineOfSight deprecated since 4.33. Use the Line Of Sight component instead. For information on widget deprecation, read about Esri's move to web components.
-	LineOfSightTarget deprecated since 4.33. Use the LineOfSightAnalysisTarget on LineOfSightAnalysis instead.
-	LineOfSightViewModel deprecated since 4.33. Use the Line Of Sight component or LineOfSightAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
-	Locate deprecated since 4.32. Use the Locate component instead. For information on widget deprecation, read about Esri's move to web components.
-	NavigationToggle deprecated since 4.32. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
-	NavigationToggleViewModel deprecated since 4.33. Use the Navigation Toggle component instead. For information on widget deprecation, read about Esri's move to web components.
-	Print deprecated since 4.33. Use the Print component instead. For information on widget deprecation, read about Esri's move to web components.
-	ScaleBar deprecated since 4.32. Use the Scale Bar component instead. For information on widget deprecation, read about Esri's move to web components.
-	Search deprecated since 4.33. Use the Search component instead. For information on widget deprecation, read about Esri's move to web components.
-	Slice deprecated since 4.33. Use the Slice component instead. For information on widget deprecation, read about Esri's move to web components.
-	SliceViewModel deprecated since 4.33. Use the Slice component or SliceAnalysis instead. For information on widget deprecation, read about Esri's move to web components.
-	Swipe deprecated since 4.32. Use the Swipe component instead. For information on widget deprecation, read about Esri's move to web components.
-	TimeZoneLabel deprecated since 4.33. Use the Time Zone Label component instead. For information on widget deprecation, read about Esri's move to web components.
-	Track deprecated since 4.32. Use the Track component instead. For information on widget deprecation, read about Esri's move to web components.
-	UtilityNetworkTrace.gdbVersion deprecated since version 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
-	UtilityNetworkTraceViewModel.gdbVersion deprecated since version 4.31, gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.
-	VersionManagementViewModel.versionIdentifierLookup deprecated since version 4.30. Use VersioningState instead.
-	VersionManagementViewModel.versionInfoLookup deprecated since version 4.30. Use VersioningState instead.
-	VersionManagementViewModel.versionManagementServiceLookup deprecated since version 4.30. Use VersioningState instead.
-	VideoPlayer deprecated since 4.33. Use the Video Player component instead. For information on widget deprecation, read about Esri's move to web components.
-	Weather deprecated since 4.33. Use the Weather component instead. For information on widget deprecation, read about Esri's move to web components.
-	WeatherViewModel deprecated since 4.33. Use the Weather component instead. For information on widget deprecation, read about Esri's move to web components.
-	Zoom deprecated since 4.32. Use the Zoom component instead. For information on widget deprecation, read about Esri's move to web components.


-	The "connectivity" possible value for QueryAssociationsParameters.types is deprecated at 4.29. Please use "junction-junction-connectivity" instead.
-	The following named easing presets on GoToOptions3D presets are deprecated at 4.33: in-cubic, out-cubic, in-out-cubic, in-expo, out-expo, in-out-expo, and in-out-coast-quad. Please use cubic-in, cubic-out, cubic-in-out, expo-in, expo-out, expo-in-out, and quad-in-out-coast instead.

</details>

### Map components deprecations

-	The focusTrapEnabled property on the Expand component is deprecated since 4.33. Use focusTrapDisabled instead.
-	The hideLastEditInfo property on the Feature component is deprecated since 4.33. Use hideLastEditedInfo instead.
-	The arcgis-directline-measurement-3d component is deprecated since 4.33. Use arcgis-direct-line-measurement-3d instead.

### Charts components deprecations

-	The exportImage method on the Chart component is deprecated since 4.33. Use exportAsImage instead.
-	All subTitle references on the Chart component are renamed to subtitle.
-	WebMapWebChart interface is deprecated, use WebChart instead.
-	WebMapWebBoxPlot interface is deprecated, use WebBoxPlot instead.
-	WebMapWebGaugeChart interface is deprecated, use WebGaugeChart instead.
-	WebMapWebRadarChart interface is deprecated, use WebRadarChart instead.
-	RESTStatisticType interface is deprecated, use WebChartStatisticType instead.
   -	percentile_cont statistic type is deprecated, use percentile-continuous instead.
   -	percentile_dist statistic type is deprecated, use percentile-discrete instead.

