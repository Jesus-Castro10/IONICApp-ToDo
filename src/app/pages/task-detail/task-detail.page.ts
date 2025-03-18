import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
  standalone: false
})
export class TaskDetailPage implements OnInit {

  id: string | null = '';
  task!: ITask;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private loadingCtrl: LoaderService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTask()
  }

  dismiss() {
    this.router.navigate(["/"])
    window.location.reload
  }

  async getTask() {
    await this.loadingCtrl.show("Loading task");

    this.taskService.getTaskById(this.id).subscribe((task) => {
      this.task = task;
      this.loadingCtrl.hide();
    });
  }
}
