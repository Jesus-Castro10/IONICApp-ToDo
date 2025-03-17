import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false
})
export class TaskItemComponent implements OnInit {

  @Input() task!: ITask;

  constructor(private taskService: TaskService) { }

  ngOnInit() { }

  toggleTask(task: any) {
    task.done = !task.done;
    this.taskService.updateTask(task);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).then(() => {
      console.log('Tarea eliminada')
    }).catch((error) => {
      console.error('Error al eliminar tarea', error)
    });
  }
}
