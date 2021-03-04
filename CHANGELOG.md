# Change log

The `next` version of 4.19 is now available.  Planned release date is April 2021.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Breaking changes

* The IdentityManager's setRedirectionHandler method and useSignInPage property were removed at 4.19. This was a result of Enterprise Portal apps no longer making use of this functionality beginning with the upcoming Enterprise 10.9.1 release.

* The InputField and FieldElement hint property has been updated to display a temporary placeholder for text and number inputs for both TextAreaInput and TextBoxInput. Prior to this, whatever was set in the FieldElement's hint would display as a tooltip while hovering over the input field.

## Bug fixes and enhancements

- BUG-000131546: Fixed an issue where selecting features using the Editor widget would fail at large scales if the service's spatial reference does not match the map's spatial reference.
- BUG-000134522: Fixed an issue where the UniqueValueRenderer would fail to display PictureMarkerSymbol graphics when attempting to load over a thousand images.
- BUG-000135733: Fixed an issue where a Graphic with an Extent geometry containing a TextSymbol would disappear from the map at certain zoom levels.
- BUG-000135869: Fixed an issue where the undo action executed using the 'z' key on a keyboard is not respected when editing features with the Editor widget.
- BUG-000136200: Fixed an issue where the Expand would not close by pressing the Escape key. We added the closeOnEsc property so users can configure when to allow this, but it is enabled by default to improve accessibility.
- BUG-000136086: Fixed an issue in the documentation where the return type of the added and vertices.coordinates properties of the Sketch widget's VertexAddEventInfo typedef returned Graphic[] instead of Number[].
- BUG-000137309: Fixed an issue where the Search.suggestions returned slightly inconsistent results.
- BUG-000137044: Fixed an issue where multipoint features in a FeatureLayer are cut off along tile edges.
- Fixed an issue where a CIMSymbol with only a CIMPictureMarker symbol layer would not render in the GraphicsLayer.
- Fixed an issue where critical dependency warnings would occur when building the API with ES modules and webpack.
- Fixed an issue with the CIMSymbol where the shiftOddRows property was not supported in the markerPlacement object on a polygon symbol.
- Fixed an issue with the Directions widget where the suggestions would get truncated when using bottom placement.
- Fixed an issue where requests were not being made initially when WMSLayer sublayers were toggled in the LayerList widget.
- Fixed an issue where the Print widget allowed illegal characters in the MAP_ONLY width and height.
- Fixed an issue where the ScaleBar widget was showing an incorrect scale for non-Earth GCS.
- Fixed an issue with printing layers from a MapServer if the map service supports dynamic layers.
- Fixed an issue with rendering centroids. For multi-part polygons, polygon centroids now render in the center of the largest ring. Previously, they were rendered using the centroid of all combined rings, which had undesirable results.
- Fixed an issue with the DictionaryRenderer, where call out lines would be added to each symbol in a SceneView, even if the symbol had elevation set.
- Fixed an issue with the OGCFeatureLayer where features were not automatically highlighed when selected.
- Fixed an issue with the OGCFeatureLayer where unnecessary additional requests were being made for some server types.
- Fixed an issue with the WMTSLayer where it would load all sublayers even if a sublayer was preselected. For large layers, this would cause a long lag in load time.
- Added a clockwise option for the getCIMSymbolRotation and applyCIMSymbolRotation methods on cimSymbolUtils.
- Enhanced the Directions widget by adding a Time Unspecified departure option.
- Enhanced the Gamepad so that navigation will only work over https.

## Deprecated classes, properties, methods, and events

The following are deprecated and will be removed in a future release:

| Class/Property/Method/Event | Alternate option | Version deprecated |
|----------|-------------|--------------------|
| `ProjectParameters.outSR` | [ProjectParameters.outSpatialReference](../api-reference/esri-tasks-support-ProjectParameters.html#outSpatialReference) | 4.4 |
| `BasemapToggle.titleVisible` | [BasemapToggle.visibleElements.title](../api-reference/esri-widgets-BasemapToggle.html#visibleElements) | 4.15 |
| `AreaMeasurement2DViewModel.clearMeasurement()` | [AreaMeasurement2DViewModel.clear()](/api-reference/esri-widgets-AreaMeasurement2D-AreaMeasurement2DViewModel.html#clear) | 4.16 |
| `AreaMeasurement2DViewModel.newMeasurement()` | [AreaMeasurement2DViewModel.start()](/api-reference/esri-widgets-AreaMeasurement2D-AreaMeasurement2DViewModel.html#start) | 4.16 |
| `AreaMeasurement3DViewModel.clearMeasurement()` | [AreaMeasurement3DViewModel.clear()](/api-reference/esri-widgets-AreaMeasurement3D-AreaMeasurement3DViewModel.html#clear) | 4.16 |
| `AreaMeasurement3DViewModel.newMeasurement()` | [AreaMeasurement3DViewModel.start()](/api-reference/esri-widgets-AreaMeasurement3D-AreaMeasurement3DViewModel.html#start) | 4.16 |
| `DirectLineMeasurement2DViewModel.clearMeasurement()` | [DirectLineMeasurement2DViewModel.clear()](/api-reference/esri-widgets-DirectLineMeasurement2D-DirectLineMeasurement2DViewModel.html#clear) | 4.16 |
| `DirectLineMeasurement2DViewModel.newMeasurement()` | [DirectLineMeasurement2DViewModel.start()](/api-reference/esri-widgets-DirectLineMeasurement2D-DirectLineMeasurement2DViewModel.html#start) | 4.16 |
| `DirectLineMeasurement3DViewModel.clearMeasurement()` | [DirectLineMeasurement3DViewModel.clear()](/api-reference/esri-widgets-DirectLineMeasurement3D-DirectLineMeasurement3DViewModel.html#clear) | 4.16 |
| `DirectLineMeasurement3DViewModel.newMeasurement()` | [DirectLineMeasurement3DViewModel.start()](/api-reference/esri-widgets-DirectLineMeasurement3D-DirectLineMeasurement3DViewModel.html#start) | 4.16 |
| `PrintTemplate.preserveScale` | [PrintTemplate.scalePreserved](../api-reference/esri-tasks-support-PrintTemplate.html#scalePreserved) | 4.16 |

