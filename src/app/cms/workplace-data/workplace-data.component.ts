import { WorkPlaceModel } from './../../shared/work-place.model';
import { Component, OnInit } from '@angular/core';

import { DataService } from './../../shared/data.service';

@Component({
  selector: 'app-workplace-data',
  templateUrl: './workplace-data.component.html',
  styleUrls: ['./workplace-data.component.less']
})
export class WorkplaceDataComponent implements OnInit {
  workPlaceArray: WorkPlaceModel[];
  showWorkPlaceArray: WorkPlaceModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.workPlaceArray = this.dataService.workPlaceArray;

    this.initialWorkPlaceHelperMethod();
  }

  onClickWorkPlace(id) {
    this.showWorkPlaceArray = this.workPlaceArray[id];
  }

  initialWorkPlaceHelperMethod() {
    for (let i = 0; i < this.workPlaceArray.length; i++) {
      if (i === 0) {
        this.showWorkPlaceArray = this.workPlaceArray[i];
      }
    }
  }
}
