import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title: string = 'Bases1.1';
 //otra Propiedad
 public counter:number=10;

 public incrementCounter(): void {
   this.counter++;
 }
 public decrementCounter(): void {
   if(this.counter > 0) {
     this.counter--;
   }
 }
 public resetCounter():void{
   this.counter = 0;
 }
}
