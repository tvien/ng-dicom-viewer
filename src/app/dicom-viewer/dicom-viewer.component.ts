import { Component, OnInit } from '@angular/core';
import { DicomViewerService } from './dicom-viewer.service';

@Component({
  selector: 'app-dicom-viewer',
  templateUrl: './dicom-viewer.component.html',
  styleUrls: ['./dicom-viewer.component.scss'],
})
export class DicomViewerComponent implements OnInit {
  constructor(private dvs: DicomViewerService) {}

  ngOnInit(): void {}
}
