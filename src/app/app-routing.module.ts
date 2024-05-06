import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstruturaComponent } from './layout/components/estrutura/estrutura.component';

const routes: Routes = [
  {path: '', component: EstruturaComponent,
  // children: [
  //   { path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  //   { path: 'set/categorias', component: CategoriasComponent, loadChildren: () => import('./components/set/categorias/categorias.module').then(m => m.CategoriasModule) },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
