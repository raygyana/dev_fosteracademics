import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//       {
//             path: "",
//             component: AppComponent
//       },
//       {
//             path: 'home',
//             component: HomeComponent

//       }
// ];
@NgModule({
      imports: [
            RouterModule.forRoot([
                  { path: '', redirectTo: '/pages', pathMatch: 'full' },
                  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
                  //   {path: 'users', loadChildren: 'app/users/users.module#UsersModule'}
            ])
      ],
      exports: [
            RouterModule
      ]
})

export class AppRoutingModule {
}
