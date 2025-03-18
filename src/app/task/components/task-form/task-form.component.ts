import { ToastService } from './../../../shared/services/toast.service';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/interfaces/itask';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: false
})
export class TaskFormComponent {

  @Input() task: ITask = {} as ITask;
  @Input() isSave: boolean = false;
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
    date: new FormControl(null as Date | null, [
      Validators.required]),
    done: new FormControl(false),
  });

  constructor(private loader: LoaderService,
    private taskService: TaskService,
    private toast: ToastService
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task'] && changes['task'].currentValue) {
      this.taskForm.patchValue({
        ...this.task,
        date: this.task.date ? new Date(this.task.date) : new Date()
      });
    }
  }

  setTaskDate(date: Date) {
    this.taskForm.patchValue({
      date: date
    });
  }

  async write() {
    if (this.taskForm.valid) {
      await this.loader.show();
      if (this.isSave) {
        this.taskService.addTask(this.task).then(() => {
          this.toast.presentToast('Task saved', true);
        })
      } else {
        this.taskService.updateTask(this.task).then(() => {
          this.toast.presentToast('Task updated', true);
        })
      }
      this.loader.hide();
    } else {
      this.toast.presentToast("Some field are invalid", false);
    }
  }
}
