import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router-config';

@NgModule({
  imports: [RouterModule.forRoot(routerConfig, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
