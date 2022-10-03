import { TestBed } from '@angular/core/testing';

import { DicomParserService } from './dicom-parser.service';

describe('DicomParserService', () => {
  let service: DicomParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicomParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
