import {NgModule} from '@angular/core';
import {VideoComponent} from './video/video.component';
import {CameraviewComponent} from './cameraview/cameraview.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageLoaderComponent} from './image-loader/image-loader.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule
	],
	declarations: [
		VideoComponent,
		CameraviewComponent,
		ImageLoaderComponent
	],
	exports: [
		VideoComponent,
		CameraviewComponent,
		ImageLoaderComponent
	]
})
export class ViewportModule {
}
