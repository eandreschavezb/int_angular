import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotellaComponent } from './botella/botella.component';

const routes: Routes = [
  {path: '', component: BotellaComponent} /* ESTO ANADI YO -carga peresoza */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
