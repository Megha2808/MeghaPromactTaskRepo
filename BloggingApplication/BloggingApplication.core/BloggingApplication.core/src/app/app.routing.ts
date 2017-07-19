import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TagComponent } from './components/tag/tag.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
    { path: 'Home/Admin', redirectTo: 'Home/Admin/category', pathMatch: 'full' },
    { path: 'Home/Admin/home', component: HomeComponent },
    { path: 'Home/Admin/tag', component: TagComponent },
    { path: 'Home/Admin/category', component: CategoryComponent },
    { path: 'Home/Admin/post', component: PostComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
