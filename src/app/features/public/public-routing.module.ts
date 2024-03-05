import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './view/home/home.view';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path:'',redirectTo:'home' ,pathMatch:'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeView,
      },
      // {
      //   title:"404",
      //   path: 'not-found',
      //   component: NotFondViews,
      // },
      // {
      //   title:"500",
      //   path: 'unknown',
      //   component: UnknownView ,
      // },
      // {
      //   title:"404",
      //   path: '**',
      //   component: NotFondViews,
      // },
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
