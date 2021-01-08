import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profileDoc: AngularFirestoreDocument<ProfileInterface>;
  profile$: Observable<ProfileInterface>;

  private skillDoc: AngularFirestoreDocument<SkillInterface>;
  skill$: Observable<SkillInterface>;

  constructor(private afs: AngularFirestore) {

    this.profileDoc = afs.doc<ProfileInterface>('my-website/profile');
    this.profile$ = this.profileDoc.valueChanges();

    this.skillDoc = afs.doc<SkillInterface>('my-website/skills');
    this.skill$ = this.skillDoc.valueChanges();

  }

  ngOnInit() {
    this.profile$.subscribe(data => {
      return data;
    })

    this.skill$.subscribe(data => {
      return data;
    })
  }
}

interface ProfileInterface {
  profileArray: string[];
}

interface SkillInterface {
  title: string;
  list: string[];
}