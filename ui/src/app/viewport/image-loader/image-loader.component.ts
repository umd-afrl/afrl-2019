import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-image-loader',
	templateUrl: './image-loader.component.html',
	styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

	dynamicImg ="/../../assets/img/UMDlogo1.png";

	//@Input() public streamURL = 'https://' + location.host + ':8082/?action=stream';

	constructor() {


	}

	ngOnInit() {

	}
}
