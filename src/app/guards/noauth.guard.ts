import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class noAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(next, state):Observable<boolean>{
    return this.authService.afAuth.authState.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (loggedIn) {
          console.log('Ya estas logeado');   
          this.router.navigate(['/admin']);   
        }
      })
    );
  }
  
}
