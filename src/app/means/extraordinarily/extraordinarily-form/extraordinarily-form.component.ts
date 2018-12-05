import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MeansService } from '../../means.service';
import { WorkerService } from './../../../worker/worker.service';
import { DataService } from './../../../shared/data.service';

import { ExtraordinarilyModel } from '../../../shared/extraordinarily.model';
import { ExceptionallyModel } from '../../../shared/exceptionally.model';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-extraordinarily-form',
  templateUrl: './extraordinarily-form.component.html',
  styleUrls: ['./extraordinarily-form.component.less']
})
export class ExtraordinarilyFormComponent implements OnInit {

  suitArray  = [];
  suitArray1 = [];
  suitArray2 = [];
  workerSuitId;
  extraordinarilyForm: FormGroup;
  stringPattern = '^[a-žA-Ž0-9/]{0,10}$';
  editMode = false;
  id: number;

  extraordinarilyModel: ExceptionallyModel[];

  private extraordinarilySubscription: Subscription;

  public myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd.mm.yyyy',
    dayLabels: {su: 'Ned', mo: 'Pon', tu: 'Uto', we: 'Sri', th: 'Čet', fr: 'Pet', sa: 'Sub'},
    monthLabels: { 1: 'Sij', 2: 'Vel', 3: 'Ožu', 4: 'Tra', 5: 'Svi', 6: 'Lip', 7: 'Srp', 8: 'Kol', 9: 'Ruj', 10: 'Lis', 11: 'Stu', 12: 'Pro' },
    selectBeginDateTxt: 'Odaberi početni datum',
    selectEndDateTxt: 'Odaberi krajnji datum'
};

  constructor(private dataService: DataService,
              private workerService: WorkerService,
              private route: ActivatedRoute,
              private meansService: MeansService,
              private router: Router) { }

  ngOnInit() {
    this.workerSuitId = this.workerService.getWorkPlaceId();
    this.suitArray1 = this.dataService.suitArray1;
    this.suitArray2 = this.dataService.suitArray2;
    switch (+this.workerSuitId) {
      case 1:
      this.suitArray = this.suitArray1;
      break;
      case 2:
      this.suitArray = this.suitArray2;
      break;
      default:
      this.suitArray = [];
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.id       = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

    this.extraordinarilyModel = this.meansService.getExtraordinarilyModel();
    this.extraordinarilySubscription = this.meansService.extraordinarilyData
    .subscribe(
      (extraordinarilyModel: ExtraordinarilyModel[]) => {
        this.extraordinarilyModel = extraordinarilyModel;
      }
    );
  }

  onSubmit() {

    if (this.extraordinarilyModel.length <= 9) {
      if (this.editMode) {
        this.meansService.editExtraordinarilyMean(this.id, this.extraordinarilyForm.value);
        this.router.navigate(['../means/extraordinarily', 'new']);
      } else {
          if (this.helperIfMeanExistInArray()) {
            this.meansService.addExtraordinarilyModel(this.extraordinarilyForm.value);
            this.extraordinarilyForm.reset();
          } else if (!this.helperIfMeanExistInArray()) {
            alert('Ovaj artikl ste već unijeli! Ako je potrebno više komada istog artikla, potrebno je povećati ');
          }
      }
    } else {
      alert('Maksimalno je moguće unijeti 10 artikala');
    }
  }

  private initForm() {
    let mean_name      = null;
    let mean_size      = '';
    let quantity       = null;
    let mydaterange    = null;
    let responsibility = '';

    if (this.editMode) {
      const extraordinarily = this.meansService.getExtraordinarily(this.id);
      mean_name      = extraordinarily.mean_name;
      mean_size      = extraordinarily.mean_size;
      quantity       = extraordinarily.quantity;
      mydaterange    = extraordinarily.mydaterange;
      responsibility = extraordinarily.responsibility;
    }

    this.extraordinarilyForm = new FormGroup({
      'mean_name'      : new FormControl(mean_name, Validators.required),
      'mean_size'      : new FormControl(mean_size, [Validators.required, Validators.pattern(this.stringPattern)]),
      'quantity'       : new FormControl(quantity, [Validators.required, Validators.min(1), Validators.max(9)]),
      'mydaterange'    : new FormControl(mydaterange, Validators.required),
      'responsibility' : new FormControl(responsibility, Validators.required)
    });
  }

  private helperIfMeanExistInArray() {
    for (let i = 0;  i < this.extraordinarilyModel.length ; i++) {
      if ( this.extraordinarilyModel[i].mean_name === this.extraordinarilyForm.value.mean_name) {
        return false;
      }
     }
     return true;
  }
}
