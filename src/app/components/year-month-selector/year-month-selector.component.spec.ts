import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigureTestingModule } from '../../app.testing';
import { YearMonthSelectorComponent } from './year-month-selector.component';
import { FormControl } from '@angular/forms';

describe('YearMonthSelectorComponent', () => {
  let component: YearMonthSelectorComponent;
  let fixture: ComponentFixture<YearMonthSelectorComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMonthSelectorComponent);
    component = fixture.componentInstance;
    component.monthInput = new FormControl();
    component.yearInput = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
