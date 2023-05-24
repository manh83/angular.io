import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  employeeData: Array<Employee> = [
   {
    "id": 1,
    "firstName": 'John',
    "lastName": "cao",
    "birthdate": "2003-04-15",
    "phoneNumber": "0321342432",
    "gender": "nam",
    "company": "Mb",
    "salary": 10
   },
   {
    "id": 1,
    "firstName": 'John',
    "lastName": "cao",
    "birthdate": "2003-04-15",
    "phoneNumber": "0321342432",
    "gender": "nam",
    "company": "Mb",
    "salary": 10
   }
  ]
}
