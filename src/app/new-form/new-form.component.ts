import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { FormBuilder } from '@angular/forms';



export interface TableTestingItem {
  name: string;
  department: string;
}


const EXAMPLE_DATA: TableTestingItem[] = [
  {department: "hr", name: 'Daryl'},
 
];

interface Department {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  

  form1;
  constructor(private formBuilder: FormBuilder){
      this.form1=this.formBuilder.group({
        dates: '',
        job_title:'',
        department: '',
        hm_name: '',
        hm_email: ''
      })
    }

  minDate= new Date();


  departments: Department[] = [
    {value: 'HR', viewValue: 'HR'},
    {value: 'Software Development', viewValue: 'Software Development'},
    {value: 'Marketing', viewValue: 'Marketing'},
  ];


  hiringManagerEmail = new FormControl('');
  hiringManagerName = new FormControl('');
  jobTitle = new FormControl('');

   selectedJobTitle:any = "n/a";
   selectedHiringManagerEmail:any = "n/a";
   selectedHiringManagerName:any = "n/a";
   selectedDate:any = "n/a";
   selectedDepartment:any = "n/a";

  Submit(){
    this.selectedHiringManagerEmail = this.form1.get('hm_email')?.value;
    this.selectedHiringManagerName = this.form1.get('hm_name')?.value;
    this.selectedJobTitle = this.form1.get('job_title')?.value;
    this.selectedDate = this.form1.get('dates')?.value;
    this.selectedDepartment = this.form1.get('department')?.value;
    console.log(this.selectedHiringManagerEmail)
  }

  displayedColumns: string[] = ['jobTitle', 'dept', 'hmName', 'hmEmail', 'date'];
  dataSource = EXAMPLE_DATA;

  



}
