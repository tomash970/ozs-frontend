import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-start',
  templateUrl: './worker-start.component.html',
  styleUrls: ['./worker-start.component.less']
})
export class WorkerStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    alert('Ovaj mali program izrađen je u Angular 5 framework-u, trenutno nije spojen na bazu podataka i nema CMS. Ove funkcionalnosti su u izradi!');
  }

}
