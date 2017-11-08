import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { PagesComponent } from '../pages.component';
import { NavigationComponent } from '../main/navigation/navigation.component';


export const routes: Routes = [
      {
            path: 'main',
            // component: MainComponent
            loadChildren: './main/main.module#MainModule',
      },
      {
            path: '',
            component: MainComponent,
            children: [
                  { path: '', component: MainComponent },
                  { path: 'navigation', component: NavigationComponent }

            ]
      }
];
export const PagesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
