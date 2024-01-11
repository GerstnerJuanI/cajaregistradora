import { Component, Input, numberAttribute } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'cpt-comanda',
  standalone: true,
  imports: [],
  templateUrl: './comanda.component.html',
  styleUrl: './comanda.component.scss',
})
export class ComandaComponent {
  @Input() arrProductos: Producto[] = [];

  calcularTotal(): number {
    let resultado = 0;
    for (let producto of this.arrProductos) {
      resultado += (producto.precio * producto.cantidad);
    }
    return resultado;
  }
  onClickBorrar($index:any){
    if (this.arrProductos[$index].cantidad === 1) {
      this.arrProductos.splice($index, 1);
    } else {
      this.arrProductos[$index].cantidad--;
    }
  }
}
