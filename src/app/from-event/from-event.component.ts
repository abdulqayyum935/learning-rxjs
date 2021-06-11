import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addButtun!: ElementRef

  constructor(private designUService:DesignUtilityService) { }

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    let count:number= 1;
    fromEvent(this.addButtun.nativeElement, 'click').subscribe(r => {
      console.log()
      this.designUService.print('video count ' + count,'elElement');
      this.designUService.print('video count ' + count,'elElement2');
      count++
    }
    )
  }
 

}
