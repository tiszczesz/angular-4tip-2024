import { Component, input, output } from '@angular/core';
import { User } from '../../models/data_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectedUserClick() {
   this.selectedUser.emit(this.user());//wysyła dane do rodzica selectedUser
}

  user = input.required<User>(); //pobierna dane z rodzica
  selectedUser = output<User>(); //wysyła dane do rodzica selectedUser

  get imagePath() {
    return '/users/'+this.user().avatar;
  }
}
