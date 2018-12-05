import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ExtraordinarilyModel } from '../../../shared/extraordinarily.model';

import { MeansService } from '../../means.service';

@Component({
  selector: 'app-extraordinarily-table',
  templateUrl: './extraordinarily-table.component.html',
  styleUrls: ['./extraordinarily-table.component.less']
})
export class ExtraordinarilyTableComponent implements OnInit {

  extraordinarilyModel: ExtraordinarilyModel[];
  id: number;

  private extraordinarilySubscription: Subscription;

  constructor(private meansService: MeansService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.extraordinarilyModel = this.meansService.getExtraordinarilyModel();
    this.extraordinarilySubscription = this.meansService.extraordinarilyData
    .subscribe(
      (extraordinarilyModel: ExtraordinarilyModel[]) => {
        this.extraordinarilyModel = extraordinarilyModel;
      }
    );
  }

  onEditExtraordinarily(index) {
    this.router.navigate(['../means/extraordinarily', index, 'edit']);
  }

  onDeleteExtraordinarily(index: number) {
    this.meansService.deleteExtraordinarily(index);
    this.router.navigate(['../means/extraordinarily/new']);
  }

}
