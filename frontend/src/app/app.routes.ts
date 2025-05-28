import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
    {path: "button", loadComponent: () => import('./button/button.component').then(m => m.ButtonComponent)},

    {path: "management/login", loadComponent: () => import('./management/login/login.component').then(m => m.LoginComponent)},
    {path: "management/admin", loadComponent: () => import('./management/admin/admin.component').then(m => m.AdminComponent)},
    {path: "management/principal", loadComponent: () => import('./management/admin/admin.component').then(m => m.AdminComponent)},
    {path: "management/faculty", loadComponent: () => import('./management/admin/admin.component').then(m => m.AdminComponent)},
    {path: "management/student", loadComponent: () => import('./management/admin/admin.component').then(m => m.AdminComponent)},
    
    {path: "state", loadComponent: () => import('./state/state.component').then(m => m.StateComponent)},
    
];
