import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { StudentsListComponent } from './pages/students-list/students-list.component';

const routes: Routes = [{
  path: 'home',
  component:StudentsListComponent
},{
  path: 'details/:id',
  component:DetailPageComponent,
  
},{ path: "", redirectTo: "home", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }   
