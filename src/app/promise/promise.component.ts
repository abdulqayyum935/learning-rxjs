import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  result!: string
  error:string=''

  ngOnInit(): void {

    let promise = new Promise((resolve, reject) => {
     // resolve('ok')
     //reject('errors')
     let result= Math.random()<0.5 as boolean
     if(result){
       resolve('Ok')

     }else{
       reject('Not Ok')
     }
    });

    promise.then(r => {
      this.result=r as string;
      this.error=''
    }).catch(error=>{
      this.error=error;
      this.result=''
    })
  }
  tryAgain(){
    this.ngOnInit();
  }

}
