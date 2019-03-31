import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {jqxChartComponent} from 'jqwidgets-scripts';
import {MicrowaveService, MovementData} from '../microwave.service';
import {WebsocketService} from '../websocket.service';

@Component({
	selector: 'app-microwave',
	templateUrl: './microwave.component.html',
	styleUrls: ['./microwave.component.css'],
	providers: [MicrowaveService, WebsocketService]
})
export class MicrowaveComponent implements OnInit, AfterViewInit {
	@ViewChild('myChart') myChart: jqxChartComponent;

	constructor(private microwaveService: MicrowaveService) {
		this.index = 0;
	}

	ngOnInit() {
		this.generateChartData();
		jqx.credits = '12F129D4-0E1B-44B8-9BBB-BB4CF78CC6BA'; // Hide watermark on chart
	}

	ngAfterViewInit() {
		// this.microwaveService.movementData.subscribe((newData) => {
		// 	this.microwaveService.movementData.next(newData);
		// 	if (!isNaN(newData.movement)) {
		// 		if (this.data.length >= 50) {
		// 			this.data.pop();
		// 		}
		// 		this.data.unshift({time: this.index, movement: newData.movement});
		// 		this.index += 1;
		// 	}
		// 	this.myChart.update();
		// });
	}

	index: number;
	data: MovementData[] = [];
	// padding: any = {left: 10, top: 10, right: 10, bottom: 10};
	// titlePadding: any = {left: 0, top: 0, right: 0, bottom: 10};

	getWidth(): any {
		// if (document.body.offsetWidth < 500) {
		// 	return '90%';
		// }

		return 500;
	}

	xAxis: any =
		{
			dataField: 'time',
			type: 'number',
			baseUnit: 'milisecond',
			unitInterval: 5,
			formatFunction: (value: any) => {
				return value;
			},
			gridLines: {step: 2},
			valuesOnTicks: true,
			labels: {angle: -45, offset: {x: -17, y: 0}}
		};
	valueAxis: any =
		{
			minValue: -.1,
			maxValue: 1.1,
			title: {text: ''},
			labels: {horizontalAlignment: 'right'}
		};
	seriesGroups: any[] =
		[
			{
				type: 'line',
				columnsGapPercent: 50,
				alignEndPointsWithIntervals: true,
				valueAxis:
					{
						minValue: -.1,
						maxValue: 1.1,
						// title: {text: ''}
					},
				series: [
					{
						dataField: 'movement',
						displayText: 'Motion = 1 No Motion = 0',
						opacity: 1,
						lineWidth: 2,
						symbolType: 'circle',
						fillColorSymbolSelected: 'white',
						symbolSize: 4
					}
				]
			}
		];

	generateChartData() {
		for (let i = 0; i < 60; i++) {
			this.data.push({
				time: this.index,
				movement: Math.round(Math.random() * 2 / 3)
			});
			this.index += 1;
		}
		this.data = this.data.reverse();
	}
}
