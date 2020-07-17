# Change log

The `next` version of 4.17 is now available.  Planned release date is October 2020.

![Current build version](https://img.shields.io/npm/v/arcgis-js-api/next?label=Current%20build)

## Breaking changes

* None yet

## Bug fixes and enhancements

* None yet

## Deprecation

The following are deprecated and will be removed in a future release:

* Use of Internet Explorer 11 is deprecated as of version 4.16. Users are highly encouraged to move to a modern browser such as Mozilla Firefox, Google Chrome, Apple Safari, or Microsoft Edge. While Internet Explorer 11 continues to be supported, use of Internet Explorer 11 is  discouraged, and support will be discontinued at a future release. Additional notice will be provided prior to the removal of support.
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
