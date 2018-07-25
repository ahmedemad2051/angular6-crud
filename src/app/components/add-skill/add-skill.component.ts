import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-add-skill',
    templateUrl: './add-skill.component.html',
    styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

    data = {
        name: '',
        phone: '',
        skill: '',
        city: '',
        price: '',
        notes: ''
    };


    itemList:AngularFireList<any>;

    constructor(public db:AngularFireDatabase, public router:Router,public fireAuth:AngularFireAuth) {
        this.itemList=db.list('skills');
    }

    ngOnInit() {
    }

    // add new skill to database
    storeSkill(){
        let user=this.fireAuth.authState.subscribe(user=>{
            if(user){
                this.data['uid']=user.uid;
                this.itemList.push(this.data);
                this.router.navigate(['/mySkills']);
            }
        });

    }

}
