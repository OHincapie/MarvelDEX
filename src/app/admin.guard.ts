import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {GlobalService} from './global.service'

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {

    constructor(
      private globalService: GlobalService,
      private router: Router
    ) {
  
    }
  
    //Verifica si la variable global es verdadera, si es verdadera el usuario esta logueado
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          if(this.globalService.login){
              return true
          }

          this.router.navigate(['/user/login']);
        return false;
    }
  
  }
  
