import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';``


import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { TestComponent } from './test/test.component';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { Form2Component } from './form2/form2.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { HiringManagerNameComponent } from './hiring-manager-name/hiring-manager-name.component';
import { HiringManagerEmailComponent } from './hiring-manager-email/hiring-manager-email.component';
import { DepartmentComponent } from './department/department.component';
import { MatSelectModule} from '@angular/material/select';
import { NewFormComponent } from './new-form/new-form.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableTestingComponent } from './table-testing/table-testing.component'



@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    TestComponent,
    CoursesComponent,
    CourseComponent,
    Form2Component,
    JobTitleComponent,
    HiringManagerNameComponent,
    HiringManagerEmailComponent,
    DepartmentComponent,
    NewFormComponent,
    TableTestingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports:[

  ],
  providers: [MatNativeDateModule, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
