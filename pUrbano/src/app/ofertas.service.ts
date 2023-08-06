import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get<any[]>('http://localhost:3000/ofertas?destaque=true')
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => resposta as Oferta[])
      .catch(this.handleError);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get<any[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => resposta as Oferta[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro:', error);
    return Promise.reject(error.message || error);
  }
}
