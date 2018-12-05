import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as jsPDF from 'jspdf';

import { ExceptionallyModel } from '../shared/exceptionally.model';
import { WorkerModel } from '../shared/worker.model';
import { ExtraordinarilyModel } from '../shared/extraordinarily.model';

import { WorkerService } from './../worker/worker.service';
import { MeansService } from '../means/means.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.less']
})
export class PdfComponent implements OnInit {
  workerName: string;
  workerSecondName: string;
  workPlaceId: number;
  workPlaceName: string;
  businessUnitName: string;
  bossName: string;
  bossSecondName: string;
  today = Date.now();

  extraordinarilyModel: ExtraordinarilyModel[];
  exceptionallyModel:   ExceptionallyModel[];
  workerModel:          WorkerModel[];

  private exceptionallySubscription:   Subscription;
  private extraordinarilySubscription: Subscription;
  private workerSubscription:          Subscription;

  constructor(private meansService: MeansService, private workerService: WorkerService) { }

  ngOnInit() {
    this.extraordinarilyModel = this.meansService.getExtraordinarilyModel();
    this.extraordinarilySubscription = this.meansService.extraordinarilyData
    .subscribe(
      (extraordinarilyModel: ExtraordinarilyModel[]) => {
        this.extraordinarilyModel = extraordinarilyModel;

      }
    );

    this.exceptionallyModel = this.meansService.getExceptionallyModel();
    this.exceptionallySubscription = this.meansService.exceptionallyData
    .subscribe(
      (exceptionallyModel: ExceptionallyModel[]) => {
        this.exceptionallyModel = exceptionallyModel;
      }
    );

    this.workerModel = this.workerService.getWorkerModel();
    this.workerSubscription = this.workerService.workerData
    .subscribe(
      (workerModel: WorkerModel[]) => {
        this.workerModel = workerModel;
      }
    );
    this.workerName = this.workerModel[0].worker_name;
    this.workerSecondName = this.workerModel[0].worker_second_name;
    this.workPlaceId = this.workerModel[0].work_place['srm'];
    this.workPlaceName = this.workerModel[0].work_place['rm'];
    this.businessUnitName = this.workerModel[0].business_unit['name'];
    this.bossName = this.workerModel[0].boss_name;
    this.bossSecondName = this.workerModel[0].boss_second_name;
  }

  downloadPdf(): void {
    let printContents, popupWin;
    printContents = document.getElementById('pdfContent').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
          <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.0/cerulean/bootstrap.min.css">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">

        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
