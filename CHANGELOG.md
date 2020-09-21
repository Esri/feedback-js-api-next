# Change log

The `next` version of 4.17 is now available.  Planned release date is October 2020.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## ES modules

Consuming the API with [@arcgis/core ES modules](https://www.npmjs.com/package/@arcgis/core) will be an additional option alongside the existing AMD modules. We are looking for your help to ensure that the new modules work seamlessly with modern web developer tooling.

As opposed to most `next` features, this is NOT planned for release at 4.17.

## Breaking changes

* View.destroy() now destroys all attached resources, including the map. To prevent the map from being destroyed, you can unset the map before calling destroy().

## Bug fixes and enhancements

* BUG-000129741: Popup and ListItem actions no longer fire thetrigger-action event when disabled.
* BUG-000129959: Fixed an issue with WMSLayer where some sublayers were not able to be turned off from the LayerList widget.
* BUG-000131053: Fixed an issue where individual point features did not highlight on selection when clustering is enabled.
* BUG-000131400: It is not possible to create client-side feature layers with a period in the field name.
* BUG-000132335: Clarified documentation for Slider, HistogramRangeSlider, and TimeSlider to indicate the containers for these widgets need a width specified in CSS to render properly in the Expand widget.
* GEONET-257043: Fixed an issue where the Bookmarks widget would not allow new bookmarks to be added if view.map was not a WebMap.
* GEONET-257326: Fixed an issue where the ScaleBar widget labels would display on top of other widgets.
* Fixed an issue where the ClosestFacilitySolveResult.directions had the incorrect property type. The property is now an array of DirectionsFeatureSet instances.
* Enhanced the behavior of the Print widget so that if the end-user modifies the dpi value in the MAP_ONLY layout, then the height and width are automaticlly adjusted. See exportOptions to learn more.
* Fixed an issue with popup alignment and docking positions.
* Integrated mesh modifications are applied without reloading layer, allowing for smoother transitions between different versions and scenarios.
* The evaluation of visibility of ObjectSymbol3DLayer is based on the entire shape of the symbol and not the point only (Frustum Culling).
* CIMSymbolReference typings were added for CIMSymbol.data to help users write correct CIM.

## Deprecation

The following are deprecated and will be removed in a future release:

* Use of Internet Explorer 11 is deprecated as of version 4.16. Users are highly encouraged to move to a modern browser such as Mozilla Firefox, Google Chrome, Apple Safari, or Microsoft Edge. While Internet Explorer 11 continues to be supported, use of Internet Explorer 11 is  discouraged, and support will be discontinued in version 4.18.
* decorators.cast(classFunction) deprecated since version 4.14. Parameter decorators won't be supported by JavaScript decorators.
* Extending multiple classes deprecated since version 4.13. Create mixins with TypeScript and JavaScript instead.
* LabelClass.labelExpressionInfo.value deprecated since version 4.5. Use expression instead.
* SceneView.constraints.collision deprecated since version 4.8. Use Ground.navigationConstraint instead.
* SmartMapping.params.basemap deprecated since version 4.13. Use view instead.
* decorators.declared deprecated since version 4.16. declared() is not needed to extend Accessor anymore. See Implementing Accessor for updated information.
* StreamLayer.maximumTrackPoints deprecated since version 4.15. Use StreamLayer.purgeOptions.maxObservations instead.
* SizeVariable.expression deprecated since version 4.2. Use SizeVariable.valueExpression instead.
* PathSymbol3DLayer.size deprecated since version 4.12. Use PathSymbol3DLayer.width or PathSymbol3DLayer.height instead.
* symbolPreview deprecated since version 4.11. Use symbolUtils instead.
* symbolPreview.renderPreviewHTML deprecated since version 4.11. Use symbolUtils.renderPreviewHTML instead.
* PrintTemplate.preserveScale deprecated since version 4.16. Use PrintTemplate.scalePreserved instead.
* ProjectParameters.outSR deprecated since version 4.4. Use ProjectParameters.outSpatialReference instead.
* RouteParameters.barriers deprecated since version 4.11. Use pointBarriers, polygonBarriers, and/or polylineBarriers instead.
* AreaMeasurement2DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* AreaMeasurement2DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* AreaMeasurement3DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* AreaMeasurement3DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* BasemapLayerList.statusIndicatorsVisible deprecated since version 4.15. Use BasemapLayerList.visibleElements.statusIndicators instead.
* BasemapToggle.titleVisible deprecated since version 4.15. Use BasemapToggle.visibleElements.title instead.
* DirectLineMeasurement3DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* DirectLineMeasurement3DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* DistanceMeasurement2DViewModel.clearMeasurement deprecated since version 4.16. Use clear instead.
* DistanceMeasurement2DViewModel.newMeasurement deprecated since version 4.16. Use start instead.
* FeatureForm.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureFormViewModel.fieldConfig deprecated since version 4.16. Use FieldElement and/or GroupElement instead.
* FeatureTemplates.filterEnabled deprecated since version 4.15. Use FeatureTemplates.visibleElements.filter instead.
* LayerList.statusIndicatorsVisible deprecated since version 4.15. Use LayerList.visibleElements.statusIndicators instead.
* Popup.featureNavigationEnabled deprecated since version 4.15. Use Popup.visibleElements.featureNavigation instead.
* SliceViewModel.clearSlice deprecated since version 4.16. Use clear instead.
* SliceViewModel.newSlice deprecated since version 4.16. Use start instead.
* Slider.labelsVisible deprecated since version 4.15. Use Slider.visibleElements.labels instead.
* Slider.rangeLabelsVisible deprecated since version 4.15. Use Slider.visibleElements.rangeLabels instead.
