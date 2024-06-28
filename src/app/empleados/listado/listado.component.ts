import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interface/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

    constructor(private _empleadosService: EmpleadosService){}

    get empleados(): IEmpleado[]{
      return this._empleadosService.empleados
    } 

    eliminarEmpleado(id: number): void{
      if(id == -1)
        return;
      console.log(id)
      this._empleadosService.eliminarEmpleado(id)

    }

    seleccionarEmpleado(id: number): void{
      if(id == -1)
        return;
      let empleadoSeleccionado: IEmpleado = this._empleadosService.GetEmpleado(id)
    }
}
