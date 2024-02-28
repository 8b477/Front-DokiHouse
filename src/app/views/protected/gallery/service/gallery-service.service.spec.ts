import { TestBed } from '@angular/core/testing';

import { GalleryServiceService } from './gallery-service.service';

describe('GalleryServiceService', () => {
  let service: GalleryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
