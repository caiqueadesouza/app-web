import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T>{

  baseUrl = 'http://localhost/teste-pratico/teste-pratico-api/public/api'

  constructor(protected snackBar: MatSnackBar, protected http: HttpClient) { }

  read(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl)
  }

  create(objeto: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/store`, objeto)
  }

  readById(id: number): Observable<T> {
    const url = `${this.baseUrl}/show/${id}`
    return this.http.get<T>(url)
  }

  update(objeto: T, id: number): Observable<T> {
    const url = `${this.baseUrl}/update/${id}`
    return this.http.put<T>(url, objeto)
  }

  delete(id: number): Observable<T> {
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<T>(url)
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "msg-success"
    })
  }
}
