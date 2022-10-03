import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  convertBase64toBlob(b64: string): Blob {
    // decode base64
    var imageContent = atob(b64);

    // create an ArrayBuffer and a view (as unsigned 8-bit)
    var buffer = new ArrayBuffer(imageContent.length);
    var view = new Uint8Array(buffer);

    // fill the view, using the decoded base64
    for (var n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }

    // convert ArrayBuffer to Blob
    var blob = new Blob([buffer]);

    return blob;
  }
}
