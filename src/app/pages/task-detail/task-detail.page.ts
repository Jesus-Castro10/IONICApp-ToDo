import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
  standalone: false
})
export class TaskDetailPage implements OnInit {

  id: string | null = '';

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTask()
  }

  getTask() {
    this.taskService.getTaskById(this.id).subscribe((task) => {
      console.log(task);
    });
  }
}
