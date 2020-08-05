import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { TasktableComponent } from './table/tasktable/tasktable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskformComponent } from './form/taskform/taskform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    TasktableComponent,
    TaskformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
