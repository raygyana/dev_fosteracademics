import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
      {
            path: '',
            component: PagesComponent,
            children: [
                  { path: '', component: HomeComponent },
                  { path: 'home', component: HomeComponent },
                  { path: 'about', component: AboutComponent },
            ]
      }
];
export const PagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
