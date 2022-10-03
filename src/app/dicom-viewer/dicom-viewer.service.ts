import { Injectable } from '@angular/core';

import * as cs from 'cornerstone-core';
import * as dp from 'dicom-parser';

const wadoImageLoader = require('cornerstone-wado-image-loader');

@Injectable({
  providedIn: 'root',
})
export class DicomViewerService {
  constructor() {
    console.log(cs);
    console.log(dp);

    console.log(wadoImageLoader);
  }
}
