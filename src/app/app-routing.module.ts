import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstruturaComponent } from './layout/components/estrutura/estrutura.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VazioComponent } from './components/vazio/vazio.component';

const routes: Routes = [
  {path: '', component: EstruturaComponent,
  children: [
    { path: '', component: DashboardComponent, loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'set/vazio', component: VazioComponent, loadChildren: () => import('./components/vazio/vazio.module').then(m => m.VazioModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
