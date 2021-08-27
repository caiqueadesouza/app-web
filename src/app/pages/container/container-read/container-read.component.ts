import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/_model/container.model';
import { ContainerService } from 'src/app/_services/container.service';

@Component({
  selector: 'app-container-read',
  templateUrl: './container-read.component.html'
})
export class ContainerReadComponent implements OnInit {

  containers: Container[] = []
  displayedColumns = ['n_container', 'cliente', 'tipo', 'status', 'categoria', 'acoes']

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.containerService.read().subscribe(containers => {
      this.containers = containers
    })
  }

}
