import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  // {
  //   path: 'admin',
  //   canActivate: [isAdminGuard, isAuthenticatedGuard],
  //   loadChildren: () =>
  //     import('./features/admin/admin.module').then((m) => m.AdminModule),
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./features/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'payment',
  //   // canActivate:[isAuthenticatedGuard],
  //   loadChildren: () =>
  //     import('./features/payment/payment.module').then((m) => m.PaymentModule),
  // },
  {
    title:"home",
    path: '**',
    redirectTo: 'public',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
