import { Component, OnInit } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.closeNavbar();
  }

  closeNavbar() {
    let navbar = document.getElementsByClassName('sidebar-fixed');
    console.log(navbar);
    if (navbar.length >= 0) {
      navbar[0].classList.remove('sidebar-lg-show');
    }
  }

}
