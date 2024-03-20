import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss',
})
export class RegisterComponent {
	form!: FormGroup;
	errorMessage: string | null = null;
	constructor(
		private fb: FormBuilder,
		private http: HttpClient,
		private router: Router,
		private authService: AuthService
	) {
		this.form = this.fb.group({
			username: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSubmit(): void {
		const rawForm = this.form.getRawValue();
		this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
			next: () => {
				this.router.navigateByUrl('/');
			},
			error: (err) => {
				this.errorMessage = err.code;
			},
		});
	}
}
