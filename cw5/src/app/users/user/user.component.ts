import { Component, input, output } from '@angular/core';
import { User } from '../../models/data_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user = input.required<User>(); 

  get imagePath() {
    return '/users/'+this.user().avatar;
  }
}
