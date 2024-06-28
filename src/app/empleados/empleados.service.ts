import { Injectable } from '@angular/core';
import { IEmpleado } from './interface/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private _empleados: IEmpleado[] = []

  constructor() { 
    this._empleados = JSON.parse(localStorage.getItem("empleados")!) || [];

  }

  get empleados(): IEmpleado[]{
    return this._empleados
  }

  agregarEmpleado(empleado: IEmpleado){
    this.empleados.push(empleado)

    localStorage.setItem("empleados", JSON.stringify(this._empleados))
  }

  eliminarEmpleado(id: number){
    this._empleados.splice(id, 1);

    localStorage.setItem("empleados", JSON.stringify(this._empleados))
  }

  GetEmpleado(id:number): IEmpleado{
    return this._empleados[id]
  }
  
  modificarEmpleado(id: number, empleado: IEmpleado){
    this.empleados[id] = empleado
    localStorage.setItem("empleados", JSON.stringify(this._empleados))
  }
}
