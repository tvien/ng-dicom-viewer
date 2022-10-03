import { Injectable } from '@angular/core';
const wadoImageLoader = require('cornerstone-wado-image-loader');

import { CornerstoneCoreService } from './cornerstone-core.service';
import { DicomParserService } from './dicom-parser.service';

@Injectable({
  providedIn: 'root',
})
export class WadoImageLoaderService {
  constructor(
    private csService: CornerstoneCoreService,
    private dpService: DicomParserService
  ) {
    console.log(csService.cornerstone);

    console.log(dpService.dicomParser);

    console.log(wadoImageLoader);
  }
}
