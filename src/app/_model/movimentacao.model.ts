export class Movimentacao {
  id?: number
  tipo_movimentacao: string
  inicio: string
  fim: string
  container_id: number

  constructor() {
    this.tipo_movimentacao = ''
    this.inicio = ''
    this.fim = ''
    this.container_id = 0
  }
}

