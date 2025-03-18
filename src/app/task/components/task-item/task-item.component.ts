import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false
})
export class TaskItemComponent implements OnInit {

  @Input() task!: ITask;

  constructor(
    private taskService: TaskService,
    private loader: LoaderService,
    private router: Router
  ) { }

  ngOnInit() { }

  async toggleTask(task: any) {
    task.done = !task.done;
    await this.loader.show("Updating task")
    this.taskService.updateTask(task).then(() => {
      this.loader.hide();
    })
      ;
  }

  async deleteTask(id: string) {
    await this.loader.show("Deleting task");
    this.taskService.deleteTask(id).then(() => {
      this.loader.hide()
    }).catch((error) => {
      console.error('Error al eliminar tarea', error)
    });
  }

  async navigate(task: ITask) {
    this.router.navigate(["task-detail/" + task.id])
  }
}
