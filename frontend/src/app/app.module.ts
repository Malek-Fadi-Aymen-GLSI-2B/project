import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IframeComponent } from './iframe/iframe.component';
import { ListeComponent } from './liste/liste.component';
import { CountryComponent } from './country/country.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrameComponent } from './frame/frame.component';
import { ChannelService } from './services/channel.service';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { ManageComponent } from './manage/manage.component';
import { FormsModule } from '@angular/forms';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { UpdateComponent } from './update/update.component';

const appRoutes : Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'manage', component: ManageComponent},
  {path : 'addNewChannel', component: AddChannelComponent},
  {path : 'updateChannel/:nameChannel', component: UpdateComponent},
  {path: '', component: ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    IframeComponent,
    ListeComponent,
    CountryComponent,
    FrameComponent,
    RegisterComponent,
    HomeComponent,
    ViewComponent,
    AuthComponent,
    ManageComponent,
    AddChannelComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ChannelService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
