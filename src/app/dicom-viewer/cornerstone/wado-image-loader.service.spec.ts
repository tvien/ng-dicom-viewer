import { TestBed } from '@angular/core/testing';

import { WadoImageLoaderService } from './wado-image-loader.service';

describe('WadoImageLoaderService', () => {
  let service: WadoImageLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WadoImageLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
