import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaImagenesBasicaPageRoutingModule } from './galeria-imagenes-basica-routing.module';

import { GaleriaImagenesBasicaPage } from './galeria-imagenes-basica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaImagenesBasicaPageRoutingModule
  ],
  declarations: [GaleriaImagenesBasicaPage]
})
export class GaleriaImagenesBasicaPageModule {}
