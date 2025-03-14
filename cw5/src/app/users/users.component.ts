import { Component, signal } from '@angular/core';
import { UserComponent } from './user/user.component';
import { User, users } from '../models/data_users';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  selectedUser = signal<User | undefined>(undefined);

  onUserSelect(user: User) {
    console.log('User selected:', user);
    this.selectedUser.set(user);
  }

  usersList = signal<User[]>(users);
}
