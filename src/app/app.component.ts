import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComandaComponent } from './components/comanda/comanda.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComandaComponent,
    ListaProductosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cajaregistradora';
  arrComida: Producto[] = [
    new Producto(
      'sopa',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a3xSN3drYMtjDK7S6laEDQHaE8%26pid%3DApi&f=1&ipt=b468bd71acae470f01a6416039f8b3232a91c8d0dd7c044600fa771e3dec6d41&ipo=images',
      1500.5
    ),
    new Producto(
      'asado',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zhCnkymxEUrzeQWdvuoAfQHaE8%26pid%3DApi&f=1&ipt=3223ab237c0778586acbe64c1548066b4b9776861cf021d81b673648efdd11a2&ipo=images',
      8000
    ),
    new Producto(
      'papas fritas',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PNcEl9K4uX4ggAchnx5kegHaEK%26pid%3DApi&f=1&ipt=dd988690e4ab91a6777f947f5df771e3ec98ccfba610477d056bc6b5f56e6eef&ipo=images',
      2500
    ),
  ];
  arrBebida: Producto[] = [
    new Producto(
      'Coca-cola',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oNs5PqzK_WAaiIhM1sa5uwHaKh%26pid%3DApi&f=1&ipt=7bde74dcce410cfd688bdbe4e6e8a8d22407036bf285015f95b5c3c1d80a2367&ipo=images',
      700
    ),
    new Producto(
      'vino tinto',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ftBg16P5afKqqweN6lIUpAHaHa%26pid%3DApi&f=1&ipt=77d69e63467854cbba606597e6d53a966bf625c01ae2578fb80e5c30bab849dd&ipo=images',
      3000
    ),
    new Producto(
      'limonada',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Sb3Lg9G8AgtXGblBY9L5ggHaHa%26pid%3DApi&f=1&ipt=beb1d48202cb8ec53cf4ff6455dba78d22186789ed2bf8671aff76431760ac7e&ipo=images',
      1500
    ),
  ];
  productosSeleccionados: Producto[] =[];
  onProdSeleccionado($event:any) {
    //this.productosSeleccionados.push($event);
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);
    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    } else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }
  }
}
