import {NgModule} from '@angular/core';
import {VideoComponent} from './video/video.component';
import {CameraviewComponent} from './cameraview/cameraview.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule
	],
	declarations: [
		VideoComponent,
		CameraviewComponent
	],
	exports: [
		VideoComponent,
		CameraviewComponent
	]
})
export class ViewportModule {
}
