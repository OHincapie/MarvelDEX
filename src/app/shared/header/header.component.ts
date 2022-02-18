import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public globalService:GlobalService) { 
    
  }

  ngOnInit(): void {
  }

  logOut(){
    //Al darle en LogOut la variable global sera false para indicar que cerro sesion 
    this.globalService.login=false;
  }

}
