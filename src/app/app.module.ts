import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

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
  providers: [BuildService, RepositoryService, {provide: APP_BASE_HREF, useValue : '/service/jenkinsstatus/' }],
  bootstrap: [RepositoryComponent, BuildComponent]
})
export class AppModule { }
