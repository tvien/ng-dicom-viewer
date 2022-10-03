import { Injectable } from '@angular/core';

import * as dp from 'dicom-parser';

@Injectable({
  providedIn: 'root',
})
export class DicomParserService {
  constructor() {}

  public get dicomParser() {
    return dp;
  }
}
