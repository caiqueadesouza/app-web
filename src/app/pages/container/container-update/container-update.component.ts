import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Container } from 'src/app/_model/container.model';
import { MyErrorStateMatcher } from 'src/app/_model/validate';
import { ContainerService } from 'src/app/_services/container.service';

@Component({
  selector: 'app-container-update',
  templateUrl: './container-update.component.html'
})
export class ContainerUpdateComponent implements OnInit {

  container!: Container
  id = this.route.snapshot.params['id']

  //validações
  form!: FormGroup;
  matcher = new MyErrorStateMatcher

  constructor(
    private fb: FormBuilder,
    private containerService: ContainerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formValidacao()

    this.containerService.readById(this.id).subscribe(container => {
      this.container = container
    })
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
    this.form.markAllAsTouched();
    if (!this.form.invalid) {
      this.containerService.update(this.container, this.id).subscribe(() => {
        this.containerService.showMessage('Container salvo com sucesso');
        this.router.navigate(['/containers'])
      })
    }
  }

}
