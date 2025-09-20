import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contactos', component: ContactoComponent },   
    { path: '**', redirectTo: '' }
];
