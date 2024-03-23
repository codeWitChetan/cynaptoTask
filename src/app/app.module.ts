import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NgxPaginationModule} from 'ngx-pagination';
import{HttpClientModule,HttpParams} from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';

import { DashboradComponent } from './component/dashborad/dashborad.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { VideosComponent } from './component/videos/videos.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { AddVideoComponent } from './component/add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
   
    DashboradComponent,
    SidebarComponent,
    TemplatesComponent,
    VideosComponent,
    PodcastComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
