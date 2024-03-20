import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTicketComponent } from './views/form-ticket/form-ticket.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TicketsComponent } from './views/tickets/tickets.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
	path: "register",
	component: RegisterComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'form',
    component: FormTicketComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
