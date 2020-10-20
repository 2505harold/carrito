import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  sideBarOpen = true;
  constructor() {}

  ngOnInit(): void {}
  sidebarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
