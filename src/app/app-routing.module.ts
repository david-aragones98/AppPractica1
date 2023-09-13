import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./pages/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'galeria-imagenes-basica',
    loadChildren: () => import('./pages/galeria-imagenes-basica/galeria-imagenes-basica.module').then( m => m.GaleriaImagenesBasicaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
