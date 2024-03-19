export interface TicketModel {
	id?: number;
	titulo: string;
	categoria: string;
	descricao: string;
	solicitante: string;
	atendente?: string;
}
