import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TicketModel } from './../models/ticket.model';

@Injectable({
	providedIn: 'root',
})
export class TicketService {
	constructor() {}

	getTickets(): Observable<TicketModel[]> {
		let list: TicketModel[] = [];
		let DESCRICAO =
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, temporibus enim numquam aspernatur nihil commodi harum ab eligendi aliquid beatae, aut fuga, sed expedita magnam aliquam sequi molestiae explicabo corrupti.';
		list.push({
			id: 1,
			titulo: 'Barulho estranho na máquina',
			categoria: 'Hardware',
			solicitante: 'Marta Maria Marilu',
			descricao: DESCRICAO,
		});
		list.push({
			id: 2,
			titulo: 'Paint não abre',
			categoria: 'Software',
		solicitante: "Roberta Rodrigues Ritch",
			descricao: DESCRICAO,
		});
		list.push({
			id: 3,
			titulo: 'Maquina sem conexão com a rede',
			categoria: 'Rede',
			solicitante: "Mireli Marcondes Mendonça",
			descricao: DESCRICAO,
		});
		list.push({
			id: 4,
			titulo: "Impressora imprimindo 'O capeta possui essa impressora'",
			categoria: 'Impressora',
			solicitante: "Marcia Sensitiva",
			descricao: DESCRICAO,
		});
		list.push({
			id: 5,
			titulo: 'Emails enviados em duplicidade',
			categoria: 'Email',
			solicitante: "Wiris Wernek",
			descricao: DESCRICAO,
		});
		list.push({
			id: 6,
			titulo: 'Sem acesso aos sistemas',
			categoria: 'Acesso',
			solicitante: "Glória Maria",
			descricao: DESCRICAO,
		});
		list.push({
			id: 7,
			titulo: 'Pessoa com data de nascimento incorreta',
			categoria: 'Inconsistência de Dados',
			solicitante: "Fausto Silva",
			descricao: DESCRICAO,
		});
		return of<TicketModel[]>(list);
	}
}
