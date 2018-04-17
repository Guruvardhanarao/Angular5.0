import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedLang = 'lang1';
  selectedUser = 'user1';

  constructor() { }

  ngOnInit() {
  }

}
