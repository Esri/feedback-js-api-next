# Change log

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
