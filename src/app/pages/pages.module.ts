import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarDarkComponent } from './navbar-dark/navbar-dark.component';
import { RecentProductComponent } from './recent-product/recent-product.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [BannerComponent,FooterComponent,HomeComponent,NavbarComponent,NavbarDarkComponent,RecentProductComponent,TestimonialComponent,WelcomeComponent],
  exports:[
    NavbarComponent,
    FooterComponent,NavbarDarkComponent,HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
