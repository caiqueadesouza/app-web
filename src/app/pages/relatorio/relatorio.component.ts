import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'src/app/_model/movimentacao.model';
import { RelatorioService } from 'src/app/_services/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html'
})
export class RelatorioComponent implements OnInit {

  movimentacao: Movimentacao[] = []
  displayedColumns = ['tipo_movimentacao', 'cliente', 'quantidade']

  qtdExp: [] = []
  qtdImp: [] = []

  constructor(private relatorioSevice: RelatorioService) { }

  ngOnInit(): void {
    this.relatorioSevice.read().subscribe(movimentacao => {
      this.movimentacao = movimentacao
    })

    this.qtdExportacao()
    this.qtdImportacao()
  }

  qtdExportacao(): void {
    this.relatorioSevice.qtdExportacao().subscribe(qtdExp => {
      this.qtdExp = qtdExp
    })
  }

  qtdImportacao(): void {
    this.relatorioSevice.qtdImportacao().subscribe(qtdImp => {
      this.qtdImp = qtdImp
    })
  }

}
