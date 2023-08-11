import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'pUrb-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  oferta!: Oferta;
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    const ofertaId = +this.route.snapshot.params['id'];

    this.ofertasService
      .getOfertasPorId(ofertaId)
      .then((oferta: Oferta ) => {
        if (oferta) {
          this.oferta = oferta;
          console.log(oferta);
        } else {
          console.log('Oferta não encontrada.');
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar a oferta:', error);
      });
  }

  ngOnDestroy(): void {}
}
