import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DicomViewerComponent } from './dicom-viewer/dicom-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DicomViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
