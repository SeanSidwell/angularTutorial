import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hiring-manager-name',
  templateUrl: './hiring-manager-name.component.html',
  styleUrls: ['./hiring-manager-name.component.css']
})
export class HiringManagerNameComponent {
  hiringManagerName = new FormControl('');

}
