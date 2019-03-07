import { Component, OnDestroy, OnInit } from '@angular/core';
import {MicrowaveService} from '../microwave.service';
//import { Observable } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-microwave',
  templateUrl: './microwave.component.html',
  styleUrls: ['./microwave.component.css']
})

export class MicrowaveComponent implements OnInit, OnDestroy {
  private data: number;
  private display: boolean; // whether to display info in the component
                            // use *ngIf="display" in your html to take
                            // advantage of this

  private alive: boolean; // used to unsubscribe from the TimerObservable
                          // when OnDestroy is called.
  private interval: number;

  constructor(private microwaveService: MicrowaveService) {
    this.display = false;
    this.alive = true;
    this.interval = 100;
  }

  ngOnInit() {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.microwaveService.get()
          .subscribe((data) => {
            this.data = data;
            if(!this.display){
              this.display = true;
            }
          });
      });
  }

  ngOnDestroy(){
    this.alive = false; // switches your TimerObservable off
  }
}
