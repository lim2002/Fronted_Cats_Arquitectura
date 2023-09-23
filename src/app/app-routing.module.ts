import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CatComponent } from './components/cat/cat.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cat', component: CatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
