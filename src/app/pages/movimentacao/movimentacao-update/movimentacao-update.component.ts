import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Container } from 'src/app/_model/container.model';
import { Movimentacao } from 'src/app/_model/movimentacao.model';
import { MyErrorStateMatcher } from 'src/app/_model/validate';
import { ContainerService } from 'src/app/_services/container.service';
import { MovimentacaoService } from 'src/app/_services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-update',
  templateUrl: './movimentacao-update.component.html'
})
export class MovimentacaoUpdateComponent implements OnInit {

  form!: FormGroup;
  matcher = new MyErrorStateMatcher

  movimentacao!: Movimentacao
  id = this.route.snapshot.params['id'];

  containers: Container[] = []

  constructor(
    private containerService: ContainerService,
    private movimentacaoService: MovimentacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.movimentacaoService.readById(this.id).subscribe(movimentacao => {
      this.movimentacao = movimentacao
    });

    this.formValidacao()
    this.carregarConteners()
  }

  carregarConteners(): void {
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
    this.movimentacaoService.update(this.movimentacao, this.id).subscribe(() => {
      this.movimentacaoService.showMessage('Movimentação atualizada com sucesso!')
      this.router.navigate(['/movimentacoes'])
    })
  }
}
