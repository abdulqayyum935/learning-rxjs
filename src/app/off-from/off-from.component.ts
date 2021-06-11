import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs'
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'off-from',
  templateUrl: './off-from.component.html',
  styleUrls: ['./off-from.component.css']
})
export class OffFromComponent implements OnInit {

  constructor(private designUService:DesignUtilityService) { }

  ngOnInit(): void {
    
    let dataObservable = of("One", "Two", "Three");
    let dataObservableFrom = from(["One", "Two", "Three"]);
    dataObservable.subscribe(r=>{
      this.designUService.print(r,'uElement')
    })

    dataObservableFrom.subscribe(r=>{
      this.designUService.print(r,'uElement2')
    })
  }

}
