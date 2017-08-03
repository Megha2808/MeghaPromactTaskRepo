import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagComponent } from './components/tag/tag.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { IndexBlogComponent } from './components/Blogs/Index.Component';

const appRoutes: Routes = [
    { path: 'Home/Admin', redirectTo: 'Home/Admin/category', pathMatch: 'full' },
    { path: 'Home/Admin/tag', component: TagComponent },
    { path: 'Home/Admin/category', component: CategoryComponent },
    { path: 'Home/Admin/post', component: PostComponent },
    { path: '', component: IndexBlogComponent },
    { path: 'Home/Blog/Category/:categoryName/:id', component: IndexBlogComponent },
    { path: 'Home/Blog/Tag/:tagName/:id', component: IndexBlogComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
