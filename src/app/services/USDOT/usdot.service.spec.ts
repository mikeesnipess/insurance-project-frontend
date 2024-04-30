import { TestBed } from '@angular/core/testing';

import { UsdotService } from './usdot.service';

describe('UsdotService', () => {
  let service: UsdotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsdotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
