import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({/* set defaults here*/
      "backgroundOpacity": 1,
      "backgroundPadding": 7,
      "radius": 60,
      "space": 2,
      "outerStrokeWidth": 9,
      "outerStrokeColor": "#808080",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 1,
      "titleFontSize": "12",
      "subtitleFontSize": "15",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showSubtitle": true,
      "responsive": false,
      "lazy": true
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
