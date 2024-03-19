import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';
import { TicketModel } from './../../models/ticket.model';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
	tickets$!: Observable<TicketModel[]>;
	constructor(private ticketService: TicketService, private router: Router) {}
	ngOnInit() {
		this.tickets$ = this.ticketService.getTickets();
	}
	verTicket(id: number){
		this.router.navigate(["/form"], {queryParams: {id: id}})
	}
}
