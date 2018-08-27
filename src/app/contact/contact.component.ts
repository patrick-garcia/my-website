import { Component, OnInit } from '@angular/core';
import { contactDetails } from '../data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = contactDetails;

  constructor() { }

  ngOnInit() {
  }

}
