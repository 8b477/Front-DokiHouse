import { TestBed } from '@angular/core/testing';

import { DecodeTokenService } from './decode-token.service';

describe('DecodeTokenService', () => {
  let service: DecodeTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecodeTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
