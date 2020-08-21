import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppConfigureTestingModule } from './app.testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'k-zakirov-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('k-zakirov-test');
  });
});
