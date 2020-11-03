import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  sideBarOpen = true;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/console/productos']);
  }
}
