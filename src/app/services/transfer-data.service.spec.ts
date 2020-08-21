import { TransferDataService } from "./transfer-data.service";
import { async, TestBed } from '@angular/core/testing';
import { AppConfigureTestingModule } from '../app.testing';


describe('TransferDataService', () => {
  let transferDataService: TransferDataService;

  beforeEach(async(() => {
    AppConfigureTestingModule()
    .compileComponents();
  }));

  beforeEach(() => {
    transferDataService = TestBed.get(TransferDataService);
  });

  it('should be created', () => {
    expect(transferDataService).toBeTruthy();
  });

  it('hideCardNumber should return correct result', () => {
    const inputString = '1231231231231231';
    const expectedResult = '****23123123****';
    const result = transferDataService.hideCardNumber(inputString);
    expect(transferDataService.hideCardNumber(inputString))
      .toEqual(expectedResult);
  });
})