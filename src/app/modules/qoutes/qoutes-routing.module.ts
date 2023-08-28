import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QoutesComponent } from 'src/app/qoutes/qoutes.component';
import { QoutesModule } from './qoutes.module';
import { AllQoutesComponent } from 'src/app/qoutes/all-qoutes/all-qoutes.component';

const routes: Routes = [
  {path: '', component: QoutesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QoutesRoutingModule { }
