import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(num: string,elementId:string):void {
    let li = document.createElement('li');
    li.innerText = num
    document.getElementById(elementId)?.appendChild(li);
  }
}
