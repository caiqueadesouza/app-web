import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Container } from 'src/app/_model/container.model';
import { Movimentacao } from 'src/app/_model/movimentacao.model';
import { MyErrorStateMatcher } from 'src/app/_model/validate';
import { ContainerService } from 'src/app/_services/container.service';
import { MovimentacaoService } from 'src/app/_services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html'
})
export class MovimentacaoCreateComponent implements OnInit {

  movimentacao: Movimentacao = {
    tipo_movimentacao: '',
    inicio: '',
    fim: '',
    container_id: 0,
  }

  containers: Container[] = []

  form!: FormGroup;
  matcher = new MyErrorStateMatcher

  constructor(
    private fb: FormBuilder,
    private containerService: ContainerService,
    private movimentacaoService: MovimentacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formValidacao()

    this.containerService.read().subscribe(containers => {
      this.containers = containers
    })
  }

  get f() {
    return this.form.controls
  }

  formValidacao(): void {
    this.form = this.fb.group({
      tipo_movimentacao: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fim: ['', [Validators.required]],
      container_id: ['', [Validators.required]],
    })
  }

  save(): void {
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      this.movimentacaoService.create(this.movimentacao).subscribe(() => {
        this.containerService.showMessage('Movimentação criado com sucesso!')
        this.router.navigate(['/movimentacoes'])
      })
    }
  }

}
