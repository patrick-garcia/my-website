import { Component, OnInit } from '@angular/core';
import { myPersonalInfo } from '../data';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})

export class NameComponent implements OnInit {

  myInfo = myPersonalInfo;

  constructor() { }

  ngOnInit() {
  }

}
