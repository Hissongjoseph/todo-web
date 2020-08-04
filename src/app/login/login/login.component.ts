import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Logging in")
  }

  loginWithGmail() {
    this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      res => {
        this.router.navigate(['']);
      }
    );
  }
}
