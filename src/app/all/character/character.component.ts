import { Component, OnInit, Input } from '@angular/core';
import {CharactersService} from '../../_services/characters/characters.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CharacterDetailComponent} from '../character-detail/character-detail.component'
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() nombre: string='';
  @Input() id: string='';
  @Input() img: string='';
  @Input() descripcion: string='';
  @Input() comics: any='';
  
  comic: any;
  constructor(private charactersService:CharactersService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Borrar personaje de guardados
  deleteChar(id:any){
    console.log(id)
    this.charactersService.deleteCharacterChar(id);
  }

  // getById(id:any){
  //   let arreglo;
  //   this.charactersService.getCharById(id)
  //   .subscribe((res)=> {arreglo=res;
  //     for(let a of arreglo){
  //       this.comic = a.comics.avaliable
  //     }
  //   })
  // }

  //Abrir el dialogo de detalle del personaje
  openDialog(id:any): void {
    console.log(this.comics.available)
    const dialogRef = this.dialog.open(CharacterDetailComponent, {
      width: '500px',
      //Se manda la DATA usada en el componente del detalle de Personaje
      data: {nombre: this.nombre, id: this.id, img: this.img, descripcion: this.descripcion, noComics: this.comics.available },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


