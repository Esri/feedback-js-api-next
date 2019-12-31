# Change log

## Performance enhancements

* Significantly improved GPU performance by reducing number of polygon vertices drawn.
* When rendering vector tiles, we generate 20-25% fewer WebGL calls, and much fewer JavaScript calls, which results in a smoother interaction experience.
* Improved mesh strategy reduced the number of geometries that needed to be tessellated.
* Optimized the Basemap Gallery widget data loading behavior in 2D MapViews.
* Switching to/from DotDensityRenderer or HeatmapRenderer is much faster.

## Breaking changes

* Removed requireUtils.when, which has been deprecated since version 4.10. Use promiseUtils.create() instead.

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

* BUG-000127024: Fixed an issue where a WebMap would not load if it contained a MapImageLayer with a group layer and `Supports Dynamic Layers: false`.
* Fixed an issue where an incorrect title was returned for sublayers of TileLayer when loaded as an item from a portal.
