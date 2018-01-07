import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

/* Anytime the service has an injected dependency, it must use the @Injectable() annotation */
@Injectable()
export class ProductGuardService implements CanActivate {
  constructor(private _router: Router) {}

  /* use route guards anytime you want to prevent access to a route, confirm navigation away from the route, or pre-load data for a route
     canActivate method is the guard. Must implement the CanActivate interface. Must also implement the canActivate method in the service.
     Service must also be declared in a Providers array*/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid Product ID');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
