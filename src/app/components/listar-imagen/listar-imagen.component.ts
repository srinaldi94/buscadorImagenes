import { Component } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-listar-imagen',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './listar-imagen.component.html',
  styleUrl: './listar-imagen.component.css'
})
export class ListarImagenComponent {

  termino = "";
  suscription: Subscription;
  listImagenes: any[] = [];
  loading: boolean = false;
  imagenPorPagina: number = 30;
  paginaActual: number = 1;
  calcualarTotalPaginas: number = 0;

  constructor(private _imagenService: ImagenService){
    this.suscription = _imagenService.getTerminoBusqueda().subscribe( data => {
      this.termino = data;
      this.paginaActual = 1;
      this.loading = true;
      this.obtenerImagenes();
    })
  }

  obtenerImagenes(){
    this._imagenService.getImagenes(this.termino, this.imagenPorPagina, this.paginaActual).subscribe( data => {
      this.loading = false;
      if(data.hits.length === 0){
        this._imagenService.setError("Opss . . . no encontramos ningun resutado");
        return;
      }

      this.calcualarTotalPaginas = Math.ceil(data.totalHits/this.imagenPorPagina);

      this.listImagenes = data.hits;

    }, error => {
      this._imagenService.setError("Opss . . . ocurrio un error")
      this.loading = false;
    });
  }

  paginaAnterior() {
    this.paginaActual--;
    this.loading = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaSiguiente(){
    this.paginaActual++;
    this.loading = true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  paginaAnteriorClass(){
    if(this.paginaActual === 1){
      return false;
    }else{
      return true;
    }
  }

  paginaSiguienteClass(){
    if(this.paginaActual === this.calcualarTotalPaginas){
      return false;
    }else{
      return true;
    }
  }
}
