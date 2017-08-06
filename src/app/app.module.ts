import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { BuildComponent } from './build/build.component';
import { BuildService }          from './build/build.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BuildService],
  bootstrap: [BuildComponent]
})
export class AppModule { }
