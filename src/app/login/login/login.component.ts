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
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Logging in")
  }

  loginWithGmail() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider)
    this.router.navigate[('dashboard')];
  }
}
