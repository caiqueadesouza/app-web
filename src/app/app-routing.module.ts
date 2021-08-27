import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCreateComponent } from './pages/container/container-create/container-create.component';
import { ContainerDeleteComponent } from './pages/container/container-delete/container-delete.component';
import { ContainerReadComponent } from './pages/container/container-read/container-read.component';
import { ContainerUpdateComponent } from './pages/container/container-update/container-update.component';
import { HomeComponent } from './pages/home/home.component';
import { MovimentacaoCreateComponent } from './pages/movimentacao/movimentacao-create/movimentacao-create.component';
import { MovimentacaoReadComponent } from './pages/movimentacao/movimentacao-read/movimentacao-read.component';
import { MovimentacaoUpdateComponent } from './pages/movimentacao/movimentacao-update/movimentacao-update.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  //container
  { path: 'containers', component: ContainerReadComponent },
  { path: 'containers/novo', component: ContainerCreateComponent },
  { path: 'containers/update/:id', component: ContainerUpdateComponent },
  { path: 'containers/delete/:id', component: ContainerDeleteComponent },

  //movimentacoes
  { path: 'movimentacoes', component: MovimentacaoReadComponent },
  { path: 'movimentacoes/novo', component: MovimentacaoCreateComponent },
  { path: 'movimentacoes/update/:id', component: MovimentacaoUpdateComponent },

  { path: 'relatorio', component: RelatorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
