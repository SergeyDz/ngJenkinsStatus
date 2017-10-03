import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BuildComponent } from './build/build.component';
import { BuildService }          from './build/build.service';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryService }  from './repository/repository.service';
import { DeployComponent } from './deploy/deploy.component';
import { CicddashboardComponent } from './cicddashboard/cicddashboard.component';


const appRoutes: Routes = [
  { path: 'build', component: CicddashboardComponent },
  { path: 'deploy', component: DeployComponent },
  { path: '',
    redirectTo: '/build',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    RepositoryComponent,
    DeployComponent,
    CicddashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BuildService, RepositoryService, { provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
