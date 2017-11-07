import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages.routing';
import { AboutComponent } from './about/about.component';

@NgModule({
      imports: [
            CommonModule,
            PagesRoutingModule
      ],
      declarations: [
            HomeComponent,
            MainComponent,
            AboutComponent
      ],
      providers: []
})
export class PagesModule {
}
