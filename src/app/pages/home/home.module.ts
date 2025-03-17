import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskModule } from 'src/app/task/task.module';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,
    TaskModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
