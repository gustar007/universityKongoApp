import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCooperationComponent } from './carousel-cooperation/carousel-cooperation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StudentProfilComponent } from './student-profil/student-profil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AccordionModule} from 'primeng/accordion';
//accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuItem} from 'primeng/api';
//api

const appRoutes: Routes = [

{ path: 'auth/signup', component: SignupComponent },
{ path: 'auth/signin', component: SigninComponent },
{ path: 'accueil', component: WelcomeComponent },
{ path: '', redirectTo: 'acceuil', pathMatch: 'full'},
{ path: '**', redirectTo: 'accueil'}
//Wilcard **

];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselCooperationComponent,
    FooterComponent,
    HeaderComponent,
    StudentProfilComponent,
    WelcomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
