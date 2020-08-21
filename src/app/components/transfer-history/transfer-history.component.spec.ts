import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigureTestingModule } from '../../app.testing';
import { TransferHistoryComponent } from './transfer-history.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

describe('TransferHistoryComponent', () => {
  let component: TransferHistoryComponent;
  let fixture: ComponentFixture<TransferHistoryComponent>;
  let localStorageService: LocalStorageService;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferHistoryComponent);
    localStorageService = TestBed.get(LocalStorageService);
    component = fixture.componentInstance;
    spyOn(localStorageService, 'removeTransferRecord').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call localStorage after remove', () => {
    const testData = {
      id: '1',
      senderCardDisplayName: '****11111111****',
      receiverCardDisplayName: '****11111112****',
      date: '20.02.2020',
      senderCardNum: '1111111111111111',
      receiverCardNum: '2222222222222222',
      senderName: 'TEST sender',
      activeTillMonth: 1,
      activeTillYear: 2021,
      amount: 1000
    };
    component.transferListItems = [testData];
    component.removeTransfer(testData, 1);
    expect(localStorageService.removeTransferRecord).toHaveBeenCalledWith(testData.id);
  });
});
