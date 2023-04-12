import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';``
import { DateComponent } from './date/date.component';


import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [MatNativeDateModule, MatInputModule],
  bootstrap: [AppComponent,]
})
export class AppModule { }
