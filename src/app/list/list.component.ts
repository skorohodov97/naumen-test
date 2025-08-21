import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../service/users.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [ 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CommonModule
   ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less'
})
export class ListComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedEmail: string | null = null;

  searchTerm: string = '';
  filterType: string = 'all'; 

  constructor(private userService: UsersService) {
    this.users = this.userService.getUsers();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesFilter =
        this.filterType === 'all' ||
        (this.filterType === 'active' && user.active) ||
        (this.filterType === 'inactive' && !user.active);

      return matchesSearch && matchesFilter;
    });
  }

  onUserClick(user: User) {
    this.selectedEmail = user.email;
  }
}
