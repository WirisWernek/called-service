export interface TicketModel {
	id?: number;
	titulo: string;
	categoria: string;
	descricao: string;
	solicitanteEmail?: string;
	solicitante: string;
	atendenteEmail?: string;
	atendente?: string;
}
