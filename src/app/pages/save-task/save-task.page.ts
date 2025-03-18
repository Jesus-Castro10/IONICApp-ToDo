import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.page.html',
  styleUrls: ['./save-task.page.scss'],
  standalone: false
})
export class SaveTaskPage implements OnInit {

  today = new Date();

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
    date: new FormControl(null, [Validators.required]),
    done: new FormControl(false),
  });

  constructor(private loader: LoaderService,
    private taskService: TaskService,
    private toast: ToastService
  ) {
  }

  ngOnInit() {
  }

  async save() {
    console.log("sabjasa")
    if (this.taskForm.valid) {
      await this.loader.show();
      const id = (await this.taskService.addTask(this.taskForm.value)).id
      if (id != null || id != undefined) {
        this.toast.presentToast("Task saved successfully", true);
        this.taskForm.reset();
        this.loader.hide()
        window.location.href = '/'
      }
    } else {
      this.toast.presentToast("Some field are invalid", false);
    }
  }
}
