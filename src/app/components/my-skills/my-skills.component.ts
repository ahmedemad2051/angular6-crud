import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-my-skills',
    templateUrl: './my-skills.component.html',
    styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

    itemList: AngularFireList<any>;
    itemArray = [];
    userId:any;

    data={
        $key:'',
        name:'',
        phone :  '' ,
        notes :  '' ,
        skill :  '' ,
        city :  '' ,
        price :  ''
    };
    constructor(public db: AngularFireDatabase,public fireAuth:AngularFireAuth) {

        fireAuth.authState.subscribe( user => {
            if (user) {
                this.userId = user.uid;
                let that=this;
                let query = firebase.database().ref('skills').orderByChild('uid').equalTo(this.userId);
                query.on('child_added', function(snap) {
                    let item = snap.val();
                    item['$key']=snap.key;
                    that.itemArray.push(item as ListItemClass);
                });
                console.log(this.itemArray);
            }
        });


    }

    ngOnInit() {
    }

    editForm($key){
        let getSkill=this.db.object('skills/'+$key).valueChanges().subscribe(skill=>{
            // this.data=skill;
            this.data['$key']=$key;
            this.data['name']=skill['name'];
            this.data['phone']=skill['phone'];
            this.data['notes']=skill['notes'];
            this.data['skill']=skill['skill'];
            this.data['city']=skill['city'];
            this.data['price']=skill['price'];
        });
    }
    onEdit(){
        let $key=this.data.$key;
        delete this.data.$key;
        this.itemList.update($key,this.data);
        this.itemArray=[];

    }

    onDelete($key){
        this.itemList.remove($key);
        this.itemArray=[];
    }

}


export class ListItemClass {
    $key: string;
    name: string;
    phone: string;
    notes: string;
    skill: string;
    city: string;
    price: string;
}
