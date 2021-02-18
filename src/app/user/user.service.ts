import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'firebase/firestore';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
    // this.users = this.usersCollection.valueChanges();
    this.users = this.afs.collection('users').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as User
        data.$id = a.payload.doc.id;
        return data;
      });
    }));
  }

  createNewUser(user: User): void {
    this.usersCollection.add(user);
  }
  updateUser(user: User): void {
    this.userDoc.update(user);
  }

  getUsers():Observable<User[]>{
    this.users.forEach(user => {
    });
    return this.users;
  }

  getUserDetails(id):Observable<User>{
    this.userDoc = this.afs.doc(`users/${id}`);
    this.user = this.userDoc.valueChanges();
    return this.user;
  }

}
