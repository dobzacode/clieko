import { Component, OnInit, inject } from '@angular/core';
import { User } from '@api/user/interface-user';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '@client/shared/data-access/data-access-user';
import { HlmLabelDirective } from '@client/shared/ui/ui-label-helm';
import { HlmInputDirective } from 'client/shared/ui/ui-input-helm';
import { first, firstValueFrom } from 'rxjs';

@Component({
  selector: 'lib-profil',
  standalone: true,
  imports: [HlmInputDirective, HlmLabelDirective],
  templateUrl: './profil.component.html',
  host: {
    class: 'main',
  },
})
export class ProfilComponent implements OnInit {
  private userService = inject(UserService);

  public auth = inject(AuthService);
  user: User | null = null;
  async ngOnInit(): Promise<void> {
    const user = await firstValueFrom(this.auth.user$.pipe(first()));
    console.log(user);
    this.userService.getUserById(user?.sub ?? '').subscribe((user) => {
      this.user = user;
    });
  }
}
