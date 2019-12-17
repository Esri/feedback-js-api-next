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

* BUG-000118361: The BasemapGallery widget no longer asks for portal login credential when groups, basemaps, and layers are public.
* BUG-000121868 & BUG-000122071: Sketch widget behavior is no longer inconsistent when completing a polygon by clicking the first created vertex.
* BUG-000122438: Fixed an issue where the extent of the SceneView wasn't calculated correctly.
* BUG-000124032: Fixed an issue where feature collections using visual variables and/or Arcade based renderers printed "Override" in Legend in printout.
* BUG-000124241: Fixed an issue where the Editor widget would not display updated geometry after feature edits were applied.
* BUG-000124266: Fixed an issue where KMLLayer sometimes did not display depending on the structure of the source data.
* BUG-000124434: Fixed an issue where the Directions widget did not properly localize the turn-by-turn instructions.
* BUG-000124583: It is now possible move Sketch graphics if they are behind graphics on other layers.
* BUG-000124674: Fixed an issue where right-clicking and pasting an address into the Search widget did not give address suggestions.
* BUG-000124691: ClosestFacilityTask now correctly sends the timeOfDay parameter correctly.
* BUG-000124720: Fixed an issue where conversions could not removed in the CoordinateConversion widget.
* BUG-000125210: Fixed an issue where the LayerList would be stuck in an infinite loading animation when no WMSSublayers were visible.
* BUG-000125344: It is not possible to load and display Koop-based feature layers.
* BUG-000125359: Fixed an issue where the listMode property of KMLLayer did not accept a hide-children value.
* BUG-000125649: Fixed several issues related to crashes on iOS devices.
* BUG-000125662: Fixed an issue where the text can become distorted for some languages with more than 100 different characters using the TextSymbol.
* BUG-000125951: Fixed an issue with the Search widget suggestions not showing properly when the responses do not reach the application in sync. We now cancel out of sync requests using AbortController.
* BUG-000126130: Fixed an issue where some SimpleMarkerSymbol.style property values were not honored by MapImageLayer.
* BUG-000126233: Fixed an issue where the FeatureLayer.labelsVisible property was not properly honored in the current view extent.
* BUG-000126298: Fixed an issue where a point Graphic would be placed at coordinates (0, 0) when elevation mode would be relative-to-ground in a local SceneView.
* BUG-000126349: Fixed an error in the Editor widget when switching feature templates while editing.
* BUG-000126421: Bar chart media elements within popups no longer truncate X-axis labels.
* BUG-000126427: Fixed the documentation for the timeAttribute property of the DirectionsViewModel to be readonly.
* BUG-000126440: Fixed an issue where adding vertices using SketchViewModel would cause errors on specific iOS devices.
* BUG-000126622: Fixed an issue where the FeatureLayer.labelsVisible property was not properly honored when it's value was changed after initial load.
* BUG-000126807: Fixed an issue where Vector tile layers did not respect zoom level visibility.
* GEONET-241160: Fixed an issue in 3D where sketching graphics that cross the dateline would get clipped.
* GEONET-241397: Fixed an issue where TextSymbol with Arabic characters was not displayed when it's used to define the symbol property of Graphic.
* Fixed an issue where SceneView.takeScreenshot() with a higher resolution and ignorePadding set to true would shift the center of the scene.
* Fixed an issue where a selected polyline graphic of a route segment would persist after clearing with the Directions widget.
* Fixed an issue where image elements allocated in esriRequest weren't garbage collected in Google Chrome.
* Fixed an issue where in SceneView highlight for invisible graphics would still be displayed.
* Fixed an issue where labels did not display consistently when the view.constraints.snapToZoom property was set to false.
* Fixed an issue where the DictionaryRenderer failed to render when labelingInfo is defined on the layer.
* Fixed an issue where the Directions widget did not consistently zoom to the full extent of the route.
* Fixed an issue where the KMLLayer.fullExtent property was not properly honored.
* Fixed an issue where the Measurement widget failed with some polar projections.
* Fixed an issue where the geometryEngine failed with some polar projections.
* Fixed an issue where the listMode property inconsistently honors a hide-children value.
* Fixed an issue where the calendar was constrained by the directions panel with the Directions widget.
* Fixed an issue where the results of getResultData() sometimes did not contain m or z values.
* Fixed an issue with printing ImageryLayers with an assigned renderer.
* Fixed an issue with the tooltip of a pie chart in a Popup where the total values were repeated twice.
* ENH-000115553: Requests are now made on basemap tiles while calling MapView goTo().
* ENH-000120958: The view's momentum can be disabled when panning in a MapView using the momentumEnabled property.
* ENH-000124802: Added the ability to findLayerByID() for basemap layers.
* Added support for printing customParameters and customLayerParameters properties of OGC layers.
* Added the origin and final destination to the detailed turn-by-turn instructions of the Directions widget.
* Increased the length of the label of the tooltip of a pie chart in a Popup.
* The Legend widget supports CIMSymbol and WebStyleSymbol.
* The Print widget prints a localized date in the printout by default.
* The Search widget supports spaces for the suggest() method, which results in more accurate search suggestions.
* The Swipe widget now works with VectorTileLayers in the leadingLayers or trailingLayers.
