import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DataService } from './../../shared/data.service';

import { BusinessUnitModel } from '../../shared/business-unit.model';


@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.less']
})
export class BusinessUnitComponent implements OnInit {

  buForm: FormGroup;
  buArray: BusinessUnitModel[] = [];
  showBUArray: BusinessUnitModel;
  // initialBUId: number;
  // selected: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.buArray = this.dataService.businessUnitArray;
    // console.log(this.buArray);

    // calling function to get first id from array to
    this.initialBUHelperMethod();

    this.buForm = this.formBuilder.group({
      bu_name: '',
      bu_city: '',
      bu_street: '',
      bu_str_num: null, // number
      bu_boss_frist_name: '',
      bu_boss_last_name: ''
    });
  }

  onClickBU( id ) {
    this.showBUArray = this.buArray[id];
    // this.selected = id;
  }

  initialBUHelperMethod() {
    for (let i = 0; i < this.buArray.length; i++) {
      if (i === 0) {
        this.showBUArray = this.buArray[i];
        // console.log(this.showBUArray);
        // this.selected = this.buArray[i].id;
        // console.log('SELECTED ' + this.showBUArray[i].id);
        // this.initialBUId = +this.buArray[i].id;
      }
    }
  }

  // isActive(id) {
  //   return this.selected === id;
  // }
}
