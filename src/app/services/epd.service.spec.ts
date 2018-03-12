import { TestBed, inject } from '@angular/core/testing';

import { EpdService } from './epd.service';

describe('EpdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpdService]
    });
  });

  it('should be created', inject([EpdService], (service: EpdService) => {
    expect(service).toBeTruthy();
  }));
});
