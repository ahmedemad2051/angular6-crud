import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'app-all-skills',
  templateUrl: './all-skills.component.html',
  styleUrls: ['./all-skills.component.css']
})
export class AllSkillsComponent implements OnInit {

  itemList: AngularFireList<any>;
  itemArray = [];

  constructor(public db: AngularFireDatabase) {
    this.itemList = db.list('skills');
    this.itemList.snapshotChanges()
        .subscribe(actions=>{
              actions.forEach(action=>{
                let y = action.payload.toJSON();
                y["$key"] = action.key;
                this.itemArray.push(y as ListItemClass)

              })
            }
        );

    console.log(this.itemArray);
  }

  ngOnInit() {
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
