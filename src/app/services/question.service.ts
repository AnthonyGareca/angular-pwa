import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    constructor(private firestore: AngularFirestore) {
  }

  public getTaskByCourseId(courseId: String){
    return this.firestore.collection("questionnaires", ref => ref.where('course', '==', courseId)).snapshotChanges();
  }

}
