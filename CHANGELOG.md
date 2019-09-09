# Change log 

### DictionaryRenderer

When symbolizing features in your map, you might need to convey several pieces of information with a single symbol. For example, you might want to symbolize restaurants so that each symbol tells you the type of food, price, rating, number of reviews, current health grade, seating capacity, average wait time, and so on. You could try to symbolize such data using a unique value renderer, but as the number of fields and values increases, that approach becomes impractical. With the new dictionary renderer, however, you can build each symbol on-the-fly based on one or several attribute values and also handle a nearly infinite number of unique combinations. 
A dictionary renderer applies symbols to features through an associated dictionary symbol style. The style contains all the symbol components as well as rules for displaying the symbol.

The symbol style that the dictionary renderer uses is defined in a service. If you want to see how the dictionary renderer works, you can check out this sample. We will provide more information on creating your own symbol style definition in the near future.

[Dictionary Renderer sample](https://codepen.io/fangli88/pen/mdbqzWb)

### Swipe widget

Swipe widget provides a simple tool to show a portion of a layer or layers on top of a map. Layers can be swiped vertically or horizontally to easily compare two layers or see what is underneath a layer.

[Swipe widget sample](https://codepen.io/annefitz/pen/mdbqGdx)

### Bookmarks widget

The Bookmarks widget now supports adding, editing, deleting, and reordering bookmarks within the widget by setting the `editingEnabled` property to `true`.

[Bookmarks widget sample](https://codepen.io/annefitz/pen/yLBPxOy)

### PointCloudLayer Popups

Support for popups on PointCloudLayers. Popups can be configured directly in code on the layer, or via the portal item or webscene.

## Breaking changes

* The StretchRenderer is removed and replaced by the RasterStretchRenderer.
* The Geoprocessor class has been modernized, which required several changes:
  - Removed the `updateDelay` property.
  - Removed the `cancelJobStatusUpdates()` method.
  - The submitJob method now immediately returns with a JobInfo. Previously, a promise was returned, which when resolved, returned a `JobInfo`. Now you can use the waitForJobCompletion method to get notified of job completion and optionally of job status.
  - The getResultMapImageLayer method now returns a promise, which when resolved, returns a MapImageLayer. Previously, a `MapImageLayer` was returned.

## Bug fixes and enhancements

* BUG-000124199, BUG-000122310 & BUG-000124535: Fixed an issue where raster basemap layers displayed pixelated labels when modifying browser size larger or smaller.
* BUG-000123655 & BUG-000123678: Fixed an issue with changing the unit property of the AreaMeasurement2D and the DistanceMeasurement2D widgets.
* BUG-000123621: ImageryLayer now correctly works correctly with set where clauses.
* BUG-000123651: Fixed an issue where QueryTask.execute(query) was not autocasting the query parameter to a Query object.
* BUG-000121530: Fixed an issue where setting methods on Array.prototype would freeze the SceneView.
* BUG-000123917: Fixed an issue where changing the visibility of a layer with labels enabled throws an error in the console.
* BUG-000123726: Fixed an issue where features would intermittently fail to render after filters were applied to a LayerView.
* BUG-000124012: Fixed an issue where normalizeUtils.normalizeCentralMeridian did not work as expected.
* GEONET-237319: Fixed an issue where the Search widget would not work in an offline environment.
* Fixed an issue where SceneView.updating wasn't always reliable.
* Fixed an issue where the Search widget was unable to search for the GlobalID field from a FeatureLayer using the custom source.
* Fixed an issue where the state of the AreaMeasurement2D and the DistanceMeasurement2D widgets were not reporting correctly.
* Fixed an issue where using the scroll bar to scroll through results from the Search widget did not work with embedded apps in Safari web browser.
* In 3D, there are a number of transparency fixes:
  * Render edges that are behind or part of a transparent 3D object.
  * Adjacent polygons sharing extruded faces no longer flicker.
