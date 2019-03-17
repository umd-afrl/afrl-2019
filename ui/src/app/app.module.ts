import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SwitchesComponent} from './switches/switches.component';
import {WebsocketService} from './websocket.service';
import {CommandService} from './model/command.service';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import {ButtonComponent} from './button/button.component';
import {MicrowaveComponent} from './microwave/microwave.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';


const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
	theme: 'material',
	behaviour: {
		autoHide: 10000,
		onClick: 'hide',
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'slide',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 300,
			easing: 'ease'
		},
		overlap: 150
	}
};

@NgModule({
	declarations: [
		AppComponent,
		SwitchesComponent,
		ButtonComponent,
		MicrowaveComponent,
		jqxChartComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		NotifierModule.withConfig(customNotifierOptions)
	],
	providers: [WebsocketService, CommandService],
	bootstrap: [AppComponent],
	exports: [
		AppComponent,
		SwitchesComponent
	]
})
export class AppModule {
}
