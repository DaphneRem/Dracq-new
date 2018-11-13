import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { LoginComponent } from './views/login/login.component';
import { TransactionsInProgressComponent } from './pages/transactions-in-progress/transactions-in-progress.component';
import { TransactionsCompletedPageComponent } from './pages/transactions-completed-page/transactions-completed-page.component';
import { TransactionCreationComponent } from './pages/transaction-creation/transaction-creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { 
    path: '', 
    component: DefaultHomeComponent,
    children: [
      {
        path: 'in-progress',
        component: TransactionsInProgressComponent
      },
      {
        path: 'completed',
        component: TransactionsCompletedPageComponent
      },
      {
        path: 'creation',
        component: TransactionCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

