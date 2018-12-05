import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { WorkerService } from './../worker.service';

import { WorkerModel } from './../../shared/worker.model';



@Component({
  selector: 'app-worker-table',
  templateUrl: './worker-table.component.html',
  styleUrls: ['./worker-table.component.less']
})
export class WorkerTableComponent implements OnInit {

  workerModel:        WorkerModel[];

  workerModelStatus = false;
  id: number;

  private workerSubscription:        Subscription;

  constructor(private workerService: WorkerService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.workerModel = this.workerService.getWorkerModel();
    this.workerSubscription = this.workerService.workerData
    .subscribe(
      (workerModel: WorkerModel[]) => {
        this.workerModel = workerModel;
      }
    );
    if (this.workerModel !== []) {
      this.workerModelStatus = true;
    }
  }

  onEditWorker(index) {
    this.router.navigate(['../worker', index, 'edit']);
  }

}
