import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
    counterActive:number = 0;
    counterInactive:number = 0;

    onCounterActive(){
        this.counterActive++;
    }
    onCounterInactive(){
        this.counterInactive++;
    }
    constructor() { }
}
