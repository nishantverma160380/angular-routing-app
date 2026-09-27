import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User as UserModel } from '../models/userModel';

@Component({  
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})

export class User {
  @Input() userChildList!: UserModel;

  @Output() deleteUserSelected = new EventEmitter<UserModel>();

  deleteUser() {
    if (this.userChildList) {
      this.deleteUserSelected.emit(this.userChildList);
    }
  }
}