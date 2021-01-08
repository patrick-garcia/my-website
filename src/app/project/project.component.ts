// import { Component, OnInit } from '@angular/core';
// import { gallery, ufGallery } from '../data';

// @Component({
//   selector: 'app-project',
//   templateUrl: './project.component.html',
//   styleUrls: ['./project.component.scss'],
// })

// export class ProjectComponent implements OnInit {
//   gallery = gallery;
//   ufGallery = ufGallery;
  
//   constructor() { }

//   ngOnInit() {
//   }
// }


// ****
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  private projectDoc: AngularFirestoreDocument<ProjectInterface>;
  project$: Observable<ProjectInterface>;

  private project2Doc: AngularFirestoreDocument<ProjectInterface>;
  project2$: Observable<ProjectInterface>;

  constructor(private afs: AngularFirestore) {

    this.projectDoc = afs.doc<ProjectInterface>('my-website/project');
    this.project$ = this.projectDoc.valueChanges();

    this.project2Doc = afs.doc<ProjectInterface>('my-website/project2');
    this.project2$ = this.project2Doc.valueChanges();

  }

  ngOnInit() {
    this.project$.subscribe(data => {
      return data;
    })

    this.project2$.subscribe(data => {
      return data;
    })
  }
}


interface ProjectInterface {
  title: string;
  desc: string;
  imgPath: string;
  url: string;
  list: string[];
  heading: string;
}