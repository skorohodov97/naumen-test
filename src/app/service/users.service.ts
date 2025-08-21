import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    { id: 1, name: 'Иван Петров', email: 'ivan@example.com', active: true },
    { id: 2, name: 'Мария Смирнова', email: 'maria@example.com', active: false },
    { id: 3, name: 'Алексей Иванов', email: 'alexey@example.com', active: true },
    { id: 4, name: 'Ольга Сидорова', email: 'olga@example.com', active: false }
  ];

  getUsers(): User[] {
    return this.users;
  }
}
