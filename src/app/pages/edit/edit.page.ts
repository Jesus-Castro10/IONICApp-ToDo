import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  standalone: false
})
export class EditPage implements OnInit {

  id!: any

  taskForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(250),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(250),
    ]),
    // date: new FormControl(null, [Validators.required]),
    date: new FormControl<Date | null>(null, [Validators.required]),
    done: new FormControl(false),
  });

  constructor(private loader: LoaderService,
    private taskService: TaskService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getTask()
  }

  async getTask() {
    await this.loader.show("Loading task");

    this.taskService.getTaskById(this.id).subscribe((task) => {
      this.taskForm.patchValue({
        ...task,
      });
      this.loader.hide();
    });
  }

  async write() {
    if (this.taskForm.valid) {
      await this.loader.show("Updating");
      this.taskService.updateTask(this.taskForm.value)
      this.toast.presentToast('Task updated', true);
      this.loader.hide();
      window.location.href = '/'
    } else {
      this.toast.presentToast("Some field are invalid", false);
    }
  }
}
