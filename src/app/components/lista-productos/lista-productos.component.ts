import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'cpt-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss',
})
export class ListaProductosComponent {
  @Input() titulo: string = '';
  @Input() productos: Producto[] = [];
  @Output() seleccionado:EventEmitter<Producto> = new EventEmitter();
  onClickProducto(pProducto:Producto){
    this.seleccionado.emit(pProducto);
  }
}
