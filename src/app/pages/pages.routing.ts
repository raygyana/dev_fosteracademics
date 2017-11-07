import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
      imports: [
            RouterModule.forChild([
                  {
                        path: '',
                        component: HomeComponent,
                        children: [
                              {
                                    path: '',
                                    component: HomeComponent
                              },
                              {
                                    path: 'about',
                                    component: AboutComponent
                              }
                        ]
                  }
            ])
      ],
      exports: [
            RouterModule
      ]
})
export class PagesRoutingModule {
}


// export const routes: Routes = [
//       {
//             path: '',
//             component: PagesComponent,
//             children: [
//                   { path: '', component: HomeComponent },
//                   { path: 'home', component: HomeComponent },
//                   { path: 'about', component: AboutComponent },
//             ]
//       }
// ];

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
