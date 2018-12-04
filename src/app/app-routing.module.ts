import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/components/welcome.component';
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user/login.component';
import { AccountModule } from 'projects/account-sub-project/src/app/account/account.module';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'accounts',
        // canActivate: [AuthGuard],
        loadChildren: () => AccountModule
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
