# Change log

## Breaking changes

* Native promises are now the default. Read more in the [announcement in 4.14 release notes](https://developers.arcgis.com/javascript/latest/guide/release-notes/#api-modernization). For app developers, this means that any promise you receive from the API is now a standard JavaScript promise (aka “native promise”). They are nearly identical to Dojo Deferred/Promise, with the following differences:
  * No otherwise() method. Use catch() instead.
  * No always() method. Use the following code instead: .catch(function() {}).then(function() { /* this function is always executed */ })
  * No isFulfilled()/isResolved()/isRejected() methods (and no suitable replacement).
  * With Dojo promises, the then/catch functions used to be called synchronously when the promise is resolved/rejected. With standard promises, they are called asynchronously (in a future microtask). This can lead to bugs in code that relies (usually inadvertently) on synchronous execution.


To opt out, use
```
    <script>
     var dojoConfig = {
       has: {
         "esri-native-promise": 0
       }
     };
    </script>
```
* Removed requireUtils.when, which has been deprecated since version 4.10. Use promiseUtils.create() instead.
* Removed ImageMeshColor, which was deprecated since version 4.11. Set MeshTexture on MeshMaterial.colorTexture instead.
* Removed ValueMeshColor, which was deprecated since version 4.11. Use MeshMaterial.color instead.

## Performance enhancements

* Significantly improved GPU performance by reducing number of polygon vertices drawn.
* Improved mesh strategy reduced the number of geometries that needed to be tessellated.
* Optimized the Basemap Gallery widget data loading behavior in 2D MapViews.
* Switching to/from DotDensityRenderer or HeatmapRenderer is much faster.

## Deprecation

* decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
* Dojo promises deprecated since version 4.6. We are planning to make the API return native promises by default at 4.15, then completely remove Dojo promises at 4.16.
* ElevationLayer.fetchTile.noDataValue deprecated since version 4.13. Use {noDataValue} options object instead.
* Extending multiple classes deprecated since version 4.13. Create mixins with TypeScript and JavaScript instead.
* ImageMeshColor deprecated since version 4.11. Set MeshTexture on MeshMaterial.colorTexture instead.
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
* PathSymbol3DLayer.size deprecated since version 4.12. Use width or height instead.
* ProjectParameters.outSR deprecated since version 4.4. Use outSpatialReference instead.
* RouteParameters.barriers deprecated since version 4.11. Use pointBarriers, polygonBarriers, and/or polylineBarriers instead.
* SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
* SmartMapping.params.basemap deprecated since version 4.13. Use view instead.
* symbolPreview deprecated since version 4.11. Use symbolUtils instead.
* ValueMeshColor deprecated since version 4.11. Use MeshMaterial.color instead.

## Bug fixes and enhancements

* BUG-000115337: Popups now properly display coded values for MapImageLayer.sublayers.
* BUG-000123604: Fixed an issue where the UniqueValueRenderer is unable to display a feature layer with more than 1000 values.
* BUG-000127024: Fixed an issue where a WebMap would not load if it contained a MapImageLayer with a group layer and Supports Dynamic Layers: false.
* BUG-000127435: Popups now display related field values saved within webmaps.
* BUG-000127657: Fixed an issue where the TimeSlider widget displays November twice in its labels.
* Fixed an issue where an incorrect title was returned for sublayers of TileLayer when loaded as an item from a portal.
* Fixed an issue with how numbers display in Popup charts to maintain consistency across chart types.
* Fixed an issue where a Popup would break after panning left (when popup goes off the screen and comes back) in IE11.
* [GEONET-245879](https://community.esri.com/thread/245879-vector-tiles-opacitybackground-color-issue-414): Fixed an issue where the background style-layer ignores VectorTileLayer's visibility.
