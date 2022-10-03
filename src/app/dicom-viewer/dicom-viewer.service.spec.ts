import { TestBed } from '@angular/core/testing';

import { DicomViewerService } from './dicom-viewer.service';

describe('DicomViewerService', () => {
  let service: DicomViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicomViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
