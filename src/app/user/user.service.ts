import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import 'firebase/firestore';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  private usersCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;
  private userSubscriptions: Subscription[] = [];
  private USERS_PATH = 'users';

  private usersList: User[] = [];
  private currentUser: User;
  usersListChanged = new Subject<User[]>()
  userChanged = new Subject<User>();
  users: Observable<User[]>;
  user: Observable<User>;


  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>(this.USERS_PATH);
    this.users = this.afs.collection(this.USERS_PATH).snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as User;
        data.$id = a.payload.doc.id;
        return data;
      });
    }));
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userSubscriptions.push(this.afs
      .collection(this.USERS_PATH)
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          console.log(doc.payload.doc.data());
          const data = doc.payload.doc.data() as User;
          data.$id = doc.payload.doc.id;
          if(doc.payload.doc.data()['healthHistory']){
            data.healthHistory = doc.payload.doc.data()['healthHistory'];
          }
          if(doc.payload.doc.data()['nutritionImmune']){
            data.nutritionImmune = doc.payload.doc.data()['nutritionImmune'];
          }
          if(doc.payload.doc.data()['haqForm']){
            data.haqForm = doc.payload.doc.data()['haqForm'];
          }
          return data;
        })
      }))
      .subscribe((users: User[]) => {
        this.usersList = users;
        this.usersListChanged.next([...this.usersList]);
      }));
  }

  currentUserData(email: string) {
    this.userSubscriptions.push(this.afs
      .collection(this.USERS_PATH, ref => ref.where('email', '==', email))
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          // console.log(doc.payload.doc.data());
          const data = doc.payload.doc.data() as User;
          data.$id = doc.payload.doc.id;
          if(doc.payload.doc.data()['healthHistory']){
            data.healthHistory = doc.payload.doc.data()['healthHistory'];
          }
          if(doc.payload.doc.data()['nutritionImmune']){
            data.nutritionImmune = doc.payload.doc.data()['nutritionImmune'];
          }
          if(doc.payload.doc.data()['haqForm']){
            data.haqForm = doc.payload.doc.data()['haqForm'];
          }
          return data;
        })
      }))
      .subscribe((user: User[]) => {
        // console.log(user[0] as User);
        this.currentUser = user[0] as User;
        this.userChanged.next({ ...this.currentUser })
      }));

  }

  createNewUser(user: User): void {
    this.usersCollection.add(user).then(result => {
      console.log(result);
      this.getUserDetails(result.id);
    });
  }
  updateUser(user: User): void {
    this.userDoc.update(user);
  }

  getUsers():Observable<User[]>{
    this.users.forEach(user => { });
    return this.users;
  }

  getUserDetails(id):Observable<User>{
    this.userDoc = this.afs.doc(`${this.USERS_PATH}/${id}`);
    this.user = this.userDoc.valueChanges();
    return this.user;
  }

  cancelSubscriptions() {
    this.userSubscriptions.forEach(sub => sub.unsubscribe());
  }

}
