import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Questionnaire } from '../model/questionnaire'

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
    return this.firestore.collection("questionnaires").doc<Questionnaire>(taskId).snapshotChanges();
  }

  public async delivereTask(data){
    return await this.firestore.collection("deliveredquestionnaires").add(data);
  }

  public async saveResponse(data){
    return await this.firestore.collection("responses").add(data);
  }

  public getResponses(questionnaireId: string, studentId: string){
    return this.firestore.collection("responses", ref => ref.where('student', '==', studentId).where('questionnaire', '==', questionnaireId)).snapshotChanges();
  }
}
