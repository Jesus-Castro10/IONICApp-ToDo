import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, docData } from '@angular/fire/firestore';
import { ITask } from 'src/app/interfaces/itask';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private firestore = inject(Firestore);
  private tasksCollection = collection(this.firestore, 'task');

  // constructor(private firestore: Firestore) { }

  addTask(task: ITask): Promise<void> {
    return addDoc(this.tasksCollection, task) as unknown as Promise<void>;
  }

  getTasks(): Observable<ITask[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<ITask[]>;
  }

  getTaskById(id: any): Observable<ITask> {
    const taskDoc = doc(this.firestore, `task/${id}`);
    return docData(taskDoc, { idField: 'id' }) as Observable<ITask>;
  }

  updateTask(task: ITask): Promise<void> {
    const taskDoc = doc(this.firestore, `task/${task.id}`);
    return updateDoc(taskDoc, { ...task }) as unknown as Promise<void>;
  }

  deleteTask(id: string): Promise<void> {
    const taskDoc = doc(this.firestore, `task/${id}`);
    return deleteDoc(taskDoc);
  }

  markTaskAsDone(id: boolean): Promise<void> {
    const taskDoc = doc(this.firestore, `task/${id}`);
    return updateDoc(taskDoc, { done: true });
  }
}
