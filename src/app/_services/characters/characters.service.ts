import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod'
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
import {map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  character:any[] = [];//Personajes que quedaran preseleccionados en la seccion guardado
  characterSelected:any[] = [];//Personajes que quedaran en MarvelDEX
  
  private PUBLIC_KEY = environment.PUBLIC_KEY;
  private HASH = environment.HASH;
  private URL_API=`https://gateway.marvel.com:443/v1/public/characters?&limit=100&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  constructor(private http:HttpClient) { }

  //Consulta de los primeros 100 personajes arrojados por la API
  getAllCharacters(): Observable<any> {
    console.log(this.URL_API)
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any)=>{return data}))
  }
  
  //Buscar personajes que empiecen con cierto valor
  findCharacter(name:string){
    const url= `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&limit=100&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    console.log(url);
    return this.http.get<any>(url)
    .pipe(map((data:any)=>{return data}))
  }

  //Agregar personaje a la preseleccion
  addCard(char: any) {
    this.character = [...this.character, char];
  }

  //Agregar personaje al marvelDEX
  addCardChar(char: any) {
    this.characterSelected = [...this.characterSelected, char];
  }

  //Buscar Personaje por ID
  getCharById(id:number){
    const url= `https://gateway.marvel.com:443/v1/public/characters/${id}?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get<any>(url)
    .pipe(map((data:any)=>{return data}))
  }


  //Borrar personaje de preseleccion
  deleteCharacter(char: number){
    let indice= this.character.findIndex(x=> x.id == char);
    this.character.splice(indice,1);
    console.log(this.character)
  }

  //Borrar personaje de marvelDEX
  deleteCharacterChar(char: number){
    let indice= this.characterSelected.findIndex(x=> x.id == char);
    this.characterSelected.splice(indice,1);
    console.log(this.characterSelected)
  }

  
}
