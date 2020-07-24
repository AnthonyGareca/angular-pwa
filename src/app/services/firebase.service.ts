import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    constructor(private firestore: AngularFirestore) {
  }

  public async create(resource: string, data: Object) {
    return await this.firestore.collection(resource).add(data);
  }

  public getById(resource: string, id: string) {
    return this.firestore.collection(resource).doc(id).snapshotChanges();
  }

  public getAll(resource: string) {
    return this.firestore.collection(resource).snapshotChanges();
  }

  public getFilterdData(resource: string, key: string, value: string) {
    return this.firestore.collection(resource, ref => ref.where(key, '==', value)).snapshotChanges();
  }

  public update(resource: string, id: string, data: Object) {
    return this.firestore.collection(resource).doc(id).set(data);
  }

  public delete(resource: string, id: string) {
    return this.firestore.collection(resource).doc(id).delete();
  }
}
