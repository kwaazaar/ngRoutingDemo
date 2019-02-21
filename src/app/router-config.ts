import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailAComponent } from './home/detail-a/detail-a.component';
import { DetailCComponent } from './home/detail-c/detail-c.component';
import { DetailBComponent } from './home/detail-b/detail-b.component';
import { Sub1Component } from './home/detail-c/sub1/sub1.component';
import { Sub2Component } from './home/detail-c/sub2/sub2.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'detaila',
                component: DetailAComponent
            },
            {
                path: 'detailb',
                component: DetailBComponent
            },
            {
                path: 'detailc',
                component: DetailCComponent, children: [
                    { path: 'sub1', component: Sub1Component },
                    { path: 'sub2', component: Sub2Component },
                    { path: '', redirectTo: 'sub1', pathMatch: 'full' },
                ]
            },
            {
                path: '',
                component: DetailAComponent
            },
        ]
    },
    {
        path: 'products', loadChildren: './products/products.module#ProductsModule'
    },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
