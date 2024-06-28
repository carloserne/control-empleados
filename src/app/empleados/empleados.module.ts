import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './listado/listado.component';
import { EmpleadosService } from './empleados.service';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent, CabeceraComponent, ListadoComponent, PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioComponent,
    CabeceraComponent,
    ListadoComponent,
    PaginaInicioComponent

  ],providers:[
    EmpleadosService
  ]

})
export class EmpleadosModule { }
