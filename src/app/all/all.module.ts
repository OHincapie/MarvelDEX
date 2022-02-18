import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { MarvelPermanentComponent } from './marvel-permanent/marvel-permanent.component';
import {UserRoutingModule} from './all-routing.module';
import { CharacterComponent } from './character/character.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { GuardadosComponent } from './guardados/guardados.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';



@NgModule({
  declarations: [
    MarvelPermanentComponent,
    CharacterComponent,
    BusquedaComponent,
    GuardadosComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AllModule { }
