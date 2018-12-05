import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerComponent } from './worker/worker.component';
import { MeansComponent } from './means/means.component';
import { PdfComponent } from './pdf/pdf.component';
import { WorkerFormComponent } from './worker/worker-form/worker-form.component';
import { ExtraordinarilyFormComponent } from './means/extraordinarily/extraordinarily-form/extraordinarily-form.component';
import { ExceptionallyFormComponent } from './means/exceptionally/exceptionally-form/exceptionally-form.component';
import { WorkerStartComponent } from './worker/worker-start/worker-start.component';
import { ExtraordinarilyComponent } from './means/extraordinarily/extraordinarily.component';
import { ExceptionallyComponent } from './means/exceptionally/exceptionally.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { CmsComponent } from './cms/cms.component';
import { StatisticsComponent } from './cms/statistics/statistics.component';
import { WorkplaceDataComponent } from './cms/workplace-data/workplace-data.component';
import { OzsDataComponent } from './cms/ozs-data/ozs-data.component';
import { BusinessUnitComponent } from './cms/business-unit/business-unit.component';
import { UserDataComponent } from './cms/user-data/user-data.component';


const appRoutes: Routes = [
  // { path: '', redirectTo: '/worker', pathMatch: 'full' },
  { path: '', component: WorkerStartComponent },
  { path: 'worker', component: WorkerComponent, children: [
   //  {path: '', component: WorkerStartComponent },
    {path: 'new', component: WorkerFormComponent },
    {path: ':id/edit', component: WorkerFormComponent }
  ] },
  // { path: 'means', component: MeansComponent },
  { path: 'means/exceptionally', component: ExceptionallyComponent, children: [
    {path: 'new', component: ExceptionallyFormComponent },
    {path: ':id/edit', component: ExceptionallyFormComponent }
  ] },
  { path: 'means/extraordinarily', component: ExtraordinarilyComponent, children: [
    {path: 'new', component: ExtraordinarilyFormComponent },
    {path: ':id/edit', component: ExtraordinarilyFormComponent }
  ] },
  { path: 'auth/register', component: RegisterComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/logout', component: LogoutComponent},
  { path: 'cms', component: CmsComponent, children: [
     {path: 'statistics', component: StatisticsComponent, pathMatch: 'full' },
     {path: 'ozs-data', component: OzsDataComponent },
     {path: 'workplace-data', component: WorkplaceDataComponent },
     {path: 'business-unit', component: BusinessUnitComponent },
     {path: 'user-data', component: UserDataComponent }
   ] },
  { path: 'pdf', component: PdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
