# Change log

## Breaking changes

* Classes related to [ArcGIS Workflow Manager](http://server.arcgis.com/en/workflow-manager) have been removed. They were marked as deprecated starting with version 4.13.
* To select or unselect multiple vertices during a graphic update operation using the Sketch widget, we now use `Shift + Left-click` combination instead of `Ctrl + Left-click` on vertices.

## Deprecation

* None yet

## Bug fixes and enhancements

* Swipe widget works with VectorTileLayer.
* BUG-000124674: Fixed an issue where right-clicking and pasting an address into the Search widget did not give address suggestions.
* BUG-000125359: Fixed an issue where the listMode property of KMLLayer did not accept a hide-children value.
* BUG-000125662: Fixed an issue where the text can become distorted for some languages with more than 100 different characters using the TextSymbol.
* GEONET-241397: Fixed an issue where TextSymbol with Arabic characters are not displayed.
* Fixed an issue where the listMode property inconsistently honors a hide-children value.
* Fixed an issue where a selected polyline graphic of a route segment would persist after clearing with the Directions widget.
* Fixed an issue where the calendar was constrained by the directions panel with the Directions widget.
* The Search widget supports spaces for the suggest() method, which results in more accurate search suggestions.
* Added support for printing customParameters and customLayerParameters properties of OGC layers.
