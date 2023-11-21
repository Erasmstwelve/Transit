import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './welcome/pages/about/about.component'; 

// Define las rutas principales de la aplicación.
const routes: Routes = [
  {
    path: '', // Ruta raíz (página de inicio).
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'About/:variable',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa el módulo de enrutamiento y configura las rutas definidas.
  exports: [RouterModule] // Exporta el módulo de enrutamiento para que otros módulos puedan importarlo.
  
})
export class AppRoutingModule { }
