
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarComponent } from './components/agregar/agregar.component';





@NgModule({
  declarations: [DbzComponent, ListadoComponent, AgregarComponent],
  exports:[DbzComponent],
  imports: [
    CommonModule
  ]
})
export class Dbz2Module { }
