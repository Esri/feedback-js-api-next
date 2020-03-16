# Change log

## FeatureTable

The FeatureTable widget provides an interactive tabular view of each feature's attributes and attachments contained in a feature layer. When working with a large dataset, the table loads additional features as the user scrolls. Users can select rows (features) within the table, sort them based on an attribute, and show/hide attribute columns. See sample at https://codepen.io/bsvensson/pen/yLNppjJ.

## Attachments: editing and viewing

4.15 introduces a new Attachments widget which allows users to view attachments associated with a feature. Along with a thumbnail of the attachment, the file format and size are displayed. 

### Editing attachments

The Editor widget was updated to support attachment editing. You can add, update, or delete attachments associated with a feature. It does so by making use of the Attachments widget. Nothing specific needs to be explicitely configured within the Editor to make this work. If the feature service to be edited is enabled with attachments, the option to add, update, and delete them will be made available within the widget.

### Viewing attachments

The pop-up now uses this widget under the hood to display attachments (note that it was possible to view attachments from within the pop-up prior to 4.15). Since the attachment experience is packaged as a standalone widget, you can also integrate attachment viewing into your own custom workflows. You can also view attachments from within the new feature table widget.

## API Modernization

_Note: this will require code changes in your app._

Read more in the [announcement in 4.14 release notes](https://developers.arcgis.com/javascript/latest/guide/release-notes/#api-modernization). 

For app developers, this means that any promise you receive from the API is now a standard JavaScript promise (aka “native promise”). They are nearly identical to Dojo Deferred/Promise, with the following differences:
  * No otherwise() method. Use catch() instead.
  * No isFulfilled()/isResolved()/isRejected() methods (and no suitable replacement).
  * No always() method. Use the following code instead: `.catch(function() { /* do something with the error */ }).then(function() { /* this function is always executed */ })`.
  * With Dojo promises, the then/catch functions used to be called synchronously when the promise is resolved/rejected. With standard promises, they are called asynchronously (in a future microtask). This can lead to bugs in code that relies (usually inadvertently) on synchronous execution.

A `has` flag was made available to enable native JavaScript promises in 4.12. Now it can also be used to disable native Promise, but this flag will be removed in the next release.

To opt out in 4.15, use:

```
    <script>
     var dojoConfig = {
       has: {
         "esri-native-promise": 0
       }
     };
    </script>
```
## Better Stronger MapImageLayer

The MapImageLayer and it's Sublayer classes were refactored and modernized.

Visualization saw improvements with smart mapping for dynamic layers support, and fixing some layer visibility bugs. Several issues with the popup behavior were fixed, such as being able to display descriptions when using coded domain values. We also added support for the defaultPopupTemplateEnabled property for automatic creation of popup templates.

Lastly, we added the ability to load the sublayer metadata by adding `Sublayer.load()`, as well as `MapImageLayer.loadAll()` to load all the sublayers. After loading a sublayer you get access to below new properties and methods:

* `fields` and `fieldsIndex`
* `fullExtent`
* `objectIdField` and `typeIdField`
* `getFeatureType()` and `getFieldDomain()`
* `renderer` and `labelingInfo` as configured on the service

## HTML sanitizer updated

In version 4.14, an HTML sanitizer was added to all widgets. This removed some HTML for security purposes. This caused HTML set in PopupTemplate.content or in other widgets to be removed. In this version, we relaxed some of the sanitizing. Although there is still HTML sanitizing performed within the widgets, basic HTML that was previously affected should no longer be an issue.

## Updated Sign-in UI

The sign-in and OAuth popup confirmation dialog used to access secure services is no longer implemented as a Dijit in a Dojo dialog. This dialog is specific to secure services that do not utilize OAuth on the ArcGIS platform. The UI has been redesigned to account for this change.

## Changes to Popup

The title and caption of chart media elements now display above the chart. In addition, the y-axis now starts at zero if there are no negative values when using a chart media element within a Popup

## Breaking changes

* The API returns native `Promise` by default as of 4.15. See above for more information. 
* The `dgrid` styles are no longer globally included. If using dgrid in your web application, you will need to reference the stylesheet separately.
* Removed `ImageMeshColor`, which was deprecated since version 4.11. Set MeshTexture on MeshMaterial.colorTexture instead.
* Removed `requireUtils.when`, which has been deprecated since version 4.10. Use promiseUtils.create() instead.
* Removed `ValueMeshColor`, which was deprecated since version 4.11. Use MeshMaterial.color instead.
* Removed capabilities and version properties from StreamLayer.
* The update event on Sketch widget and SketchViewModel no longer have cancel state. The parameter aborted on update events indicates that the process got cancelled.
* The attachmentInfos property has been removed from AttachmentsContent. It is now handled via the Attachments widget and can be accessed via its viewModel.

## Performance enhancements

* VectorTileLayer: Improved performance and stability on older iOS devices when MapView.constraints.rotationEnabled is set to false, especially if using more than one vector tile layer.

## Bug fixes and enhancements

* BUG-000113923: Fixed an issue where popups with coded value domains were not being properly displayed for MapImageLayer.
* BUG-000115337: Popups now properly display coded values for MapImageLayer.sublayers.
* BUG-000118097: A grouped layer's title now displays properly in the Legend widget.
* BUG-000120921: Fixed an issue with label placement for FeatureLayers in 2D MapViews.
* BUG-000123521: Fixed an issue where TextSymbol did not properly respect Font.decoration property values.
* BUG-000123604: Fixed an issue where the UniqueValueRenderer is unable to display a feature layer with more than 1000 values.
* BUG-000124184: Fixed an issue where popups authored in a webmap weren't being read properly for nested sublayers of a MapImageLayer.
* BUG-000126322: Fixed an issue where features are cut off at the poles in SceneView.
* BUG-000126782: Charts within a Popup now dispose properly.
* BUG-000127024: Fixed an issue where a WebMap would not load if it contained a MapImageLayer with a group layer and Supports Dynamic Layers: false.
* BUG-000127435: Popups now display related field values saved within webmaps.
* BUG-000127657: Fixed an issue where the TimeSlider widget displays November twice in its labels.
* BUG-000127777 - Removed documentation for an unsupported calculation isRightSide in the NearestPointResult result object, which is returned in the GeometryEngine.nearestCoordinate(), GeometryEngine.nearestVertex(), and GeometryEngine.nearestVertices() methods.
* BUG-000127800: Fixed an issue where the ScaleBar would not update properly when the view's zoom level was manually changed.
* BUG-000127870: Fixed an issue with how SVG image symbols displayed.
* BUG-000128088: Fixed an issue in the Bookmarks widget where the bookmarks couldn't be reordered after switching between a 2D MapView and 3D SceneView.
* BUG-000128344: Fixed an issue where Multipoint.setPoint threw errors if z/m values were not set.
* [GEONET-217197](https://community.esri.com/thread/217197-js-api-47-webmap-layers-visibility-defined-in-agol-not-respected): Fixed an issue where MapImageLayer.sublayers visibility defined in a portal were not being honored in an application.
* [GEONET-245706](https://community.esri.com/thread/245706-calcite-maps-layerlist-issue): Fixed an issue where the LayerList widget did not work properly on Android devices.
* [GEONET-245841](https://community.esri.com/thread/245841-directions-widget-414-wbr-in-view): Fixed an issue where `<wbr>` would appear in the directions list of the Directions widget.
* [GEONET-245879](https://community.esri.com/thread/245879-vector-tiles-opacitybackground-color-issue-414): Fixed an issue where the background style-layer ignores VectorTileLayer's visibility.
* [GEONET-245932](https://community.esri.com/thread/245932-graphics-layer-item-limit-rendering-problem-in-api-version-412): Fixed an issue where GraphicsLayer was not displaying all added graphics.
* Fixed an issue where GeometryEngine.geodesicDensify() did not return a result when the input geometry's spatial reference was WGS-84.
* Fixed an issue where MapImageLayer with dynamic layers enabled and using smartMapping renderer did not behave properly.
* Fixed an issue where click, double-click, immediate-click and hold events on SceneView would not intersect 3D objects and only return a mapPoint representing the intersection with the ground.
* Fixed an issue where a Popup would break after panning left (when popup goes off the screen and comes back) in IE11.
* Fixed an issue where an incorrect title was returned for sublayers of TileLayer when loaded as an item from a portal.
* Fixed an issue where setting opacity on a FeatureLayer would apply the transparency value to each feature and not the whole layer.
* Fixed an issue where the LayerList widget affected MapImageLayer.sublayers visibility.
* Fixed an issue where the basemap thumbnail in the BasemapToggle widget would not load until the corresponding Basemap was loaded.
* Fixed an issue with how numbers display in Popup charts to maintain consistency across chart types.
* Fixed an issue with the fileName and title properties for saving printed maps with the Print widget.
* Added support to the defaultPopupTemplateEnabled property for automatic creation of a popup template for MapImageLayer.sublayers.
* Enhanced the LayerList widget by updating the UX/UI of showing and hiding layers so that there are fewer 👁s. Now the 👁 will disappear when a layer is visible, and the hidden icon will show when the layer is not visible.
* The `percentile-continuous` and `percentile-discrete` types have been added to statisticType. The percentile statistic indicates the value below or above which a given percentage of values in a group of data values falls.
* Enhanced the relative-to-scene elevation mode to account for z-values.
* Support for animated gif - see sample at https://codepen.io/U_B_U/pen/VwLpYPm.

## Deprecation

The following are deprecated and will be removed in a future release:

* BasemapToggle.titleVisible deprecated since version 4.15. Use BasemapToggle.visibleElements.title instead.
* decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
* Dojo promises deprecated since version 4.6. The API returns native promises by default at 4.15, then we will completely remove Dojo promises at 4.16.
* Extending multiple classes deprecated since version 4.13. Create mixins with TypeScript and JavaScript instead.
* FeatureTemplates.filterEnabled deprecated since version 4.15. Use FeatureTemplates.visibleElements.filter instead.
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
* LayerList.statusIndicatorsVisible deprecated since version 4.15. Use LayerList.visibleElements.statusIndicators instead.
* PathSymbol3DLayer.size deprecated since version 4.12. Use PathSymbol3DLayer.width or PathSymbol3DLayer.height instead.
* Popup.featureNavigationEnabled deprecated since version 4.15. Use Popup.visibleElements.featureNavigation instead.
* ProjectParameters.outSR deprecated since version 4.4. Use ProjectParameters.outSpatialReference instead.
* RouteParameters.barriers deprecated since version 4.11. Use pointBarriers, polygonBarriers, and/or polylineBarriers instead.
* SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
* SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
* Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
* Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
* SmartMapping.params.basemap deprecated since version 4.13. Use view instead.
* StreamLayer.maximumTrackPoints deprecated since version 4.15. Use StreamLayer.purgeOptions.maxObservations instead.
* symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
* symbolPreview deprecated since version 4.11. Use symbolUtils instead.
* widget.join deprecated since version 4.7. Use classes instead.
