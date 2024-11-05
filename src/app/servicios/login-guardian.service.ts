import { Injectable } from '@angular/core';
import { authState, Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate {

  constructor(
    private authService: Auth,
    private router: Router
  ) { }
  canActivate(): Observable<boolean> {
    return authState(this.authService).pipe(
      map(auth => !!auth || (this.router.navigate(['/login']), false))
    );
  }
}
