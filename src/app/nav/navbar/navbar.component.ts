import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  auth: AngularFireAuth;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
  }
}
