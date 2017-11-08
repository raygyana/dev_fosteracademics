import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
      imports: [
            RouterModule.forRoot([
                  { path: '', redirectTo: '/pages', pathMatch: 'full' },
                  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' }
            ])
      ],
      exports: [
            RouterModule
      ]
})

export class AppRoutingModule {
}
