# Change log

The `next` version of 4.16 is now available.  Planned release date is July 2020.

## Breaking changes

### Modernization

* Native Promise has been activated by default. The `has` flag `"esri-native-promise"` is no longer supported.
* Classes are now using native class syntax instead of `dojo/_base/declare`. If you built classes like custom widgets, some upgrade can be done.
  * Multiple class inheritance is no longer supported.
  * The current class syntax still works but will be deprecated. To update your TS classes:
    * Remove the `amd-dependency` comments, no longer necessary
    * add `importHelpers: true` to you tsconfig.json compiler options. See [TypeScript documentation](https://www.typescriptlang.org/v2/en/tsconfig#importHelpers) for more details.
    * remove use of `declared`.
    
Here is an example of before and after the update
  
**Previous syntax**
  
```ts
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Accessor = require("esri/core/Accessor");

import { subclass, declared } from "esri/core/accessorSupport/decorators";

@subclass("esri.guide.Color")
class Color extends declared(Accessor) {

}
```

**New syntax**
  
```ts
import Accessor = require("esri/core/Accessor");

import { subclass } from "esri/core/accessorSupport/decorators";

@subclass("esri.guide.Color")
class Color extends Accessor {

}
```

## Bug fixes and enhancements

* TBD

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
