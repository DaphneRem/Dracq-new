import { Component, OnInit, Input } from '@angular/core';
import { navItems } from './../nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit {
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

  ngOnInit() {
    this.navbarToggler = document.getElementsByClassName('d-md-down-none');
    // this.navbarToggler.remove();
    console.log(this.navbarToggler);
    console.log(typeof this.navbarToggler);
    // for (let i = 0; i < this.navbarToggler.length; ++i) {
    //   this.navbarToggler[i].remove();
    // }
    console.log(this.navbarToggler.length);

  }
}
