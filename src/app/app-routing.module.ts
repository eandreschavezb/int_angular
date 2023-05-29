import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotellaComponent } from './botella/botella.component';
import { Perfil1Component } from './perfil1/perfil1.component';

const routes: Routes = [
  {path: '', component: BotellaComponent},/* ESTO ANADI YO -carga peresoza */
  {path: '', component: Perfil1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
