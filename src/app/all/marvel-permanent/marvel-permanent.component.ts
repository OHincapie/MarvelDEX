import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CharactersService} from '../../_services/characters/characters.service'

@Component({
  selector: 'app-marvel-permanent',
  templateUrl: './marvel-permanent.component.html',
  styleUrls: ['./marvel-permanent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelPermanentComponent implements OnInit {

  constructor(public charactersService:CharactersService) { }

  ngOnInit(): void {
    
  }

}
