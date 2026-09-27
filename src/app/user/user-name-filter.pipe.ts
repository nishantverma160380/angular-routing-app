import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../models/userModel';

@Pipe({
  name: 'userNameFilter',
  standalone: true,
})
export class UserNameFilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    if (!searchTerm.trim()) {
      return users;
    }

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    return users.filter((user) => {
      const name = `${user.firstName} ${user.lastName}`.toLowerCase();
      return name.includes(normalizedSearchTerm);
    });
  }
}
