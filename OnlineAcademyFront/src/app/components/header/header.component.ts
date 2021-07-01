import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navLinks = [
    {
      route: 'students',
      label: 'Students'
    },
    {
      route: 'courses',
      label: 'Courses'
    }
  ];
  constructor() { }

}
