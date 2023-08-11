import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'pUrb-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService],
})
export class OndeFicaComponent {
  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.ofertasService
      .getOndeFicaOfertasPorId(this.route.parent?.snapshot.params['id'])
      .then((descricao: any) => {
        return (this.comoUsar = descricao);
      });
  }
}
