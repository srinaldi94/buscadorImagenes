import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnDestroy{


  texto: string = '';
  mostrar: boolean = false;
  suscripcion: Subscription;

  constructor(private _imagenService: ImagenService){
    this.suscripcion = this._imagenService.getError().subscribe( data => {
      this.mostrarMensaje();
      this.texto = data;
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  
  mostrarMensaje(){
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false;
    }, 2000);
  }



}
