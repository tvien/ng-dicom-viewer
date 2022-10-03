import { Component, OnInit } from '@angular/core';

import { CornerstoneCoreService } from './cornerstone/cornerstone-core.service';
import { DicomParserService } from './cornerstone/dicom-parser.service';
import { WadoImageLoaderService } from './cornerstone/wado-image-loader.service';

@Component({
  selector: 'app-dicom-viewer',
  templateUrl: './dicom-viewer.component.html',
  styleUrls: ['./dicom-viewer.component.scss'],
})
export class DicomViewerComponent implements OnInit {
  constructor(
    private dpService: DicomParserService,
    private wadoImageLoader: WadoImageLoaderService
  ) {}

  ngOnInit(): void {}
}
