import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Container } from 'src/app/_model/container.model';
import { MyErrorStateMatcher } from 'src/app/_model/validate';
import { ContainerService } from 'src/app/_services/container.service';

@Component({
  selector: 'app-container-create',
  templateUrl: './container-create.component.html'
})
export class ContainerCreateComponent implements OnInit {

  container: Container = {
    cliente: '',
    numero: '',
    tipo: 0,
    status: '',
    categoria: ''
  }

  //validações
  form!: FormGroup;
  matcher = new MyErrorStateMatcher

  constructor(
    private fb: FormBuilder,
    private containerService: ContainerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formValidacao()
  }

  //validações
  get f() {
    return this.form.controls
  }

  formValidacao(): void {
    this.form = this.fb.group({
      cliente: ['', [Validators.required]],
      numero: ['', [Validators.required, Validators.maxLength(11), Validators.maxLength(11)]],
      tipo: ['', [Validators.required]],
      status: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    })
  }

  save(): void {
    console.log(this.container)
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      this.containerService.create(this.container).subscribe(() => {
        this.containerService.showMessage('Container criado com sucesso!')
        this.router.navigate(['/containers'])
      })
    }
  }

}
