import { NgModule } from '@angular/core';

import { TaskDetailPageRoutingModule } from './task-detail-routing.module';

import { TaskDetailPage } from './task-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    TaskDetailPageRoutingModule
  ],
  declarations: [TaskDetailPage]
})
export class TaskDetailPageModule { }
