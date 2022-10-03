import { TestBed } from '@angular/core/testing';

import { CornerstoneCoreService } from './cornerstone-core.service';

describe('CornerstoneCoreService', () => {
  let service: CornerstoneCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CornerstoneCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
