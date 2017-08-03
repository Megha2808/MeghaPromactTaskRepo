import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { TagComponent } from './components/tag/tag.component';
import { CategoryComponent } from './components/category/category.component';
import { PostComponent } from './components/post/post.component';
import { IndexBlogComponent } from './components/Blogs/Index.Component';
import { Service } from './Service/service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './Service/FilterService';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule, NgxPaginationModule, FormsModule],
    declarations: [AppComponent, TagComponent, CategoryComponent, PostComponent,  IndexBlogComponent, SearchFilterPipe],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Service],
    bootstrap: [AppComponent],
})

export class AppModule {
}
