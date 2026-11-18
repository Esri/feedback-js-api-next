# Change log

The `next` version of 6.0 is now available. Planned release date is February 2027.

![Current build version](https://img.shields.io/npm/v/@arcgis/core/next?label=Current%20build)

## Bug fixes and enhancements

TBD

## Breaking Changes

With semantic versioning, 6.0 is a major release and includes breaking changes. Before upgrading to a new major version of the SDK, we recommend thoroughly reviewing the breaking changes in this section. For more information, see the [FAQ on how breaking changes are managed](https://developers.arcgis.com/javascript/latest/faq/#how-are-breaking-changes-managed).

### Map components breaking changes

The following components, methods, properties and events have been removed from the API:

| Component/Property/Method/Event | Alternate option | Version deprecated |
| --- | --- | --- |
| `arcgis-scale-range-slider` component | Use [`arcgis-slider-scale-range`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-slider-scale-range/) instead.                                                          | 5.1 |
| `arcgis-slider-scale-range` `LowerCaseRegion` type | Use [`Region`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-slider-scale-range/#Region) instead. | 5.2 |
| `arcgis-slider-scale-range` `UpperCaseRegion` type | Use [`Uppercase<Region>`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-slider-scale-range/#Region) instead. | 5.2 |
| `arcgis-slider-scale-range` `SupportedRegion` type | Use [`Region \| Uppercase<Region>`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-slider-scale-range/#Region) instead. | 5.2 |
| `arcgis-swipe` `leadingLayers` property | Use [`startLayers`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-swipe/#startLayers) instead.                                                                       | 5.0 |
| `arcgis-swipe` `trailingLayers` property | Use [`endLayers`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-swipe/#endLayers) instead.                                                                          | 5.0 |
| `arcgis-swipe` `swipePosition` property | Use [`position`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-swipe/#position) instead.                                                                             | 5.0 |
| `arcgis-utility-network-validate-topology` component | Use the [Utility Network Validate Network Topology component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-utility-network-validate-network-topology/) instead. See [migration guidance](https://developers.arcgis.com/javascript/latest/utility-network/editing-utility-networks/#migrate-from-the-legacy-topology-validation-apis). | 5.1 |
| `arcgis-value-picker-legacy` component | Use the [Value Picker component](https://developers.arcgis.com/javascript/latest/references/common-components/components/arcgis-value-picker/) and its label, slider, combobox, or collection sub-components instead. | 5.1 |

### Charts components breaking changes

- List out any breaking changes in Charts components

The following components, methods, properties and events have been removed from the API:

| Component/Property/Method/Event | Alternate option | Version deprecated |
| --- | --- | --- |
| `SupportedLayer` interface | Use [`ChartLayer`](https://developers.arcgis.com/javascript/latest/references/charts-components/interfaces/#ChartLayer) or [`ChartLayerInput`](https://developers.arcgis.com/javascript/latest/references/charts-components/interfaces/#ChartLayerInput) instead. | 5.2 |
| `SupportedRasterLayer` interface | Use [`ChartLayerInput`](https://developers.arcgis.com/javascript/latest/references/charts-components/interfaces/#ChartLayerInput) instead. | 5.2 |
| `RESTFontDecoration` variable | No alternate option available. | 5.1 |
| `RESTFontStyle` variable | No alternate option available. | 5.1 |
| `RESTFontWeight` variable | No alternate option available. | 5.1 |
| `RESTHorizontalAlignment` variable | No alternate option available. | 5.1 |
| `RESTUnits` variable | No alternate option available. | 5.1 |
| `RESTVerticalAlignment` variable | No alternate option available. | 5.1 |
| `ChartOptions.hideLoaderAnimation` property | No alternate option available. | 5.2 |
| `ChartOptions.hideZeroCountCategories` property | No alternate option available. | 5.2 |
| `filterByExtent` property | Use [`filterByViewExtent`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-chart/#filterByViewExtent) instead. | 5.1 |
| `layerFieldsChangePolicy` property | No alternate option available. | 5.1 |
| `layerFilterChangePolicy` property | No alternate option available. | 5.1 |
| `layerRendererChangePolicy` property | No alternate option available. | 5.1 |
| `legendPosition` property | Use [`legendPosition`](https://developers.arcgis.com/javascript/latest/references/charts-components/model/bar-chart-model/bar-chart-model/#legendPosition) property on the charts model instead. | 5.0 |
| `rotation` property| Use [`rotated`](https://developers.arcgis.com/javascript/latest/references/charts-components/model/bar-chart-model/bar-chart-model/#rotated) property on the charts model or [`rotated`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-chart/#rotated) property instead. | 5.0 |

##### From `arcgis-charts-action-bar` component

| Component/Property/Method/Event | Alternate option | Version deprecated |
| --- | --- | --- |
| `clearSelectionToggle` property | Use [`clearSelectionActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#clearSelectionActive) instead. | 5.2 |
| `disableCSVExportForChartTypes` property | Use [`csvExportExclusionList`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#csvExportExclusionList) instead. | 5.2 |
| `editChartState` property |  Use [`editChartEnabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#editChartEnabled) instead. | 5.2 |
| `exportActionState` property | Use [`exportActionDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#exportActionDisabled) instead. | 5.2 |
| `exportAsCSVState` property | Use [`exportAsCSVDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#exportAsCSVDisabled) instead. | 5.2 |
| `exportAsImageState` property | Use [`exportAsImageDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#exportAsImageDisabled) instead. | 5.2 |
| `filterByExtentState` property | Use [`filterByViewExtentDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#filterByViewExtentDisabled) instead. | 5.2 |
| `filterByExtentTitle` property | Use [`filterByViewExtentTitle`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#filterByViewExtentTitle) instead. | 5.2 |
| `filterByExtentToggle` property | Use [`filterByViewExtentActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#filterByViewExtentActive) instead. | 5.2 |
| `filterBySelectionState` property | Use [`filterBySelectionDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#filterBySelectionDisabled) instead. | 5.2 |
| `filterBySelectionToggle` property | Use [`filterBySelectionActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#filterBySelectionActive) instead. | 5.2 |
| `fullExtentState` property | Use [`fullExtentDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#fullExtentDisabled) instead. | 5.2 |
| `fullExtentToggle` property | Use [`fullExtentActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#fullExtentActive) instead. | 5.2 |
| `legendState` property | Use [`legendDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#legendDisabled) instead. | 5.2 |
| `legendToggle` property | Use [`legendActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#legendActive) instead. | 5.2 |
| `rotateChartState` property | Use [`rotateChartDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#rotateChartDisabled) instead. | 5.2 |
| `rotateChartToggle` property | Use [`rotateChartActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#rotateChartActive) instead. | 5.2 |
| `selectionState` property | Use [`selectionDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#selectionDisabled) instead. | 5.2 |
| `switchSelectionState` property | Use [`switchSelectionDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#switchSelectionDisabled) instead. | 5.2 |
| `switchSelectionToggle` property | Use [`switchSelectionActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#switchSelectionActive) instead. | 5.2 |
| `zoomState` property | Use [`zoomDisabled`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#zoomDisabled) instead. | 5.2 |
| `zoomToggle` property | Use [`zoomActive`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/#zoomActive) instead. | 5.2 |

### Common components breaking changes

TBD


### Coding components breaking changes

TBD

### AI components breaking changes

TBD


### Core API breaking changes

The following classes, methods, properties and events were previously deprecated and have now been removed from the API:

| Class/Property/Method/Event                              | Alternate option                                                                                                                                                                                                                                         | Version deprecated |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `DirectionalPad` widget and its `VisibleElements` support class | Use the [Directional Pad component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-directional-pad/) instead. | 4.32      |
| `DirectionalPadViewModel` and associated public types (`DirectionalPadProperties`, `DirectionalPadViewModelProperties`, `DirectionalPadViewModelState`, `DirectionalPadAngle`, and `Vector`) | Use the [Directional Pad component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-directional-pad/) instead. | 5.2 |
| `esri/widgets/Track` and `TrackEvents`                   | Use the [Track component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-track/) instead.                                                                                                                                                | 4.32               |
| `esri/widgets/Track/TrackViewModel` and `TrackViewModelEvents` | Use the [Track component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-track/) instead.                                                                                                                                        | 5.1                |
| `TrackViewModelProperties`, `TrackViewModelState`, `TrackViewModelTrackEvent`, `TrackViewModelTrackErrorEvent`, and `PositionFilterFunction` | Use the [Track component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-track/) and its corresponding properties, state, and events instead. | 5.2 |
| `UtilityNetworkValidateTopology` widget and its associated public types | Use the [Utility Network Validate Network Topology component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-utility-network-validate-network-topology/) instead. See [migration guidance](https://developers.arcgis.com/javascript/latest/utility-network/editing-utility-networks/#migrate-from-the-legacy-topology-validation-apis). | 5.0 |
| `UtilityNetworkValidateTopologyViewModel` and its associated public types | Use [UtilityNetwork.validateTopology()](https://developers.arcgis.com/javascript/latest/references/core/networks/UtilityNetwork/#validateTopology) for workflows without a component UI. See [programmatic validation](https://developers.arcgis.com/javascript/latest/utility-network/editing-utility-networks/#validate-network-topology-using-the-utility-network-class). | 5.0 |
| `esri/widgets/VideoPlayer` and `VideoPlayerProperties` | Use the [Video Player component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-video-player/) instead. | 4.33 |
| `esri/widgets/VideoPlayer/VideoPlayerViewModel` and `VideoPlayerViewModelProperties` | Use the [Video Player component](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-video-player/) instead. | 5.2 |
| `Mesh.createBox`, `Mesh.createSphere`, `Mesh.createCylinder`, `Mesh.createPlane`, `Mesh.createFromPolygon`, `Mesh.createFromGLTF`, and `CreateFromPolygonParameters` | Use the corresponding functions in [meshUtils](https://developers.arcgis.com/javascript/latest/references/core/geometry/support/meshUtils/) and update imports and parameter types accordingly. Unlike `Mesh.createFromPolygon()`, `meshUtils.createFromPolygon()` is asynchronous and returns a promise, update callers to await the result. | 5.1 |

## Deprecations

New deprecations for version 6.0 are documented on this page.

See the [FAQ](https://developers.arcgis.com/javascript/latest/faq/#what-does-it-mean-when-an-aspect-of-the-sdk-is-deprecated) for more information about the deprecation process and removal timelines.

### Core API deprecations

#### New in 6.0

New deprecations for 6.0 are TBD.

#### Previously announced deprecations

- The version 6.0 (Q1 2027) release is a major release and will *remove* many deprecated APIs, including widgets and UI aspects of `MapView`, `SceneView`, and `LinkChartView`, such as popup and the view UI (which managed default widgets in the view). **Developers should migrate now:** replace widgets with components, and migrate from `MapView`, `SceneView`, and `LinkChartView` to the recommended [`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/), [`arcgis-scene`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/), and [`arcgis-link-chart`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-link-chart/) components. To prepare for 6.0, review the [migration guide](https://developers.arcgis.com/javascript/latest/migrating-to-components/), updated [programming patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/), [tutorials](https://developers.arcgis.com/javascript/latest/tutorials/), and [samples built with components](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components).
- Importing JS Maps SDK modules using `require()` is deprecated since version 5.0 and may be removed at version 6.0. [`$arcgis.import()`](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/future-proof-your-arcgis-javascript-app) is the preferred way to import modules in your HTML applications.
- The `__esri` namespace used in TypeScript is no longer supported and will be removed at 6.0. Use individual ESM imports to directly import types from their respective module files instead. See the [TypeScript import changes](https://developers.arcgis.com/javascript/latest/release-notes/#typescript-import-changes) section of the Release notes for more information.

For all other previously announced core API deprecations, see the [Release notes](https://developers.arcgis.com/javascript/latest/release-notes/#core-api-changes).

### Map components deprecations

#### New in 

New deprecations for 6.0 are TBD.

#### Previously announced deprecations

For previously announced map component deprecations, see the [Release notes](https://developers.arcgis.com/javascript/latest/release-notes/#map-components-changes).

### Charts components deprecations

#### New in 6.0

New deprecations for 6.0 are TBD.

#### Previously announced deprecations

For previously announced charts component deprecations, see the [Release notes](https://developers.arcgis.com/javascript/latest/release-notes/#charts-components-changes).
