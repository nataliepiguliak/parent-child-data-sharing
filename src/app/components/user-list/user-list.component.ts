import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserItemComponent } from '../user-item/user-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: User[] = [
    {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 20,
    },
    {
      firstName: 'Max',
      lastName: 'Wilson',
      age: 35,
    },
    {
      firstName: 'John',
      lastName: 'Clark',
      age: 12,
    },
  ];

  handleSelectUser(user: User) {
    alert(`${user.firstName} ${user.lastName}, ${user.age}`);
  }
}
