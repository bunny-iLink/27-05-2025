import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: "button", loadComponent: () => import('./button/button.component').then(m => m.ButtonComponent)},
];
