import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { BuildComponent } from './build/build.component';
import { BuildService }          from './build/build.service';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryService }  from './repository/repository.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BuildService, RepositoryService],
  bootstrap: [RepositoryComponent, BuildComponent]
})
export class AppModule { }
