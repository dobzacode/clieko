import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  template: `<div>
    <button
      class="text-xl bg-black text-white p-sm rounded-sm"
      (click)="fetchUser()"
    >
      Fetch user
    </button>
    <p>Users: {{ user.id }}</p>
  </div>`,
  standalone: true,
})
export class UserComponent {
  private userService = inject(UserService);
  user: {
    id: number;
    name: string;
  } = { id: 0, name: 'Anonymous' };
  fetchUser() {
    console.log('fetch');
    this.userService.getUser().subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
}
