import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailAComponent } from './detail-a/detail-a.component';
import { DetailBComponent } from './detail-b/detail-b.component';
import { DetailCComponent } from './detail-c/detail-c.component';

const routes: Routes = [
  { path: '', redirectTo: 'detail-a', pathMatch: 'full' },
  { path: 'detail-a', component: DetailAComponent },
  { path: 'detail-b', component: DetailBComponent },
  { path: 'detail-c', component: DetailCComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDetailRoutingModule { }
