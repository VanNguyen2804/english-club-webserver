import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/activities/activities.module').then(m => m.ActivitiesModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'activities',
    loadChildren: () => import('./features/activities/activities.module').then(m => m.ActivitiesModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'invalid-url',
    component:PageNotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'invalid-url'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
