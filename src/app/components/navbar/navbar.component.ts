import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nsb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  lowResolution: boolean = false;

  constructor(private router: Router) {

  }
}
