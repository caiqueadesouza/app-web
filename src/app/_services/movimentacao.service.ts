import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movimentacao } from '../_model/movimentacao.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService extends BaseService<Movimentacao>{

  baseUrl = 'http://localhost/teste-pratico/teste-pratico-api/public/api/movimentacoes'

  constructor(snackBar: MatSnackBar, http: HttpClient) {
    super(snackBar, http)
  }
}
