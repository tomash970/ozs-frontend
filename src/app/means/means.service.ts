import { WorkerService } from './../worker/worker.service';
import { ExceptionallyModel } from './../shared/exceptionally.model';
import { ExtraordinarilyModel } from './../shared/extraordinarily.model';
import { DataService } from './../shared/data.service';
import { Injectable } from '@angular/core';
import { WorkerModel } from '../shared/worker.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MeansService {

  extraordinarilyData = new Subject<ExtraordinarilyModel[]>();
  exceptionallyData   = new Subject<ExceptionallyModel[]>();

  private extraordinarilyModel: ExtraordinarilyModel[] = [];
  private exceptionallyModel: ExceptionallyModel[] = [];

  constructor(private dataService: DataService, private workerService: WorkerService) { }

/////////////////////// Exceptionally ////////////////////////
addExceptionallyModel(newExceptionallyMean: ExceptionallyModel) {
    this.exceptionallyModel.push(newExceptionallyMean);
    this.exceptionallyData.next(this.exceptionallyModel.slice());
  }

  editExceptionallyMean(index: number, newExceptionallyModel: ExceptionallyModel) {
    this.exceptionallyModel[index] = newExceptionallyModel;
    this.exceptionallyData.next(this.exceptionallyModel.slice());
  }

  getExceptionallyModel() {
    return this.exceptionallyModel.slice();
  }

  getExceptionally(index: number) {
    return this.exceptionallyModel[index];
  }

  deleteExceptionally(index: number) {
    this.exceptionallyModel.splice(index, 1);
    this.exceptionallyData.next(this.exceptionallyModel.slice());
  }

  /////////////////////// Extraordinarily ////////////////////////
addExtraordinarilyModel(newExtraordinarilyMean: ExtraordinarilyModel) {
    this.extraordinarilyModel.push(newExtraordinarilyMean);
    this.extraordinarilyData.next(this.extraordinarilyModel.slice());
  }

  editExtraordinarilyMean(index: number, newExtraordinarilyModel: ExtraordinarilyModel) {
    this.extraordinarilyModel[index] = newExtraordinarilyModel;
    this.extraordinarilyData.next(this.extraordinarilyModel.slice());
  }

  getExtraordinarilyModel() {
    return this.extraordinarilyModel.slice();
  }

  getExtraordinarily(index: number) {
    return this.extraordinarilyModel[index];
  }

  deleteExtraordinarily(index: number) {
    this.extraordinarilyModel.splice(index, 1);
    this.extraordinarilyData.next(this.extraordinarilyModel.slice());
  }

}
