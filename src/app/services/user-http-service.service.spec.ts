import { TestBed } from '@angular/core/testing';

import { UserHttpServiceService } from './user-http-service.service';

describe('UserHttpServiceService', () => {
  let service: UserHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
