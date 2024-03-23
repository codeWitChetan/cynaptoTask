import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './component/dashborad/dashborad.component';
import { TemplatesComponent } from './component/templates/templates.component';
import { VideosComponent } from './component/videos/videos.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { AddVideoComponent } from './component/add-video/add-video.component';


const routes: Routes = [
  {path: '',redirectTo:'dashborad',pathMatch:'full'},

 
  {path:'dashborad',component:DashboradComponent},
  {path:'template',component:TemplatesComponent},
  {
    path:'video',component:VideosComponent
  },
  {path:'podcast',component:PodcastComponent},
  {path:'add-video',component:AddVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
