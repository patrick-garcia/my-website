import { Component, OnInit } from '@angular/core';
import { gallery } from '../data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  gallery = gallery;

  // imgUrl = gallery.imgPath;

  constructor() { }

  ngOnInit() {
  }

}
