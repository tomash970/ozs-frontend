import { Component, OnInit } from '@angular/core';
import { ExceptionallyModel } from '../../../shared/exceptionally.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MeansService } from '../../means.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-exceptionally-table',
  templateUrl: './exceptionally-table.component.html',
  styleUrls: ['./exceptionally-table.component.less']
})
export class ExceptionallyTableComponent implements OnInit {

  exceptionallyModel: ExceptionallyModel[];
  id: number;

  private exceptionallySubscription: Subscription;

  constructor(private meansService: MeansService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.exceptionallyModel = this.meansService.getExceptionallyModel();
    // setTimeout(this.workerModel, 1000);
    this.exceptionallySubscription = this.meansService.exceptionallyData
    .subscribe(
      (exceptionallyModel: ExceptionallyModel[]) => {
        this.exceptionallyModel = exceptionallyModel;
        // this.workerModelStatus = true;
      }
    );

    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.workerModelIndex = this.workerService.getWorker(this.id);
    //     }
    //   );
  }

  onEditExceptionally(index) {
    this.router.navigate(['../means/exceptionally', index, 'edit']);
  }

  onDeleteExceptionally(index: number) {
    this.meansService.deleteExceptionally(index);
    this.router.navigate(['../means/exceptionally/new']);
  }
}
