import { Component, OnInit } from '@angular/core';

import { DataService } from './../../shared/data.service';

@Component({
  selector: 'app-ozs-data',
  templateUrl: './ozs-data.component.html',
  styleUrls: ['./ozs-data.component.less']
})
export class OzsDataComponent implements OnInit {

  suitArray: {id: number, so: string};

  constructor (private dataService: DataService) { }

  ngOnInit() {


  }

}
