import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigureTestingModule } from '../../app.testing';
import { CreateTransferComponent } from './create-transfer.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

describe('CreateTransferComponent', () => {
  let component: CreateTransferComponent;
  let fixture: ComponentFixture<CreateTransferComponent>;
  let localStorageService: LocalStorageService;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransferComponent);
    localStorageService = TestBed.get(LocalStorageService);
    component = fixture.componentInstance;
    spyOn(localStorageService, 'addTransferRecord').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call localStorage after submit', () => {
    const testData = {
      senderCardNum: '1111111111111111',
      receiverCardNum: '2222222222222222',
      senderName: 'TEST SENDER',
      activeTillMonth: 1,
      activeTillYear: 2021,
      amount: 1000,
    };
    component.form.setValue(testData);
    component.submitHandler();
    expect(localStorageService.addTransferRecord).toHaveBeenCalled();
  });
});
