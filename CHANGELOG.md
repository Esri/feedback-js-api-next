# Change log

The `next` version of 4.16 is now available.  Planned release date is July 2020.

## Point cluster labels

You can now label clusters with the count of points represented by the cluster, or any summary statistics used by the cluster popup, such as average, and predominant value. Labeling is configured on the labelingInfo property of `FeatureReductionCluster`. 
You can take advantage of all `LabelClass` functionality when labeling clusters.

New properties on `FeatureReductionCluster`:

- `labelingInfo` - An array of `LabelClass` defining labels for clusters.
- `labelsVisible` - `true` by default. Displays labels defined in `labelingInfo`.
- `clusterMinSize` - Sets the size in points for the smallest cluster. It may be necessary to make small clusters larger to properly fit some labels.
- `clusterMaxSize` - Sets the size in points for the largest cluster. All other sizes are linearly interpolated.
- `LabelClass.deconflictionStrategy = 'none'` - displays all labels in the LabelClass. This ensures all clusters have a label.

Samples:

- [CodePen: Basic labels with count in center of cluster](https://codepen.io/kekenes/pen/qBOyENR?editors=1000)
- [CodePen: Advanced labels with summary information in cluster](https://codepen.io/kekenes/pen/oNjMgzW?editable=true&editors=100)

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

* BUG-000125118: Fixed an issue where SVG symbols were unable to be printed if added as a PictureMarkerSymbol.
* BUG-000128672: Fixed an issue where the FeatureForm would not validate text fields for NULL values if the field did not allow this.
* BUG-000129390: Fixed an issue where the LayerSearchSource.zoomScale property fails to set zoom scale for the selected search result.
* BUG-000129738: Fixed an issue in LayerList where actions with the visible property set to false are still visible.
* GEONET-251354: Fixed an issue where the PrintTemplate did not support custom print templates, which affected both the PrintTask and Print widget.
* Fixed an issue where the Map and widgets stop rendering when the View container div visibility is set to hidden.
* Fixed an issue where the printed legend was styled incorrectly when using a RelationshipRenderer or a DotDensityRenderer. Requires a print service from version 10.8.1 or higher.
* Enhanced the Sublayer.createFeatureLayer() method to include the MapImageLayer.refreshInterval property value (if defined) for the created FeatureLayer.
* Enhanced the Directions widget and Search widget to display a notification when a user selects Use current location and the current location cannot be retrieved due to current browser restictions or settings.

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
