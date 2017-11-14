import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PagesRoutingModule } from '../pages.routing';

@NgModule({
      imports: [
            CommonModule,
            PagesRoutingModule
      ],
      declarations: [
            MainComponent
      ],
      providers: []
})
export class MainModule {
}
