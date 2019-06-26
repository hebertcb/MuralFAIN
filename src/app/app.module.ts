import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AvisosComponent } from './avisos/avisos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { VideoSlideComponent } from './slider/video-slide/video-slide.component';
import { ImageSlideComponent } from './slider/image-slide/image-slide.component';
import { TextSlideComponent } from './slider/text-slide/text-slide.component';
import { AudioSlideComponent } from './slider/audio-slide/audio-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AgendaComponent,
    AvisosComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    VideoSlideComponent,
    ImageSlideComponent,
    TextSlideComponent,
    AudioSlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),    
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
