import { NgModule } from '@angular/core';

import { SaveTaskPageRoutingModule } from './save-task-routing.module';

import { SaveTaskPage } from './save-task.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskModule } from 'src/app/task/task.module';

@NgModule({
  imports: [
    SharedModule,
    TaskModule,
    SaveTaskPageRoutingModule
  ],
  declarations: [SaveTaskPage]
})
export class SaveTaskPageModule { }
