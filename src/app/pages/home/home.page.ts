import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  tasks!: ITask[];

  constructor(private taskService: TaskService, private loader: LoaderService) {

  }

  ngOnInit() {
    this.getTasks()
  }

  async getTasks() {
    await this.loader.show("Loadind tasks")
    this.taskService.getTasks().subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
      this.loader.hide()
    });
  }
}
