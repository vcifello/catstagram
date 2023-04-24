import { inject, NgModule } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { AuthService } from './services/auth.service';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { DetailsCatComponent } from './details-cat/details-cat.component';

const authGuardFn: CanActivateFn = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated();
}

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "create", component: CreatepostComponent, canActivate: [authGuardFn]},
  {path: "cats" , component: ListCatsComponent, canActivate: [authGuardFn]},
  {path: "cats/:id", component: DetailsCatComponent, canActivate: [authGuardFn]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
