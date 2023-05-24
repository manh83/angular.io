import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Array<Employee> = [];

  constructor() { 
  }

  ngOnInit(): void {
    // console.log("Employees", this.employee);
  }
}
