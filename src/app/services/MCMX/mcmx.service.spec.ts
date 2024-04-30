import { TestBed } from '@angular/core/testing';

import { McmxService } from './mcmx.service';

describe('McmxService', () => {
  let service: McmxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McmxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
