import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContainerReadComponent } from './pages/container/container-read/container-read.component';
import { ContainerCreateComponent } from './pages/container/container-create/container-create.component';
import { ContainerUpdateComponent } from './pages/container/container-update/container-update.component';
import { ContainerDeleteComponent } from './pages/container/container-delete/container-delete.component';
import { MovimentacaoReadComponent } from './pages/movimentacao/movimentacao-read/movimentacao-read.component';
import { MovimentacaoCreateComponent } from './pages/movimentacao/movimentacao-create/movimentacao-create.component';
import { MovimentacaoUpdateComponent } from './pages/movimentacao/movimentacao-update/movimentacao-update.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerReadComponent,
    ContainerCreateComponent,
    ContainerUpdateComponent,
    ContainerDeleteComponent,
    MovimentacaoReadComponent,
    MovimentacaoCreateComponent,
    MovimentacaoUpdateComponent,
    RelatorioComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
