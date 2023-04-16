import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hiring-manager-email',
  templateUrl: './hiring-manager-email.component.html',
  styleUrls: ['./hiring-manager-email.component.css']
})
export class HiringManagerEmailComponent {
  hiringManagerEmail = new FormControl('');
  

}
