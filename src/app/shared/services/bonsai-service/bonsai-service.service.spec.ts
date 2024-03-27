import { TestBed } from '@angular/core/testing';

import { BonsaiServiceService } from './bonsai-service.service';

describe('BonsaiServiceService', () => {
  let service: BonsaiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonsaiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
