import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {MicrowaveService} from '../microwave.service';
import {WebsocketService} from '../websocket.service';

@Component({
	selector: 'app-microwave',
	templateUrl: './microwave.component.html',
	styleUrls: ['./microwave.component.css'],
	providers: [MicrowaveService, WebsocketService]
})
export class MicrowaveComponent implements OnInit {
	@ViewChild('lineChart') chartRef: ElementRef;
	chart: any;

	index: number = 0;
	dataPoints: any[] = [];
	chartCts: any;
	labels: any[] = [];

	constructor(private microwaveService: MicrowaveService) {
		for(let i = 0; i < 50; i++){
			this.dataPoints.push({x: this.index, y: 0});
			this.labels.push(this.index);
			this.index++;
		}
	}

	ngOnInit() {
		this.chartCts = this.chartRef.nativeElement.getContext('2d');
		this.initChart();
		this.microwaveService.movementData.subscribe(newData => {
			this.dataPoints.shift();
			this.dataPoints.push({x: this.index, y: newData.movement});
			this.labels.shift();
			this.labels.push(this.index);
			this.chart.update();
			this.index++;
		})
	}

	initChart() {
		this.chart = new Chart(this.chartCts, {
			type: 'line',
			data: {
				labels: this.labels,
			datasets: [
				  {
					data: this.dataPoints, // your data array
					borderColor: '#FFAEFF',
					fill: false
				  }
				]
		  	},
		  	options: {
				animation: {
					duration: 0
				},
				legend: {
			  		display: false
				},
				scales: {
			  		xAxes: [{
						display: true
			  		}],
			  		yAxes: [{
						display: true
			  		}],
				}
		  	}
		});
	}
}
