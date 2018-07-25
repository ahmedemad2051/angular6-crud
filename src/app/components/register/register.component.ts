import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string='';
  password:string='';

  constructor(private fire:AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }

  onRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password).then(user=>{
      this.router.navigate(['home']);
    }).catch(error=>{
      console.log(error);
    });
  }
}
