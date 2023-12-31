import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'pUrb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ],
})
export class HomeComponent implements OnInit {
  ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
      .catch((param:any) => console.log(param))
  }
}
