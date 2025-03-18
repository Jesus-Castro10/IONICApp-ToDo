import { TaskItemComponent } from './components/task-item/task-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TaskFormComponent } from './components/task-form/task-form.component';

const COMPONENTS = [TaskItemComponent, TaskFormComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule
  ],
  exports: [...COMPONENTS],
})
export class TaskModule { }
