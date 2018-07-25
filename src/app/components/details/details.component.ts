import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  skill:any=[];
  constructor(public route:ActivatedRoute,public db:AngularFireDatabase) {
    route.params.subscribe(params=>{
      let $key=params['id'];
      this.db.object('skills/'+$key).valueChanges().subscribe(skill=>{
        this.skill=skill;
      });
    });
  }

  ngOnInit() {
  }

}
