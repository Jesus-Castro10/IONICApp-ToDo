import { TaskItemComponent } from './components/task-item/task-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [TaskItemComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule
  ],
  exports: [...COMPONENTS],
})
export class TaskModule { }
