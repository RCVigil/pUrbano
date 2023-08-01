export class Oferta {
  public id: number;
  public categoria: string;
  public titulo: string;
  public descricao_oferta: string;
  public anunciante: string;
  public valor: number;
  public destaque: boolean;
  public imagens: object[];

  constructor() {
    this.id = 0;
    this.categoria = '';
    this.titulo = '';
    this.descricao_oferta = '';
    this.anunciante = '';
    this.valor = 0;
    this.destaque = false;
    this.imagens = [];
  }
}
