import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerInfo: {};

  constructor(private firebase: AngularFireDatabase) { 
    this.headerInfo = firebase.object('general').valueChanges();
  }


  ngOnInit() { }

}
