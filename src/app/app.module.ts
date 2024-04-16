import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'company-details', component:CompanyDetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
