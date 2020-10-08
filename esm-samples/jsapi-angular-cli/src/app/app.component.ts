import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import config from "@arcgis/core/config.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private view: any = null;

  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  title = 'ng-cli';

  async initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });

    const view = new MapView({
      container,
      map: webmap,
    });

    const bookmarks = new Bookmarks({
      view,
      // allows bookmarks to be added, edited, or deleted
      editingEnabled: true,
    });

    const bkExpand = new Expand({
      view,
      content: bookmarks,
      expanded: true,
    });

    // Add the widget to the top-right corner of the view
    view.ui.add(bkExpand, 'top-right');

    // bonus - how many bookmarks in the webmap?
    webmap.when(() => {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log('Bookmarks: ', webmap.bookmarks.length);
      } else {
        console.log('No bookmarks in this webmap.');
      }
    });

    this.view = view;
    return this.view.when();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): any {
    console.log('ngOnInit');
    (config as any).baseUrl = "/";
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then((mapView) => {
      // The map has been initialized
      console.log('mapView ready: ');
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
