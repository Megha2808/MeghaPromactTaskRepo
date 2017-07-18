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
import { HomeComponent } from './components/home.component';
import { TagComponent } from './components/tag.component';
import { TagService } from './Service/tag.service';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, HomeComponent, TagComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, TagService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
