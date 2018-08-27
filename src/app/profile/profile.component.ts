import { Component, OnInit } from '@angular/core';
import { skills } from '../data';
import { profile } from '../data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  newList = skills;

  bio = profile;

  constructor() { }

  ngOnInit() {
  }

}
