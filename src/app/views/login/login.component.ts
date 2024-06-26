import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	form!: FormGroup;
	errorMessage: string | null = null;
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private router: Router,
		private authService: AuthService
	) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSubmit(): void {
		const rawForm = this.form.getRawValue();
		this.authService.login(rawForm.email,  rawForm.password).subscribe({
			next: () => {
				this.router.navigateByUrl('/tickets');
			},
			error: (err) => {
				this.errorMessage = err.code;
			},
		});
	}
}
