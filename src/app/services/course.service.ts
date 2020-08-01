import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    constructor(private firestore: AngularFirestore) {
  }

  public getCoursesByStudentId(studentId: String){
    return this.firestore.collection("courses", ref => ref.where('students', 'array-contains', studentId)).snapshotChanges();
  }
}
