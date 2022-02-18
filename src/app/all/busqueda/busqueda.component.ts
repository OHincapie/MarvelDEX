import { Component, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../_services/characters/characters.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  //Campo Input para filtrar
  filter = new FormControl('');
  //Columnas
  displayedColumns: string[] = ['position', 'image', 'name', 'actions'];
  //data que se recibira
  data: any[] = [];
  //Data de la tabla
  dataSource = new MatTableDataSource<any>(this.data);
  //Paginador de la tabla
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  //Data recibida de la API para iterarla depsues
  public marvelCharacters: Array<any> = [];

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit(): void {
    //Trayendo los primeros 100 personajes
    this.getCharacters();
  }


  //Trayendo los primeros 100 personajes
  getCharacters() {
    let marvelData;
    //Suscripción al servicio
    this.charactersService.getAllCharacters().subscribe((res) => {
      //Recibiendo la DATA
      this.marvelCharacters = res.data.results;
      for (let a of this.marvelCharacters) {
        marvelData = {
          position: a.id,
          image: `${a.thumbnail.path}.${a.thumbnail.extension}`,
          name: a.name
        };
        //Mandando DATA a la tabla
        this.data.push(marvelData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;

      }
    });
  }



  //Aplicar filtro con el metodo getCharacter
  applyFilter(event: Event) {
    const filterValue = this.filter.value;
    console.log(filterValue)
    this.getCharacter(filterValue)

    // this.dataSource.filter = filterValue.trim().toLowerCase();  
  }


  //Buscando personajes por nombre y si no hay coicidencias por nombre, se buscara por ID
  getCharacter(data: string) {
    this.data = [];
    let marvelData;
    this.charactersService.findCharacter(data).subscribe((res) => {
      console.log(res.data.results)
      this.marvelCharacters = res.data.results;
      this.dataSource = new MatTableDataSource<any>([])
      console.log(this.marvelCharacters)
      if (this.marvelCharacters.length == 0) {
        this.getById(data);
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
    })
  }

  getRow(row: any) {
  }


  //Obteniendo personajes por ID especifico
  getById(id: any) {
    this.data = [];
    let marvelData;
    this.charactersService.getCharById(id)
      .subscribe((res) => {
        this.marvelCharacters = res.data.results;
        this.dataSource = new MatTableDataSource<any>([])
        console.log(this.marvelCharacters)
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
      })
  }

  //Guardar personaje y mandarlo a la seccion de guardados
  saveChar(event: any) {
    let indice = this.marvelCharacters.findIndex(x => x.id == event.position);
    let arreglo1 = this.charactersService.character.find(x => {
      if (x.id == event.position) {
        return true
      } else {
        return false
      }
    });

    if (arreglo1) {
      return;
    } else {
      this.charactersService.addCard(this.marvelCharacters[indice]);
    }
    console.log(this.charactersService.character)
  }

}
