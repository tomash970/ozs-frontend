import { BusinessUnitModel } from './../../shared/business-unit.model';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from './../../shared/data.service';
import { WorkerService } from './../worker.service';
import { WorkerModel } from '../../shared/worker.model';
import { Subscription } from 'rxjs/Subscription';
import { WorkPlaceModel } from '../../shared/work-place.model';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.less']
})
export class WorkerFormComponent implements OnInit {
  workPlaceArray: WorkPlaceModel[];
  businessUnitArray: BusinessUnitModel[] = [];
  id:         number;
  workerForm: FormGroup;
  editMode      = false;
  stringPattern = '^[a-žA-Ž- ]{2,20}$';
  workerModel: WorkerModel[];
  checkW = false;

  private workerSubscription:          Subscription;


  constructor (private route: ActivatedRoute,
               private workerService: WorkerService,
               private dataService: DataService,
               private router: Router) {}

  ngOnInit()  {
    this.workPlaceArray    = this.dataService.workPlaceArray;
    this.businessUnitArray = this.dataService.businessUnitArray;

    this.route.params.subscribe(
      (params: Params) => {
        this.id       = +params['id'];
        this.editMode =  params['id'] != null;
        this.initForm();
        this.onChangeUnit();
      }
    );

    this.workerModel = this.workerService.getWorkerModel();
    this.workerSubscription = this.workerService.workerData
    .subscribe(
      (workerModel: WorkerModel[]) => {
        this.workerModel = workerModel;
      });

      // This code returns edit veiw for only one worker, if more worker is required to be entered this line shud be comented or deleted
      if (this.workerModel.length !== 0) {
        this.router.navigate(['../worker', 0, 'edit']);
      }
  }

  onSubmit() {
      if (this.editMode) {
        this.workerService.editWorker(this.id, this.workerForm.value);
        this.router.navigate(['../worker', 0, 'edit']);
      } else {
        this.workerService.addWorkerModel(this.workerForm.value);
        // This code returns edit veiw for only one worker, if more worker is required to be entered this line shud be comented or deleted
        this.router.navigate(['../worker', 0, 'edit']);
      }
  }

  private initForm() {
    let worker_name        = '';
    let worker_second_name = '';
    let work_place         = null;
    let business_unit      = null;
    let boss_name          = '';
    let boss_second_name   = '';

    if (this.editMode) {
      const worker = this.workerService.getWorker(this.id);
      worker_name        = worker.worker_name;
      worker_second_name = worker.worker_second_name;
      work_place         = worker.work_place;
      business_unit      = worker.business_unit;
      boss_name          = worker.boss_name;
      boss_second_name   = worker.boss_second_name ;
    }

    this.workerForm = new FormGroup({
      'worker_name'       : new FormControl(worker_name, [Validators.required, Validators.pattern(this.stringPattern)]),
      'worker_second_name': new FormControl(worker_second_name, [Validators.required, Validators.pattern(this.stringPattern)]),
      'work_place'        : new FormControl(work_place, Validators.required),
      'business_unit'     : new FormControl(business_unit , Validators.required),
      'boss_name'         : new FormControl(boss_name, [Validators.required, Validators.pattern(this.stringPattern)]),
      'boss_second_name'  : new FormControl(boss_second_name, [Validators.required, Validators.pattern(this.stringPattern)])
    });
  }

  // Fill buisiness unit boss

  onChangeUnit() {
    // console.log(Object.keys(BusinessUnitName));
    // alert(Object.keys(BusinessUnitName));
    this.workerForm.get('business_unit').valueChanges.subscribe(val => {
      const boss_name = this.dataService.businessUnitArray[val].bu_boss_frist_name;
      const second_name = this.dataService.businessUnitArray[val].bu_boss_last_name;
    });

    // alert(boss_name);
  }
}
