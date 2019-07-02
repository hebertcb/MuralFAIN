import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AvisosComponent } from './avisos/avisos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//Local
import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { VideoSlideComponent } from './slider/video-slide/video-slide.component';
import { ImageSlideComponent } from './slider/image-slide/image-slide.component';
import { TextSlideComponent } from './slider/text-slide/text-slide.component';
import { AudioSlideComponent } from './slider/audio-slide/audio-slide.component';
import { FilenamePipe } from './pipes/filename.pipe';
import { AdminAvisosComponent } from './admin/admin-avisos/admin-avisos.component';
import { AdminAgendaComponent } from './admin/admin-agenda/admin-agenda.component';
import { AdminSliderComponent } from './admin/admin-slider/admin-slider.component';
import { AvisosService } from './services/avisos.service';
import { EventosService } from './services/eventos.service';
import { SlidesService } from './services/slides.service';

registerLocaleData(localeEsCl, 'es-CL');

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
    AudioSlideComponent,
    FilenamePipe,
    AdminAvisosComponent,
    AdminAgendaComponent,
    AdminSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),    
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [AvisosService, EventosService, SlidesService, { provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
