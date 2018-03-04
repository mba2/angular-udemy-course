import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.auth.user$.map(user => {
        if(user) {return true;}
        this.router.navigate(['/login']);
        return false;
      });
    }
}
