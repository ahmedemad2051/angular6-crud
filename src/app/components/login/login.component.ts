import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string='';
  password:string='';

  constructor(private fire:AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then(user=>{
        localStorage.setItem('isLoggedIn','true');
        this.router.navigate(['home']);
    }).catch(error=>{
      console.log(error);
    });
  }
}
