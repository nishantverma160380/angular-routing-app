import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User as UserModel } from '../models/userModel';
import { User } from '../user/user';
import { UserNameFilterPipe } from '../user/user-name-filter.pipe';
import { UserService } from '../services/userService';

@Component({
  imports: [FormsModule, User, UserNameFilterPipe],
  selector: 'app-user-list',
  styleUrl: './user-list.scss',
  templateUrl: './user-list.html',
})
export class UserList {
  userList: UserModel[] = [];
  nameFilter = '';
  private userService = inject(UserService);

  constructor() {
    this.userService.getUserData().subscribe((users) => {
      this.userList = users;
    });
  }

    deleteUser(user: UserModel) {
        this.userList = this.userList.filter(u => u.id !== user.id);
    } 

}