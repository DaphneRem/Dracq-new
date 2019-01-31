import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* coreUI imports */
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

/* perfect scrollbar import */
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

/* externals modules imports */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

/* store imports */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { selectedVenteReducer } from './+state/+selected-vente/selected-vente.reducer';
import { selectedVenteInitialState } from './+state/+selected-vente/selected-vente.init';

/* components imports */
import { AppComponent } from './app.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { LoginComponent } from './views/login/login.component';
import { TransactionsInProgressComponent } from './pages/transactions-in-progress/transactions-in-progress.component';
import { TransactionInProgressTableComponent } from './tables/transaction-in-progress-table/transaction-in-progress-table.component';

import { AppRoutingModule } from './app-routing.module';
import { CustomDatatablesModule } from './custom-datatables/custom-datatables.module';
import { TransactionsCompletedPageComponent } from './pages/transactions-completed-page/transactions-completed-page.component';
import { TransactionCompletedTableComponent } from './tables/transaction-completed-table/transaction-completed-table.component';

import { environment } from '../environments/environment';
import { TransactionCreationComponent } from './pages/transaction-creation/transaction-creation.component';
import { VenteDetailsModalComponent } from './modals/vente-details-modal/vente-details-modal.component';

/* const declarations */
const APP_CONTAINERS = [
  DefaultHomeComponent
];

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    TransactionsInProgressComponent,
    TransactionInProgressTableComponent,
    TransactionsCompletedPageComponent,
    TransactionCompletedTableComponent,
    TransactionCreationComponent,
    VenteDetailsModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),
    CustomDatatablesModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    PerfectScrollbarModule,
    NgbModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({selectedVente: selectedVenteReducer}, {initialState: {selectedVente: selectedVenteInitialState}}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    // StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
