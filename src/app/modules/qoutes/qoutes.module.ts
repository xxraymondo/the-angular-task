import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QoutesRoutingModule } from './qoutes-routing.module';
import { AllQoutesComponent } from 'src/app/qoutes/all-qoutes/all-qoutes.component';
import { SingleQouteComponent } from 'src/app/qoutes/single-qoute/single-qoute.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllQoutesComponent,
    SingleQouteComponent
   
  ],
  imports: [
    CommonModule,
    QoutesRoutingModule, FormsModule
  ]
})
export class QoutesModule { }
