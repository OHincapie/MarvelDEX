import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CharactersService } from '../../_services/characters/characters.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.component.html',
  styleUrls: ['./guardados.component.scss']
})
export class GuardadosComponent implements OnInit, AfterViewInit {

  //Input para filtar
  filter = new FormControl('');
  //Propiedades de la tabla y su data
  displayedColumns: string[] = ['position', 'image', 'name', 'actions'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  //Array que recibira la data desde la API
  public marvelCharacters: Array<any> = [];

  //Paginador de la tabla
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    //Se inicializa el paginador antes de iniciar el componente
    this.dataSource.paginator = this.paginator
  }

  //Obteniendo los guardados
  constructor(private charactersService: CharactersService) {
    this.getSaves();
  }

  ngOnInit(): void {
  }



  //Aplicando filtro sobre la tabla 
  applyFilter(event: Event) {
    const filterValue = this.filter.value;
    console.log(filterValue)

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Obteniendo los guardados desde la variable character del servicio
  getSaves() {
    this.data = [];
    let marvelData;
    this.marvelCharacters = this.charactersService.character;
    if (this.marvelCharacters.length == 0) {

      this.dataSource = new MatTableDataSource<any>([]);

    }
    for (let a of this.marvelCharacters) {
      marvelData = {
        position: a.id,
        image: `${a.thumbnail.path}.${a.thumbnail.extension}`,
        name: a.name
      };

      this.data.push(marvelData);
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;

    }
  }

  getRow(row: any) {
    console.log(this.charactersService.character);

  }

  //Agregando personaje al marvelDEX 
  addCharacter(event: any) {
    let indice = this.marvelCharacters.findIndex(x => x.id == event.position);
    //Revisa si ya existe el objeto dentro del arreglo de seleccionados
    let arreglo1 = this.charactersService.characterSelected.find(x => {
      if (x.id == event.position) {
        return true
      } else {
        return false
      }
    });

    if (arreglo1) {
      return;
    } else {
      //Si no contiene al objeto lo guarda 
      this.charactersService.addCardChar(this.marvelCharacters[indice]);
    }
  }


  //Borrando personaje 
  deleteProduct(object: number) {
    this.charactersService.deleteCharacter(object);
    this.getSaves();
    console.log(this.charactersService.character)
  }

}
