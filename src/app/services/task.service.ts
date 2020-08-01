import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    constructor(private firestore: AngularFirestore) {
  }

  public getTaskByCourseId(courseId: string){
    return this.firestore.collection("questionnaires", ref => ref.where('courseId', '==', courseId)).snapshotChanges();
  }

  public getDeliveredTask(studentId: string, questionnaireId: string){
    return this.firestore.collection("deliveredquestionnaires", ref => ref.where('studentId', '==', studentId).where('questionnaireId', '==', questionnaireId)).snapshotChanges();
  }

  public getTaskById(taskId: string){
    return this.firestore.collection("questionnaires").doc(taskId).snapshotChanges();
  }
}
