import { Component} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: 'counter.component.html',
  standalone: false
})

export class CounterComponent {
  public counter:number=10;

  public incrementCounter(value:number): void {
    this.counter += value;
    console.log(this.counter)
  }
  public decrementCounter(value:number): void {
    if(this.counter > 0) {
      this.counter -= value;
      console.log(this.counter)
    }
  }
  public resetCounter():void{
    this.counter = 10;
    console.log(this.counter)
  }
}
