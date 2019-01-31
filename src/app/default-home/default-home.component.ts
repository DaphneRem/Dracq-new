import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { navItems } from './../nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit, AfterViewInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public navbarToggler;

  constructor() {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.removeSecondBurgerIcon();
  }

  removeSecondBurgerIcon() {
    this.navbarToggler = this.element.getElementsByClassName('navbar-toggler');
    this.navbarToggler[2].remove();
  }

}
