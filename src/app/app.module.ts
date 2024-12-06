import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroModule } from './heroes/heroes.module';
import { CounterModule } from './counter/components/counter.module';
import { AppComponent } from './app.component';
import { Dbz2Module } from './dbz2/dbz2.module';

import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModule,
    CounterModule,
    Dbz2Module


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
