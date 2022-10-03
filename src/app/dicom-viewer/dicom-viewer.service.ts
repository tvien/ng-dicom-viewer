import { ElementRef, Injectable } from '@angular/core';

import cs, { Image } from 'cornerstone-core';
import * as dp from 'dicom-parser';

const imageLoader = require('cornerstone-wado-image-loader');

@Injectable({
  providedIn: 'root',
})
export class DicomViewerService {
  private cornerstone;
  private dicomParser;
  private imageLoader;

  constructor() {
    this.cornerstone = cs;
    this.dicomParser = dp;
    this.imageLoader = imageLoader;

    this.configureImageLoader();
  }

  configureImageLoader() {
    // set cornerstone instance to the imageLoader
    this.imageLoader.external.cornerstone = this.cornerstone;
    this.imageLoader.external.dicomParser = this.dicomParser;
  }

  // this UI is only built for a single file so just dump the first one
  loadDicomImage(dcmFile: File, element: HTMLElement): Promise<Image> {
    // *TODO: these added files will probably need to be removed when a new file is requested
    const imageId = this.imageLoader.wadouri.fileManager.add(dcmFile);

    this.cornerstone.enable(element);

    return this.cornerstone.loadImage(imageId).then((img: Image) => {
      // load the dicom image into the given container element
      const viewport = this.cornerstone.getDefaultViewportForImage(
        element,
        img
      );

      this.cornerstone.displayImage(element, img, viewport);

      // pass along the cornerstone Image object for further optional processing
      return img;
    });
  }
}
