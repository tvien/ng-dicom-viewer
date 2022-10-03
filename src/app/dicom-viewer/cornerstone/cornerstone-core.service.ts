import { Injectable } from '@angular/core';

import cs from 'cornerstone-core';

// import {} from '@types/cornerstone-core'

@Injectable({
  providedIn: 'root',
})
export class CornerstoneCoreService {
  constructor() {}

  public get cornerstone() {
    return cs;
  }
}
