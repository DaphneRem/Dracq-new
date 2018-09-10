import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { LoginComponent } from './views/login/login.component';
import { TransactionsInProgressComponent } from './pages/transactions-in-progress/transactions-in-progress.component';

const routes: Routes = [
  { path: '', redirectTo: 'in-progress', pathMatch: 'full' },
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

