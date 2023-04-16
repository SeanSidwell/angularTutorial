import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

    
  }

  ngOnInit(){
    this.myForm = this.formBuilder.group({
      email:'',
      message:'',
      career:''
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

}
