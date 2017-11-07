import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages.routing';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BooksByTitleComponent } from './books-by-title/books-by-title.component';

@NgModule({
      imports: [
            CommonModule,
            PagesRoutingModule
      ],
      declarations: [
            HomeComponent,
            MainComponent,
            AboutComponent,
            AuthorsComponent,
            ContactComponent,
            PolicyComponent,
            TermsAndConditionsComponent,
            BooksByTitleComponent
      ],
      providers: []
})
export class PagesModule {
}
