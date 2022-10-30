import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmdOtpUiComponent } from './smd-otp-ui.component';

describe('SmdOtpUiComponent', () => {
  let component: SmdOtpUiComponent;
  let fixture: ComponentFixture<SmdOtpUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmdOtpUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmdOtpUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
