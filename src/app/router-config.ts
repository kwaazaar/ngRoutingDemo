import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailAComponent } from './home/detail-a/detail-a.component';
import { DetailCComponent } from './home/detail-c/detail-c.component';
import { DetailBComponent } from './home/detail-b/detail-b.component';

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
                component: DetailCComponent
            },
            {
                path: '',
                component: DetailAComponent
            },
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
