import { Component } from '@angular/core';

@Component({
  selector: 'pUrb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pUrbano';
  ngOnInit() {
    console.log(`
    Se não estiver rodando o banco de dados precisa rodar este comando abaixo,

    json-server --watch banco-de-dados.json
    `);
  }
}
