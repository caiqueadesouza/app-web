import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'src/app/_model/movimentacao.model';
import { MovimentacaoService } from 'src/app/_services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-read',
  templateUrl: './movimentacao-read.component.html'
})
export class MovimentacaoReadComponent implements OnInit {

  movimentacoes: Movimentacao[] = []
  displayedColumns = ['tipo_movimentacao', 'inicio', 'fim', 'container', 'acoes']

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.movimentacaoService.read().subscribe(movimentacoes => {
      this.movimentacoes = movimentacoes
    })
  }

}
