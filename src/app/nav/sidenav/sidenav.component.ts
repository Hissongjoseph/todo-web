import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
    this.route.navigate[('/login')];
  }
}
