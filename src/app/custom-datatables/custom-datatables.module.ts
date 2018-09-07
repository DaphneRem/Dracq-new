import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatatablesComponent } from './custom-datatables.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule
  ],
  declarations: [
    CustomDatatablesComponent,
  ]
})
export class CustomDatatablesModule { }
