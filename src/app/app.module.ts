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

import { InstancesComponent } from './instances/instances_list.component';
import { InstancesDataService } from './instances/instances-data.service';
import { InstanceFilterPipe } from './instances/InstanceFilterPipe';
import { InstanceSortPipe } from './instances/InstanceOrderByPipe';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'build', component: CicddashboardComponent },
  { path: 'deploy', component: DeployComponent },
  { path: '',
    redirectTo: '/instances',
    pathMatch: 'full'
  },
  { path: 'instances', component: InstancesComponent},
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    RepositoryComponent,
    DeployComponent,
    CicddashboardComponent,
    InstancesComponent,
    InstanceFilterPipe,
    InstanceSortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [BuildService, { provide: APP_BASE_HREF, useValue : '/' }, InstancesDataService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
