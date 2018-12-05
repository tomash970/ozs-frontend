import { DataService } from './../shared/data.service';
import { Injectable } from '@angular/core';
import { WorkerModel } from '../shared/worker.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WorkerService {

  workerData    = new Subject<WorkerModel[]>();
  editingWorker = new Subject<number>();

  private workerModel: WorkerModel[] = [];

  constructor(private dataService: DataService) { }


//////////////////////// Add worker /////////////////////////////////////////
  addWorkerModel(newWorker: WorkerModel) {
    this.workerModel.push(newWorker);
    this.workerData.next(this.workerModel.slice());
  }

//////////////////////// Edit Worker ////////////////////////////////////
  editWorker(index: number, newWorkerModel: WorkerModel) {
    this.workerModel[index] = newWorkerModel;
    this.workerData.next(this.workerModel.slice());
  }

  getWorkerModel() {
      return this.workerModel.slice();
  }

  //////////////////////// Get Worker ////////////////////////////////////
  getWorker(index: number) {
      return this.workerModel[index];
  }

  //////////////////////// Get Worker work place id for fetch array of suits////////////////////////////////////
    getWorkerWorkPlaceId() {
      return this.workerModel[0]['id'];
  }

    checkWorker() {
      if (this.workerModel === []) {
        return true;
      } else {
        return false;
      }
    }

  ///////////////////////////////////////////////////////
    getWorkPlaceId() {
        const wp_name = this.workerModel[0]['work_place']['rm'];
        for (let i = 0; i < this.dataService.workPlaceArray.length; i++) {
            if (this.dataService.workPlaceArray[i]['rm'] === wp_name) {
                return this.dataService.workPlaceArray[i]['id'];
            }
        }
    }
}
