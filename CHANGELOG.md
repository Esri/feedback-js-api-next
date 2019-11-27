# Change log

### Saving webmaps

WebMaps now can be saved with `save()` and `saveAs()` methods. Properties of the WebMap related to the view can be saved by calling `updateFrom()` method before saving a webmap. 

### Daylight Widget

Perform shadow analysis with the new Daylight widget. Position the sun at specific dates and time of day to see the shadows casted by the 3D objects in your scene. The new widget also allows you to animate the sunlight throughout the day.

### Projection Engine: Spilhaus projection

The [Spilhaus world ocean map in a square](https://storymaps.arcgis.com/stories/756bcae18d304a1eac140f19f4d5cb3d) or "Spilhaus projection" (WKID 54099) is now available in the Projection Engine.

## Breaking changes

* Classes related to [ArcGIS Workflow Manager](http://server.arcgis.com/en/workflow-manager) have been removed. They were marked as deprecated starting with version 4.13.
* To select or unselect multiple vertices during a graphic update operation using the Sketch widget, we now use `Shift + Left-click` combination instead of `Ctrl + Left-click` on vertices.
* 2D measurement widgets changed the base class from `esri-area-measurement-3d` to `esri-area-measurement-2d` and from `esri-direct-line-measurement-3d` to `esri-distance-measurement-2d`.
* Removed the `getImageUrl()` method from MapImageLayer. This method was deprecated since version 4.11. We recommend extending BaseDynamicLayer instead.
* Removed the `value-change` and `values-change` events from HistogramRangeSlider. These events were deprecated since version 4.13. We recommend watching the values property or using the other widget events instead.

## Deprecation

* None yet

## Bug fixes and enhancements

* Swipe widget works with VectorTileLayer.
* BUG-000125649: Fixed several issues related to crashes on iOS devices.
* BUG-000124674: Fixed an issue where right-clicking and pasting an address into the Search widget did not give address suggestions.
* BUG-000124032: Fixed an issue where feature collections using visual variables and/or Arcade based renderers printed "Override" in Legend in printout.
* BUG-000125359: Fixed an issue where the listMode property of KMLLayer did not accept a hide-children value.
* BUG-000125662: Fixed an issue where the text can become distorted for some languages with more than 100 different characters using the TextSymbol.
* BUG-000125951: Fixed an issue with the Search widget suggestions not showing properly when the responses do not reach the application in sync. We now cancel out of sync requests using AbortController.
* BUG-000124720: Fixed an issue where conversions could not removed in the CoordinateConversion widget.
* ENH-000115553: Requests are now made on basemap tiles while calling MapView goTo().
* GEONET-241397: Fixed an issue where TextSymbol with Arabic characters are not displayed.
* GEONET-241160: Fixed an issue in 3D where sketching graphics that cross the dateline would get clipped.
* Fixed an issue where the results of getResultData() sometimes did not contain m or z values.
* Fixed an issue where the listMode property inconsistently honors a hide-children value.
* Fixed an issue where a selected polyline graphic of a route segment would persist after clearing with the Directions widget.
* Fixed an issue with printing ImageryLayers with an assigned renderer.
* Fixed an issue where the calendar was constrained by the directions panel with the Directions widget.
* The Search widget supports spaces for the suggest() method, which results in more accurate search suggestions.
* The Print widget prints a localized date in the printout by default.
* Added support for printing customParameters and customLayerParameters properties of OGC layers.
* Added the origin and final destination to the detailed turn-by-turn instructions of the Directions widget.
* The Swipe widget now works with VectorTileLayers in the leadingLayers or trailingLayers.
