import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Base64Service } from '../util/base64.service';
import { DicomViewerService } from './dicom-viewer.service';
import DCM_BASE64 from './example-dicom-base64';

@Component({
  selector: 'app-dicom-viewer',
  templateUrl: './dicom-viewer.component.html',
})
export class DicomViewerComponent implements AfterViewInit {
  @ViewChild('dicomImageContainer') dicomImageContainer?: ElementRef;

  constructor(
    private dvService: DicomViewerService,
    private base64Service: Base64Service
  ) {}

  ngAfterViewInit(): void {
    this.loadDicom();
  }

  loadDicom(): void {
    alert('loading dicom file!');

    let blob = this.base64Service.convertBase64toBlob(DCM_BASE64);

    var dcmFile = new File([blob], 'dcm');

    // TODO: determine what type of dicom - image or encapsulated pdf? For now, we assume an image
    // NOTE: we can possibly use the dicom-parser library to parse and view SOP ID to figure this out

    if (this.dicomImageContainer) {
      this.dvService
        .loadDicomImage(dcmFile, this.dicomImageContainer.nativeElement)
        .then((res) => console.log(res));
    }
  }
}
