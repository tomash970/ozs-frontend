import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { MeansService } from './means/means.service';
import { WorkerService } from './worker/worker.service';
import { DataService } from './shared/data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeansComponent } from './means/means.component';
import { ExceptionallyComponent } from './means/exceptionally/exceptionally.component';
import { ExtraordinarilyComponent } from './means/extraordinarily/extraordinarily.component';
import { ExceptionallyTableComponent } from './means/exceptionally/exceptionally-table/exceptionally-table.component';
import { ExceptionallyFormComponent } from './means/exceptionally/exceptionally-form/exceptionally-form.component';
import { ExtraordinarilyTableComponent } from './means/extraordinarily/extraordinarily-table/extraordinarily-table.component';
import { ExtraordinarilyFormComponent } from './means/extraordinarily/extraordinarily-form/extraordinarily-form.component';
import { WorkerTableComponent } from './worker/worker-table/worker-table.component';
import { WorkerFormComponent } from './worker/worker-form/worker-form.component';
import { WorkerComponent } from './worker/worker.component';
import { PdfComponent } from './pdf/pdf.component';
import { WorkerStartComponent } from './worker/worker-start/worker-start.component';
import { CmsComponent } from './cms/cms.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { OzsDataComponent } from './cms/ozs-data/ozs-data.component';
import { StatisticsComponent } from './cms/statistics/statistics.component';
import { WorkplaceDataComponent } from './cms/workplace-data/workplace-data.component';
import { BusinessUnitComponent } from './cms/business-unit/business-unit.component';
import { UserDataComponent } from './cms/user-data/user-data.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MeansComponent,
    ExceptionallyComponent,
    ExtraordinarilyComponent,
    ExceptionallyTableComponent,
    ExceptionallyFormComponent,
    ExtraordinarilyTableComponent,
    ExtraordinarilyFormComponent,
    WorkerTableComponent,
    WorkerFormComponent,
    WorkerComponent,
    PdfComponent,
    WorkerStartComponent,
    CmsComponent,
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    OzsDataComponent,
    StatisticsComponent,
    WorkplaceDataComponent,
    BusinessUnitComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDateRangePickerModule,
    AppRoutingModule
  ],
  providers: [DataService, WorkerService, MeansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
