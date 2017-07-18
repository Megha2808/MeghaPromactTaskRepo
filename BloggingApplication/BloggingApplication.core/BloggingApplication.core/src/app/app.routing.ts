import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TagComponent } from './components/tag.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tag', component: TagComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
