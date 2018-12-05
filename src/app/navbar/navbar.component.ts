import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker/worker.service';
import { WorkerModel } from '../shared/worker.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  workerModel: WorkerModel[];
  workerNav = false;

  private workerSubscription:          Subscription;

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.workerModel = this.workerService.getWorkerModel();
    this.workerSubscription = this.workerService.workerData
    .subscribe(
      (workerModel: WorkerModel[]) => {
        this.workerModel = workerModel;
        if (this.workerModel.length !== 0) {
          this.workerNav = true;
        }
      });


  }

}
