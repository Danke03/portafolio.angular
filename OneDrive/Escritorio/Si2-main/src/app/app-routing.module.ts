import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
  {path:'home', component : PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
