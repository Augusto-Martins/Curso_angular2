import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';



@NgModule({
  declarations: [CursosComponent, CursoDetalhesComponent],
  exports: [CursosComponent],
  providers: [CursosService],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
