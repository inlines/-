import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-transfer',
    pathMatch: 'full'
  },
  {
    path: 'create-transfer',
    component: CreateTransferComponent
  },
  {
    path: 'transfer-history',
    component: TransferHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
