# Change log

## Breaking changes

* Classes related to [ArcGIS Workflow Manager](http://server.arcgis.com/en/workflow-manager) have been removed. They were marked as deprecated starting with version 4.13.

## Deprecation

* None yet

## Bug fixes and enhancements

* BUG-000124674: Fixed an issue where right-clicking and pasting an address into the Search widget did not give address suggestions.
* BUG-000125359: Fixed an issue where the listMode property of KMLLayer did not accept a hide-children value.
* Fixed an issue where the listMode property inconsistently honors a hide-children value.
* The Search widget now supports spaces for the suggest() method, which results in more accurate search suggestions.
