import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {AvmuService, RadarData} from '../avmu.service';
import * as d3 from 'd3';
import {WebsocketService} from '../websocket.service';

@Component({
	selector: 'app-avmu',
	templateUrl: './avmu.component.html',
	styleUrls: ['./avmu.component.css'],
	providers: [AvmuService, WebsocketService]
})
export class AvmuComponent implements AfterViewInit {
	@ViewChild('radarData') public canvas: ElementRef;

	@Input() public width = 1;
	@Input() public height = 512;

	ctx: CanvasRenderingContext2D;
	radarData: RadarData;

	constructor(private avmuService: AvmuService) {
	}

	ngAfterViewInit() {
		this.ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
		this.ctx.canvas.width = this.width;
		this.ctx.canvas.height = this.height;

		let axis = d3.select('#axis')
			.attr('position', 'absolute')
			.attr('width', 30)
			.attr('height', 2048)
			.attr('z-index', 2);
		let axisScale = d3.scaleLinear().domain([-8.49, 263.65]).range([2048, 0]);
		let y_axis = d3.axisLeft(axisScale);
		axis.append('g').attr('transform', 'translate(27, 0)').style('font-size', '11px').call(y_axis);

		this.avmuService.radarData.subscribe((next) => {
			this.radarData = next;
			this.drawCanvas();
		});
	}

	drawCanvas() {
		this.radarData.magnitude.forEach((item, index) => {
			this.ctx.fillStyle = d3.interpolateBlues(item / 100);
			this.ctx.fillRect(0, this.height - index, this.width, 1);
		});
	}

}
