import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTransferComponent } from './components/create-transfer/create-transfer.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { LocalStorageService } from './services/local-storage.service';
import { TransferDataService } from './services/transfer-data.service';
import { LocalStorageKey } from './tokens/localstorage-key.token';
import { YearMonthSelectorComponent } from './components/year-month-selector/year-month-selector.component';


export const AppConfigureTestingModule = () => {
  return TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      CreateTransferComponent,
      TransferHistoryComponent,
      YearMonthSelectorComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      NgxMaskModule.forRoot(),
    ],
    providers: [
      {
        provide: LocalStorageKey,
        useValue: 'demo-transfers'
      },
      LocalStorageService,
      TransferDataService
    ],
  })
}