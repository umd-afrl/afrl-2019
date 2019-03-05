import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Ng5SliderModule} from 'ng5-slider';
import {NgxGaugeModule} from 'ngx-gauge';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {SwitchesComponent} from './switches/switches.component';
import {LinearGaugeComponent} from './linear-gauge/linear-gauge.component';
import {RadialGaugeComponent} from './radial-gauge/radial-gauge.component';
import {WebsocketService} from './websocket.service';
import {CommandService} from './model/command.service';
import {ViewportModule} from './viewport/viewport.module';
import {LightSliderComponent} from './light-slider/light-slider.component';
import {TempGaugeComponent} from './temp-gauge/temp-gauge.component';
import {PressureGaugeComponent} from './pressure-gauge/pressure-gauge.component';
import {ThrusterGaugeComponent} from './thruster-gauge/thruster-gauge.component';
import {BatteryGaugeComponent} from './battery-gauge/battery-gauge.component';
import {SlideSwitchComponent} from './slide-switch/slide-switch.component';
import {LightGaugeComponent} from './light-gauge/light-gauge.component';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
import { ButtonComponent } from './button/button.component';

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
		LinearGaugeComponent,
		RadialGaugeComponent,
		LightSliderComponent,
		TempGaugeComponent,
		PressureGaugeComponent,
		ThrusterGaugeComponent,
		BatteryGaugeComponent,
		SlideSwitchComponent,
		LightGaugeComponent,
		ButtonComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		ViewportModule,
		Ng5SliderModule,
		NgxGaugeModule,
		NotifierModule.withConfig(customNotifierOptions)
	],
	providers: [WebsocketService, CommandService],
	bootstrap: [AppComponent],
	exports: [
		AppComponent,
		SwitchesComponent,
		LinearGaugeComponent,
		RadialGaugeComponent,
	]
})
export class AppModule {}
