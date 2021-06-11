import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  message:string=''
subscription!:Subscription;
  
  constructor(private designUService: DesignUtilityService) { }
  ngOnInit(): void {
    let broadcast=interval(1000);
// user on of them
// time(delay,interval)
    broadcast=timer(5000,1000);

    this.subscription= broadcast.subscribe(r=>{
      this.message='Video number '+r ;
      this.designUService.print(this.message,'elElement');
      this.designUService.print(this.message,'elElement2');
      if(r>=5){
         this.subscription.unsubscribe();
       }
     })
  }

}
