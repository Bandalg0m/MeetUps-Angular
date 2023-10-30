import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(() => {
      /* TODO: change role assignment */
      this.authService.userInfo
        ? (this.authService.Role = this.authService.userInfo?.roles.map((item) => item.name)) &&
          this.router.navigate(['meetups'])
        : null;
      alert(`current role is ${this.authService.role}`);
    });
  }

  protected readonly scroll = scroll;
}
