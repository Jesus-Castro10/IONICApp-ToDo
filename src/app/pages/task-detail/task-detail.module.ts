import { NgModule } from '@angular/core';

import { TaskDetailPageRoutingModule } from './task-detail-routing.module';

import { TaskDetailPage } from './task-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskModule } from 'src/app/task/task.module';

@NgModule({
  imports: [
    SharedModule,
    TaskDetailPageRoutingModule,
    TaskModule
  ],
  declarations: [TaskDetailPage]
})
export class TaskDetailPageModule { }
