import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
headerTitle = "string"
logoLink = "string"

constructor(){
  this.headerTitle = "Employee Management System"
  this.logoLink = "https://ant.design/"
}
}

