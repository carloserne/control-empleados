import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interface/empleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nuevo: IEmpleado = {
      Nombre: ' ',
      Correo: ' ',
      Telefono: ' ',
      FechaNacimiento:  new Date(),
      sexo: ' '

  }


  constructor (private _empeladosService: EmpleadosService){}

  agregar(){
    if(this.nuevo.Nombre.trim().length == 0 
        || this.nuevo.Correo.trim().length == 0
        || this.nuevo.Telefono.trim().length == 0
        || this.nuevo.sexo.trim().length == 0)
      return;
    
    this._empeladosService.agregarEmpleado(this.nuevo)

    this.nuevo = {
      Nombre: ' ',
      Correo: ' ',
      Telefono: ' ',
      FechaNacimiento:  new Date(),
      sexo: ' '
    }

  }


}
