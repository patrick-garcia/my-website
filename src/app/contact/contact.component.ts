import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  private contactDoc: AngularFirestoreDocument<ContactInterface>;
  contact$: Observable<ContactInterface>;

  constructor(private afs: AngularFirestore) {
    this.contactDoc = afs.doc<ContactInterface>('my-website/contact');
    this.contact$ = this.contactDoc.valueChanges();
  }

  ngOnInit() {
    this.contact$.subscribe(data => {
      return data;
    })
  }
}

interface ContactInterface {
  title: string;
  icon: string;
  link: string;
  openTab: boolean;
}