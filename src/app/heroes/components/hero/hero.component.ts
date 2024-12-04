import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string= 'Ironman'

  public edad:number=45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }
  get heroDescrption():string{
    return ` ${this.capitalizeName} tiene ${this.edad} años`;
  }
  public cambiarHeroe():void{
    if(this.name==='Ironman' ){
      this.name='Thor'

    }else if(this.name==='Thor',this.edad=40){
      this.name='Ironman'

    }else{}
  }
  public cambiarEdad():void{
    if(this.edad===45){
      this.edad=40
    }else if(this.edad===40){
      this.edad=45
    }else{}
  }
  public resset():void{
    this.name='Ironman'
    this.edad=45
  }

}
