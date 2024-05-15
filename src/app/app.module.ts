import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header/header.component';
import { DriverDetailsComponent } from './components/driver-details/driver-details/driver-details.component';
import { SigningPageComponent } from './components/signing-page/signing-page/signing-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page/payment-page.component';
import { ReviewPageComponent } from './components/review-page/review-page/review-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page/sign-up-page.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DriverService } from 'src/app/services/DriverDetails/driver.service';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'company-details', component:CompanyDetailsComponent},
  {path: 'driver-details', component:DriverDetailsComponent},
  {path: 'signing-page', component:SigningPageComponent},
  {path: 'sign-up-page', component:SignUpPageComponent},
  {path: 'payment-page', component:PaymentPageComponent},
  {path: 'review-page', component:ReviewPageComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyDetailsComponent,
    FooterComponent,
    HeaderComponent,
    DriverDetailsComponent,
    SigningPageComponent,
    PaymentPageComponent,
    ReviewPageComponent,
    SignUpPageComponent,
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }), // This will automatically reset the scroll position to the top on route change 
    BrowserAnimationsModule,
    NgSelectModule,
    PdfViewerModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    DriverService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
