import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaImagenesBasicaPage } from './galeria-imagenes-basica.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaImagenesBasicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaImagenesBasicaPageRoutingModule {}
