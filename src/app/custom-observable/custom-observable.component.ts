import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const customObservable= Observable.create((observer:any)=>{
     setTimeout(()=>{},1000)
     setTimeout(()=>{observer.next('One')},1000)
     setTimeout(()=>{observer.next('Two')},2000)
     setTimeout(()=>{observer.next('One')},3000)
    })

    customObservable.subscribe((r:any)=>{
      console.log(r)
    })
  }

}
