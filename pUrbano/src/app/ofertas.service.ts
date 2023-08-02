import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model"
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'; // Importe o operador 'map'

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  // public getOfertas(): Promise<Oferta[]> {
  //     // comando para execução do banco fake: json-server --watch banco_de_dados.json
  //   // efetuar uma requisição http
  //   return this.http.get('http://localhost:3000/ofertas');
  //     pipe(
  //       map((resposta: any) => resposta as Oferta[]) // Utilize o operador 'map' para mapear a resposta para o tipo 'Oferta[]'
  //     )
  //     .toPromise()
  //     .then((resposta: any) => resposta.json())
  //   // retornar uma promise Ofertas[]
  // }
  public getOfertas(): Promise<Oferta[]> {
    return this.http.get<any[]>('http://localhost:3000/ofertas?destaque=true')
      .pipe(
        map((resposta: any) => resposta as Oferta[])
      )
      .toPromise()
      .catch(this.handleError); // Adicione um mecanismo de tratamento de erros
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro:', error);
    return Promise.reject(error.message || error);
  }
  // public getOfertas2(): Promise<Oferta[]> {
  //   return new Promise((resolve, reject) => {
  //     console.log("Passou por aqui");
  //     let res = false;
  //     if (res) {
  //       setTimeout(() => resolve(this.ofertas), 3000);
  //     } else {
  //       reject({error: 404, mensage: "Not Found"});
  //     }
  //   })
  // }
}
