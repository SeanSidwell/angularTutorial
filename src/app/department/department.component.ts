import { Component } from '@angular/core';

interface Department {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  departments: Department[] = [
    {value: 'hr-0', viewValue: 'HR'},
    {value: 'softwareDevelopment-1', viewValue: 'Software Development'},
    {value: 'marketing-2', viewValue: 'Marketing'},
  ];
}
