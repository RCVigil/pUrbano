import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  // private url_api = 'http://localhost:3000/ofertas';

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get<any[]>(`${URL_API}/ofertas?destaque=true`)
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => resposta as Oferta[])
      .catch(this.handleError);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get<any[]>(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => resposta as Oferta[])
      .catch(this.handleError);
  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get<any>(`${URL_API}/ofertas?id=${id}`)
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => {
        return resposta[0] as Oferta;
      })
      .catch(this.handleError);
  }

  public getComoUsarOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get<any>(`${URL_API}/como-usar?id=${id}`)
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => {
        return resposta[0].descricao as Oferta;
      })
      .catch(this.handleError);
  }

  public getOndeFicaOfertasPorId(id: number): Promise<Oferta> {
    return this.http
      .get<any>(`${URL_API}/onde-fica?id=${id}`)
      .toPromise() // Converter o Observable em uma Promise
      .then((resposta: any) => {
        return resposta[0].descricao as Oferta;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro:', error);
    return Promise.reject(error.message || error);
  }
}
