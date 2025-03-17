import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  tasks!: ITask[];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
      console.log(this.tasks); // Aquí tendrás el array de ITask
    });
  }

  ngOnInit() {

  }

}
