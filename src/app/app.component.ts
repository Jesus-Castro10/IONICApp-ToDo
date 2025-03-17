import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TaskService } from './core/services/task.service';
import { ITask } from './interfaces/itask';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  constructor() {
  }



  ngOnInit() {
  }

  // addTask(): void {
  //   const newTask: ITask = {
  //     title: 'Nueva tarea',
  //     description: 'Descripción de la tarea',
  //     date: new Date(),
  //     done: false
  //   };

  //   this.firestore.addTask(newTask)
  //     .then(() => console.log('Tarea agregada'))
  //     .catch((error) => console.error('Error al agregar tarea', error));
  // }

  // addTask() {
  //   const newTask: ITask = {
  //     id: "1",
  //     title: 'Nueva tarea',
  //     description: 'Descripción de la tarea',
  //     date: new Date(),
  //     done: false
  //   };
  //   this.firestore.addTask(newTask).then(() => {
  //     newTask
  //   });
  // }

  // deleteTask() {
  //   this.firestore.deleteTask("260nfUAmS7qyq2kG1cVL").then(() => {
  //     console.log('Tarea eliminada')
  //   }).catch((error) => {
  //     console.error('Error al eliminar tarea', error)
  //   });
  // }
}
