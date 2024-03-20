import { Injectable, signal } from '@angular/core';
import {
	Auth,
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	user,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UserModel } from './../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	user$!: Observable<User | null>;
	currentUserSig = signal<UserModel | null | undefined>(undefined);
	constructor(private firebaseAuth: Auth) {
		this.user$ = user(firebaseAuth);
	}
	register(email: string, username: string, password: string): Observable<void> {
		const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(
			(response) => {
				updateProfile(response.user, { displayName: username });
			}
		);
		return from(promise);
	}
	login(email: string, password: string): Observable<void> {
		const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(
			() => {}
		);
		return from(promise);
	}
	logout(): Observable<void>{
		const promise= signOut(this.firebaseAuth);
		return from(promise);
	}
}
