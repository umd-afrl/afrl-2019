import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {jqxChartComponent} from 'jqwidgets-scripts';
import {MicrowaveService} from '../microwave.service';

@Component({
	selector: 'app-microwave',
	templateUrl: './microwave.component.html',
	styleUrls: ['./microwave.component.css']
})
export class MicrowaveComponent implements OnInit, AfterViewInit {
	@ViewChild('myChart') myChart: jqxChartComponent;

	constructor(private microwaveService: MicrowaveService) {
	}

	ngOnInit() {
		this.generateChartData();
		jqx.credits = '12F129D4-0E1B-44B8-9BBB-BB4CF78CC6BA'; // Hide watermark on chart
	}

	ngAfterViewInit(): void {
		this.microwaveService.get().subscribe((newData) => {
			let data = this.myChart.source();
			if (data.length >= 60) {
				data.splice(0, 1);
			}
			let timestamp = new Date();
			timestamp.setSeconds(timestamp.getSeconds());
			timestamp.setMilliseconds(0);
			data.push({timestamp: timestamp, value: newData});
			this.myChart.update();
		});
	}

	data: any[] = [];
	padding: any = {left: 10, top: 10, right: 10, bottom: 10};
	titlePadding: any = {left: 0, top: 0, right: 0, bottom: 10};

	getWidth(): any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}

		return 850;
	}

	xAxis: any =
		{
			dataField: 'timestamp',
			type: 'date',
			baseUnit: 'second',
			unitInterval: 5,
			formatFunction: (value: any) => {
				return jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
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
						title: {text: ''}
					},
				series: [
					{
						dataField: 'value',
						displayText: 'value',
						opacity: 1,
						lineWidth: 2,
						symbolType: 'circle',
						fillColorSymbolSelected: 'white',
						symbolSize: 4
					}
				]
			}
		];

	generateChartData = () => {
		let timestamp = new Date();
		for (let i = 0; i < 60; i++) {
			timestamp.setMilliseconds(0);
			timestamp.setSeconds(timestamp.getSeconds() - 1);
			this.data.push({
				timestamp: new Date(timestamp.valueOf()),
				value: 0
			});
		}
		this.data = this.data.reverse();
	}
}
