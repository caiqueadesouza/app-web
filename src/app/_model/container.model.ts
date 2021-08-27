export class Container {
  id?: number
  cliente: string
  numero: string
  tipo: number
  status: string
  categoria: string

  constructor() {
    this.cliente = ''
    this.numero = ''
    this.tipo = 0
    this.status = ''
    this.categoria = ''
  }
}
