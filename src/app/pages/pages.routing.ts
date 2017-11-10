import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksByTitleComponent } from './books-by-title/books-by-title.component';
import { MedScComponent } from './category/med-sc/med-sc.component';
import { PharmScComponent } from './category/pharm-sc/pharm-sc.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

import { PagesComponent } from './pages.component';


export const routes: Routes = [
      {
            path: '',
            component: PagesComponent,
            children: [
                  { path: '', component: HomeComponent },
                  { path: 'home', component: HomeComponent },
                  { path: 'about', component: AboutComponent },
                  { path: 'contact', component: ContactComponent },
                  { path: 'authors', component: AuthorsComponent },
                  { path: 'books-by-title', component: BooksByTitleComponent },
                  { path: 'med-sc', component: MedScComponent },
                  { path: 'pharm-sc', component: PharmScComponent },
                  { path: 'policy', component: PolicyComponent },
                  { path: 'terms_and_conditions', component: TermsAndConditionsComponent }
            ]
      }
];
export const PagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
