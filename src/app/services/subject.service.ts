import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    constructor(private firestore: AngularFirestore) {
  }

  public getSubjectByCourseId(courseId: String){
    return this.firestore.collection("subjects", ref => ref.where('courseId', '==', courseId)).snapshotChanges();
  }
}
