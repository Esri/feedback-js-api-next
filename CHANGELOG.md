# Change log 

### DictionaryRenderer

When symbolizing features in your map, you might need to convey several pieces of information with a single symbol. For example, you might want to symbolize restaurants so that each symbol tells you the type of food, price, rating, number of reviews, current health grade, seating capacity, average wait time, and so on. You could try to symbolize such data using a unique value renderer, but as the number of fields and values increases, that approach becomes impractical. With the new dictionary renderer, however, you can build each symbol on-the-fly based on one or several attribute values and also handle a nearly infinite number of unique combinations. 
A dictionary renderer applies symbols to features through an associated dictionary symbol style. The style contains all the symbol components as well as rules for displaying the symbol.

The symbol style that the dictionary renderer uses is defined in a service. If you want to see how the dictionary renderer works, you can check out this sample. We will provide more information on creating your own symbol style definition in the near future.

[Dictionary Renderer sample](https://codepen.io/fangli88/pen/mdbqzWb)

### Swipe widget

Swipe widget provides a simple tool to show a portion of a layer or layers on top of a map. Layers can be swiped vertically or horizontally to easily compare two layers or see what is underneath a layer. This widget currently works with all layers except VectorTileLayers.

[Swipe widget sample](https://codepen.io/annefitz/pen/mdbqGdx)

### Measurement widget

A single Measurement widget can now be used in both 2D MapViews and 3D SceneViews by encapsulating the capabilities from the AreaMeasurement2D, AreaMeasurement3D, DistanceMeasurement2D, and DirectLineMeasurement3D widgets. We removed the mode property and added a clearMeasurement() method. Measurements are persisted until they are cleared, or the view is changed. The sample below can switch between 2D and 3D, measure lines and areas, and clear measurements.

[Measurement widget sample](https://codepen.io/noash/pen/pozKezW)

### Bookmarks widget

The Bookmarks widget now supports adding, editing, deleting, and reordering bookmarks within the widget by setting the `editingEnabled` property to `true`.

[Bookmarks widget sample](https://codepen.io/annefitz/pen/yLBPxOy)

### PointCloudLayer Popups

Support for popups on PointCloudLayers. Popups can be configured directly in code on the layer, or via the portal item or webscene. If you set [Popup.defaultPopupTemplateEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Popup.html#defaultPopupTemplateEnabled) to `true`, point cloud layers will receive a default template.

[PointCloudLayer default popups](https://codepen.io/ralucanicola/pen/ExYReRJ?editors=1000)

### ScaleRangeSlider Widget
The ScaleRangeSlider widget allows the user to set a maximum and minimum scale based on named scale ranges. When a layer is provided to the widget, the minScale and maxScale are set to the scale range of the layer.

[ScaleRangeSlider widget sample](https://codepen.io/annefitz/pen/YzKOPNM)

## ImageryLayer Updates

At 4.13, [ImageryLayer](../../api-reference/esri-layers-ImageryLayer.html) has been updates as below:

- **Image coordinate system:** You can display images in [ImageryLayer](../../api-reference/esri-layers-ImageryLayer.html) in their original coordinate system by specifying [imageCoordinateSystem](../../api-reference/esri-geometry-SpatialReference.html#imageCoordinateSystem) of the [2D MapView](../../api-reference/esri-views-MapView.html#spatialReference). This will allow you to visualize your images without any distortion in its original form. To see this action, check out [ImageryLayer - image coordinate system](https://codepen.io/U_B_U/pen/xxKzezN?editors=1000) sample.

- **Client side renderer:** When the [format](../../api-reference/esri-layers-ImageryLayer.html#format) of the imagery layer is set to `lerc`, the client retrieves the raw image data. A default renderer is applied to the layer unless you specify a [pixelFilter](../../api-reference/esri-layers-ImageryLayer.html#pixelFilter) function. The default renderer leverages available imagery information for the best display result. In previous versions of the API, the default was a grayscale image unless you specified a pixelFilter function. If the default renderer does not meet your requirement, a [renderer](../../api-reference/esri-layers-ImageryLayer.html#renderer) can be applied to the layer.

- **Optimized layer loading:** There will be fewer files requested from CDN and applications with imagery layers will load faster.

## Breaking changes

* The StretchRenderer is removed and replaced by the RasterStretchRenderer.
* The Geoprocessor class has been modernized, which required several changes:
  * Removed the updateDelay property.
  * Removed the cancelJobStatusUpdates() method.
  * The submitJob() method now immediately returns with a promise that resolves a JobInfo, as soon as the job is successfully submitted to the server. Previously, the returned promise was resolved only after the request succeeded. Now you can use the waitForJobCompletion() method to get notified of job completion and optionally of job status.
  * The getResultMapImageLayer() method now returns a promise, which when resolved, returns a MapImageLayer. Previously, a MapImageLayer was returned.
* Removed the mode property from the AreaMeasurement2D and DistanceMeasurement2D widgets and ViewModels. See Measurement Enhancements for more information.
* Removed the pixelSizeX and pixelSizeY properties from ImageServiceIdentifyParameters. Use pixelSize property instead.
* Removed the domainFields property ImageryLayer. Use fields property instead.
* Removed the hasRasterAttributeTable and rasterAttributeTable properties from ImageryLayer. Use the ImageryLayer's serviceRasterInfo.attributeTable property instead.
* Removed reset method from Sketch and SketchViewModel. Use cancel method on respective classes.
* The value-change event removed on SliderViewModel.

## Deprecation

* Classes related to [ArcGIS Workflow Manager](http://server.arcgis.com/en/workflow-manager) are being deprecated starting with version 4.13. They are scheduled for removal in version 4.14.
* The value-change and values-change events deprecated on Slider.
* The basemap parameter has been deprecated in favor of view on all smartMapping methods in esri/renderers/smartMapping/creators that previously relied on it.

## Bug fixes and enhancements

* BUG-000124199, BUG-000122310 & BUG-000124535: Fixed an issue where raster basemap layers displayed pixelated labels when modifying browser size larger or smaller.
* BUG-000123655 & BUG-000123678: Fixed an issue with changing the unit property of the AreaMeasurement2D and the DistanceMeasurement2D widgets.
* BUG-000123621: ImageryLayer now correctly works correctly with set where clauses.
* ENH-000124403 and GEONET-237519 implemented a workaround for devices that do not honor highp sampler precision.
* BUG-000123651: Fixed an issue where QueryTask.execute(query) was not autocasting the query parameter to a Query object.
* BUG-000121530: Fixed an issue where setting methods on Array.prototype would freeze the SceneView.
* BUG-000123917: Fixed an issue where changing the visibility of a layer with labels enabled throws an error in the console.
* BUG-000123726: Fixed an issue where features would intermittently fail to render after filters were applied to a LayerView.
* BUG-000124012: Fixed an issue where normalizeUtils.normalizeCentralMeridian() did not work as expected.
* BUG-000124127: Sketch widget now works as expected in Chrome with hardware acceleration disabled.
* BUG-000124369: Fixed an issue where adding and removing graphics would not flag the MapView.updating property.
* BUG-000124796: Fixed an issue where enabling esri-native-promise threw errors in a SceneView.
* BUG-000124627: Fixed an issue where PathSymbol3DLayer with a circle profile didn't work as expected.
* BUG-000123750: Fixed an issue in Chrome where continuous generation and removal of graphics caused a memory leak.
* BUG-000122719: Fixed an issue where drawing a polygon with a SimpleFillSymbol returned an error message in the Console tab.
* BUG-000119872 - Fixed an issue where measurements could not be exited or reset with the AreaMeasurement2D widget and DistanceMeasurement2D widget.
* [GEONET-237319](https://community.esri.com/thread/237319-problem-with-search-widget-in-offline-app): Fixed an issue where the Search widget would not work in an offline environment.
* [GEONET-238757](https://community.esri.com/thread/238757-date-labels-on-time-slider-widget-dont-work-when-you-use-setinterval-method): Fixed an issue where the TimeSlider widget's labels were shifting to the left when fullTimeExtent is set.
* Fixed an issue where SceneView.updating wasn't always reliable.
* Fixed an issue where the Search widget was unable to search for the GlobalID field from a FeatureLayer using the custom source.
* Fixed an issue where the state of the AreaMeasurement2D and the DistanceMeasurement2D widgets were not reporting correctly.
* Fixed an issue where it was possible to create negative areas with the AreaMeasurement2D widget.
* Fixed an issue where using the scroll bar to scroll through results from the Search widget did not work with embedded apps in Safari web browser.
* Fixed an issue with the Directions widget where the stops could not be reordered on a touch screen.
* Fixed an issue where an invalid Arcade expression in labelExpressionInfo caused the features not to display.
* In 3D, there are a number of transparency fixes:
  * Render edges that are behind or part of a transparent 3D object.
  * Adjacent polygons sharing extruded faces no longer flicker.
