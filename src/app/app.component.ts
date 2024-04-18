import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarImagenComponent } from './components/listar-imagen/listar-imagen.component';
import { BuscarImagenComponent } from './components/buscar-imagen/buscar-imagen.component';
import { ErrorComponent } from './shared/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BuscarImagenComponent, ListarImagenComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Buscador de imagenes - Pixabay';
}
