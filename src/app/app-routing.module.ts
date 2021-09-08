import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'purchase', component: HomeComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'bind', component: HomeComponent },
  { path: 'user_agreement', component: UserAgreementComponent },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
