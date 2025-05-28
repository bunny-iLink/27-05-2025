import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: "button", loadComponent: () => import('./button/button.component').then(m => m.ButtonComponent)},
    {path: "management/login", loadComponent: () => import('./management/login/login.component').then(m => m.LoginComponent)},
    {path: "state", loadComponent: () => import('./state/state.component').then(m => m.StateComponent)},
    {path: "management/admin", loadComponent: () => import('./management/admin/admin.component').then(m => m.AdminComponent)},
];
