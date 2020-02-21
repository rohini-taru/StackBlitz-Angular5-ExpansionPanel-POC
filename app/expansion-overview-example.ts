import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState: boolean = false;
  isSearchBox: boolean = false;

  stopProp(event: Event) {
    event.stopPropagation();
  }
  stopImProp(event: Event) {
    event.stopImmediatePropagation();  
  }
  onRefresh(event: Event) {
    this.stopProp(event);
    alert("refreshing");
  }
  onButtonClick(event: Event) {
    this.stopProp(event);
    alert("button clicked");
  }
  onClose(event: Event) {
    this.stopProp(event);
    alert("closing");
  }
  onSearch(event: Event) {
    //this.stopProp(event);
    this.isSearchBox = !this.isSearchBox;
  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */