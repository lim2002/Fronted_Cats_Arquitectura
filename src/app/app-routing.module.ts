import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CatComponent } from './components/cat/cat.component';
import { AdmincatComponent } from './components/admincat/admincat.component';
import { AuthGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'cat', component: CatComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'admin', component: AdmincatComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
