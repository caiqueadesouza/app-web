import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Movimentacao } from '../_model/movimentacao.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService extends BaseService<Movimentacao>{
  baseUrl = "http://localhost/teste-pratico/public/api/relatorio"

  constructor(snackBar: MatSnackBar, http: HttpClient) {
    super(snackBar, http)
  }

  qtdExportacao(): Observable<[]> {
    return this.http.get<[]>(`${this.baseUrl}/exportacao`)
  }

  qtdImportacao(): Observable<[]> {
    return this.http.get<[]>(`${this.baseUrl}/importacao`)
  }
}
