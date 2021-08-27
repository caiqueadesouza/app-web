import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Container } from '../_model/container.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerService extends BaseService<Container> {

  baseUrl = 'http://localhost/teste-pratico/teste-pratico-api/public/api/containers'

  constructor(snackBar: MatSnackBar, http: HttpClient) {
    super(snackBar, http)
  }
}
