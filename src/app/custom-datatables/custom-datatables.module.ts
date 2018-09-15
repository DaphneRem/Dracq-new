import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomDatatablesComponent } from './custom-datatables.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    CustomDatatablesComponent,
  ],
  exports: [
    CustomDatatablesComponent,
  ]
})
export class CustomDatatablesModule { }
