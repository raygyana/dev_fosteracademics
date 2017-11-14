import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages.routing';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { BooksByTitleComponent } from './books-by-title/books-by-title.component';
import { MedScComponent } from './category/med-sc/med-sc.component';
import { PharmScComponent } from './category/pharm-sc/pharm-sc.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';

@NgModule({
      imports: [
            CommonModule,
            PagesRoutingModule
      ],
      declarations: [
            PagesComponent,
            HomeComponent,
            MainComponent,
            AboutComponent,
            AuthorsComponent,
            ContactComponent,
            PolicyComponent,
            TermsAndConditionsComponent,
            BooksByTitleComponent,
            MedScComponent,
            PharmScComponent,
            FooterComponent,
            HeaderComponent,
            LeftnavComponent
      ],
      providers: [],
      exports: []
})
export class PagesModule {
}
