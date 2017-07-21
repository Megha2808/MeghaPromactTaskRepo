// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';

// @NgModule({
//  imports:      [ BrowserModule ],
//  declarations: [ AppComponent ],
//  bootstrap:    [ AppComponent ]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { TagComponent } from './components/tag/tag.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { BlogCategoryComponent } from './components/Blogs/blog.category.component';
import { BlogTagComponent } from './components/Blogs/blog.tags.component';
import { IndexBlogComponent } from './components/Blogs/Index.Component';
import { BlogComponent } from './components/Blogs/blog.component';
import { BlogByCategoryComponent } from './components/Blogs/BlogByCategory.component';
import { Service } from './Service/service';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule ],
    declarations: [AppComponent, TagComponent, CategoryComponent, PostComponent, BlogCategoryComponent, BlogTagComponent, IndexBlogComponent, BlogComponent, BlogByCategoryComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Service],
    bootstrap: [AppComponent]
})

export class AppModule {
}
