import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarvelPermanentComponent} from './marvel-permanent/marvel-permanent.component';
import {GuardadosComponent} from './guardados/guardados.component';
import {BusquedaComponent} from './busqueda/busqueda.component'
const routes: Routes = [
  {
    path: '',
    component:MarvelPermanentComponent,
    children:[
      {
        path:'save',
        component:GuardadosComponent
      },
      {
        path: 'search',
        component: BusquedaComponent
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
