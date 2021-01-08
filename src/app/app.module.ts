import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: NameComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NavComponent,
    ProjectComponent,
    ProfileComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
