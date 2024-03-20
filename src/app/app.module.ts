import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormTicketComponent } from './views/form-ticket/form-ticket.component';
import { LoginComponent } from './views/login/login.component';
import { TicketsComponent } from './views/tickets/tickets.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		TicketsComponent,
		NavbarComponent,
		FormTicketComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideDatabase(() => getDatabase()),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
