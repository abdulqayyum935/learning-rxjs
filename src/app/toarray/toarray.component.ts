import { Component, OnInit } from '@angular/core';
import { interval, Unsubscribable } from 'rxjs';
import { take,toArray } from 'rxjs/operators'

@Component({
  selector: 'toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {
unSub!:Unsubscribable;
  constructor() { }

  ngOnInit(): void {
    let source=interval(100);

    this.unSub=source.pipe(take(5),toArray())
    .subscribe(r=>{
    console.log({r})
    // if(r>=5){
    //   this.unSub.unsubscribe();
    // }
  })
  }

}
