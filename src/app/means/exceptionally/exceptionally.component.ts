
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

// import { NgForm } from '@angular/forms';
// import { DataService } from './../../shared/data.service';
// import { ExceptionallyModel } from './../../shared/exceptionally.model';
// import { ExtraordinarilyModel } from './../../shared/extraordinarily.model';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-exceptionally',
  templateUrl: './exceptionally.component.html',
  styleUrls: ['./exceptionally.component.less']
})
export class ExceptionallyComponent implements OnInit, OnDestroy {

  // @ViewChild('f') extraForm: NgForm; // iznimno
  // subscriptionIznimno:    Subscription;
  // editingIznimnoIndex:    number;
  // editedIznimno:    OzsIznimnoModel;
  // suitArray2: any[];
  // suitArray1: any[];
  // suitArray =    [];
  // editModeIznimno    = false;
  // isValid            = false;
  // isHoverNazivOZS    = false;
  // notEmptyIznimno    = false;
  // wpID;

  // // entryEnd = false;

  // constructor(private dataService: DataService) {}

  ngOnInit() {
  //   this.wpID = this.dataService.getRMId();
  //   // this.wpID = 1;
  //   this.suitArray1 = this.dataService.suitArray1;
  //   this.suitArray2 = this.dataService.suitArray2;
  //   switch (+this.wpID) {
  //     case 1:
  //     this.suitArray = this.suitArray1;
  //     break;
  //     case 2:
  //     this.suitArray = this.suitArray2;
  //     break;
  //     default:
  //     this.suitArray = [];
  //   }

  //   this.subscriptionIznimno = this.dataService.editingIznimno.subscribe(
  //     (index: number) => {
  //       this.editingIznimnoIndex = index;
  //       // alert(this.editingIznimnoIndex);
  //       this.editModeIznimno = true;
  //       this.editedIznimno = this.dataService.getOzsIznimnoModelItem(index);
  //       // console.log(this.dataService.getOzsIznimnoModelItem(index));
  //       this.extraForm.setValue({
  //         naziv_ozs: this.editedIznimno.naziv_ozs,
  //         vel_broj:  this.editedIznimno.vel_broj,
  //         kom_par:   this.editedIznimno.kom_par
  //       });
  //     }
  //   );



  }


  // onSubmit(form: NgForm) {
  //   console.log(this.extraForm);
  //   const value = form.value;


  //     const newOzsIznimnoModel = new OzsIznimnoModel(
  //       value.naziv_ozs,
  //       value.vel_broj,
  //       value.kom_par
  //     );

  //     if (this.editModeIznimno) {
  //       this.dataService.editOzsIznimnoModelItem(this.editingIznimnoIndex, newOzsIznimnoModel);
  //     } else {
  //       this.dataService.addOzsIznimnoModel(newOzsIznimnoModel);
  //       this.notEmptyIznimno = true;
  //     }


  //    // console.log( newOzsIznimnoModel);

  //   this.editModeIznimno    = false;

  //   form.reset();
  // }

  //    changeValue(valid: boolean) {
  //      this.isValid = valid;
  //    }

  //   // endOfEntry() {
  //   //   this.dataService.submitionForm.next();
  //   //   // this.entryEnd = true;
  //   // }


   ngOnDestroy() {
  //   this.subscriptionIznimno.unsubscribe();
   }

}
