import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fontAwesomeIcons } from '../data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']

})

export class NavComponent implements OnInit {

  icons = fontAwesomeIcons;

  isActive:boolean = false;
  
  closeNav() {
    this.isActive = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
