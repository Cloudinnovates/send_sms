import { TestBed, inject } from '@angular/core/testing';

import { NexmoService } from './nexmo.service';

describe('NexmoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NexmoService]
    });
  });

  it('should be created', inject([NexmoService], (service: NexmoService) => {
    expect(service).toBeTruthy();
  }));
});
