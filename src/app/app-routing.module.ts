import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { IngresantesComponent } from './ingresantes/ingresantes.component';


const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'docentes', component: DocentesComponent},
  {path: 'ingresantes', component: IngresantesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routerConfig: Routes = [
  {
      path: 'helloWorld',
      component: HelloWorldComponent
  },
  {
    path: 'ingreantes',
    component: IngresantesComponent
},

  {
      path: 'alumnos',
      component: AlumnosComponent
  },
  
  
];