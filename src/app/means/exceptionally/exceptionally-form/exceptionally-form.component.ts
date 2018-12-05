import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ExceptionallyModel } from './../../../shared/exceptionally.model';
import { WorkerService } from './../../../worker/worker.service';
import { DataService } from './../../../shared/data.service';
import { MeansService } from './../../means.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-exceptionally-form',
  templateUrl: './exceptionally-form.component.html',
  styleUrls: ['./exceptionally-form.component.less']
})
export class ExceptionallyFormComponent implements OnInit {

  suitArray  = [];
  suitArray1 = [];
  suitArray2 = [];
  workerSuitId;
  exceptionallyForm: FormGroup;
  stringPattern = '^[a-žA-Ž0-9/]{0,10}$';
  editMode = false;
  id: number;

  exceptionallyModel: ExceptionallyModel[];

  private exceptionallySubscription: Subscription;

  constructor(private dataService: DataService,
              private workerService: WorkerService,
              private route: ActivatedRoute,
              private meansService: MeansService,
              private router: Router) { }

  ngOnInit() {
    // alert('Jebenica!!!!');
    this.workerSuitId = this.workerService.getWorkPlaceId();
    alert(this.workerSuitId);
    // this.suitArray = this.dataService




    this.suitArray1 = this.dataService.suitArray1;
    console.log('OVO JE suit array1' + this.suitArray1);
    this.suitArray2 = this.dataService.suitArray2;
    console.log('OVO JE suit array2' + this.suitArray2);
    switch (+this.workerSuitId) {
      case 1:
      this.suitArray = this.suitArray1;
      break;
      case 2:
      this.suitArray = this.suitArray2;
      break;
      default:
      this.suitArray = this.suitArray2;
    }


    this.route.params.subscribe(
      (params: Params) => {
        this.id       = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

    this.exceptionallyModel = this.meansService.getExceptionallyModel();
    // setTimeout(this.workerModel, 1000);
    this.exceptionallySubscription = this.meansService.exceptionallyData
    .subscribe(
      (exceptionallyModel: ExceptionallyModel[]) => {
        this.exceptionallyModel = exceptionallyModel;
        // this.workerModelStatus = true;
         console.log('OVO JE ONO ŠTO TRAŽIM' + this.exceptionallyModel);
      }
    );

    console.log('OVO JE ONO ŠTO TRAŽIM' + this.exceptionallyModel);


  }

  onSubmit() {
    if (this.exceptionallyModel.length <= 9) {
      if (this.editMode) {
        this.meansService.editExceptionallyMean(this.id, this.exceptionallyForm.value);
        this.router.navigate(['../means/exceptionally', 'new']);
      } else {
          if (this.helperIfMeanExistInArray()) {
            this.meansService.addExceptionallyModel(this.exceptionallyForm.value);
            this.exceptionallyForm.reset();
          } else if (!this.helperIfMeanExistInArray()) {
            alert('Ovaj artikl ste već unijeli! Ako je potrebno više komada istog artikla, potrebno je povećati ');
          }
      }
    } else {
      alert('Maksimalno je moguće unijeti 10 artikala');
    }

  }

  private initForm() {
    let mean_name = null;
    let mean_size = '';
    let quantity  = null;

    if (this.editMode) {
      const exceptionally = this.meansService.getExceptionally(this.id);
      mean_name = exceptionally.mean_name;
      mean_size = exceptionally.mean_size;
      quantity  = exceptionally.quantity;
    }

    this.exceptionallyForm = new FormGroup({
      'mean_name': new FormControl(mean_name, Validators.required),
      'mean_size': new FormControl(mean_size, [Validators.required, Validators.pattern(this.stringPattern)]),
      'quantity' : new FormControl(quantity, [Validators.required, Validators.min(1), Validators.max(9)])
    });
  }


  private helperIfMeanExistInArray() {
    for (let i = 0;  i < this.exceptionallyModel.length ; i++) {
      if ( this.exceptionallyModel[i].mean_name === this.exceptionallyForm.value.mean_name) {
        return false;
      }
     }
     return true;
  }

}
