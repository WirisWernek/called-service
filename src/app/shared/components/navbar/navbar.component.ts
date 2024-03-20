import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from './../../../models/user.model';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	loggedUser$!: Observable<UserModel>;
	constructor(private authService: AuthService, private router: Router) {}
	ngOnInit() {
		this.authService.user$.subscribe((user) => {
			if (user) {
				this.authService.currentUserSig.set({
					email: user.email!,
					username: user.displayName!,
				});

				this.loggedUser$ = of<UserModel>({
					email: user.email!,
					username: user.displayName!,
				});
			} else {
				this.loggedUser$ = of<UserModel>({ email: '', username: '' });
				this.authService.currentUserSig.set(null);
				this.router.navigateByUrl('/');
			}
		});
	}
	logout() {
		this.authService.logout();
		this.loggedUser$ = of<UserModel>({ email: '', username: '' });
		this.authService.currentUserSig.set(null);
		this.router.navigateByUrl('/');
	}
}
