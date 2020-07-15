import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    constructor(private firestore: AngularFirestore) {
  }

  public create(resource: string, data: Object) {
    return this.firestore.collection(resource).add(data);
  }

  public getById(resource: string, id: string) {
    return this.firestore.collection(resource).doc(id).snapshotChanges();
  }

  public getAll(resource: string) {
    return this.firestore.collection(resource).snapshotChanges();
  }

  public update(resource: string, id: string, data: Object) {
    return this.firestore.collection(resource).doc(id).set(data);
  }

  public delete(resource: string, id: string) {
    return this.firestore.collection(resource).doc(id).delete();
  }
}
