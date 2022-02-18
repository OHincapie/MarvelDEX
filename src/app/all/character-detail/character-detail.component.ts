import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  nombre: string;
  id: number;
  img: string;
  descripcion: string;
  noComics: number
}

//Dialogo emergente que se abrira
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  //Inyección de data enviada desde otro componente
  constructor(
    public dialogRef: MatDialogRef<CharacterDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  //Cerrar dialogoF
  onNoClick(): void {
    this.dialogRef.close();
  }
}
