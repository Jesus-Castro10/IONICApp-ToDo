import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, docData, setDoc } from '@angular/fire/firestore';
import { ITask } from 'src/app/interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private firestore = inject(Firestore);
  private tasksCollection = collection(this.firestore, 'task');

  // constructor(private firestore: Firestore) { }

  addTask(task: any) {
    return addDoc(this.tasksCollection, task);
  }

  getTasks(): Observable<ITask[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<ITask[]>;
  }

  getTaskById(id: any): Observable<ITask> {
    const taskDoc = doc(this.firestore, `task/${id}`);
    return docData(taskDoc, { idField: 'id' }) as Observable<ITask>;
  }

  updateTask(task: any) {
    const taskDoc = doc(this.firestore, `task/${task.id}`);
    return updateDoc(taskDoc, { ...task });
  }

  deleteTask(id: string): Promise<void> {
    const taskDoc = doc(this.firestore, `task/${id}`);
    return deleteDoc(taskDoc);
  }

  markTaskAsDone(id: boolean): Promise<void> {
    const taskDoc = doc(this.firestore, `task/${id}`);
    return updateDoc(taskDoc, { done: true });
  }

  createIdDoc() {
    return Math.random()
  }
}
