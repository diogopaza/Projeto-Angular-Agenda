import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableLivesComponent } from './views/table-lives/table-lives.component';

const routes: Routes = [
 /* {
    path: '',
    component: HomeComponent
  },*/
  {
    path: 'table',
    component: TableLivesComponent
  }, 
  { path: 'lives', loadChildren: () => import('./views/lives/lives.module').then(m => m.LivesModule) },
  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },
  {
    path: '',
    redirectTo: '/lives',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
