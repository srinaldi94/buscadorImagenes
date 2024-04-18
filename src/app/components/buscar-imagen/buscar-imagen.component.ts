import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-imagen.component.html',
  styleUrl: './buscar-imagen.component.css'
})
export class BuscarImagenComponent {

  nombreImagen: string;

  constructor(private _imagenService: ImagenService){
    this.nombreImagen = "";
  }

  buscarImagenes(){
    if(this.nombreImagen === ''){
      this._imagenService.setError("Agregar un texto de busqueda");
      return;
    }

    this._imagenService.enviarTerminoBusqueda(this.nombreImagen);

  }
}
