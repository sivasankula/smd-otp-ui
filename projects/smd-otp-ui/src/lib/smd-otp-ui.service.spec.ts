import { TestBed } from '@angular/core/testing';

import { SmdOtpUiService } from './smd-otp-ui.service';

describe('SmdOtpUiService', () => {
  let service: SmdOtpUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmdOtpUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
