import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName:string[]=['Spiderman','Hulk','Thor','Ironman', 'Batman'];
  public heroesBorrados:string[] =[]
  public heroDelete:string | undefined=''
  public deleteUltimoHeroe():void{
     this.heroDelete=this.heroesName.pop();
     this.agregarArray();
  }
  public agregarArray():void{
   if(this.heroDelete !== undefined)
    this.heroesBorrados.push(this.heroDelete);
  console.log(this.heroesBorrados)


  }
}
