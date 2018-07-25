import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireStorage ,AngularFireStorageReference ,AngularFireUploadTask} from 'angularfire2/storage';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user={
    email:'',
    photo:'/assets/images/mr_incredible.jpg'
  };


  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(public db: AngularFireDatabase,public fireAuth:AngularFireAuth,private afStorage:AngularFireStorage) {
    fireAuth.authState.subscribe( user => {
      if (user) {

        console.log(user);
        this.user.email = user['email'];
        if(user['photoURL'])
        {
          this.user.photo=user['photoURL'];
        }


      }
    });
  }

  ngOnInit() {
  }

  onEdit(){
    let currentUser=firebase.auth().currentUser;
    currentUser.updateEmail(this.user.email);
    console.log(currentUser);
  }

  upload(event){
    const id=Math.random().toString(36).substring(2);
    this.ref=this.afStorage.ref(id);
    this.task=this.ref.put(event.target.files[0]);
    this.task.then(()=>{
      const refPath = this.afStorage.ref(id);
      refPath.getDownloadURL().subscribe(url=>{
        let currentUser=firebase.auth().currentUser;
        currentUser.updateProfile({photoURL:url});
        this.user.photo=url;
        console.log(url);
      });
    });


  }


}
