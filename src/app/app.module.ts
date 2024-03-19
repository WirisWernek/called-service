import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FormTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
