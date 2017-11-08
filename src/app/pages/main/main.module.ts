import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PagesRoutingModule } from '../pages.routing';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
      imports: [
            CommonModule,
            PagesRoutingModule
      ],
      declarations: [
            MainComponent,
            NavigationComponent
      ],
      providers: []
})
export class MainModule {
}
