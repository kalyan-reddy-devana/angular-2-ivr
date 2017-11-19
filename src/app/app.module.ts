import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { exampleService } from 'app/app_services/example.service';
import { BillingComponent } from './app_components/billing/billing.component';
import { DashboardComponent } from './app_components/dashboard/dashboard.component';
import { HeaderComponent } from './app_common_components/header/header.component';
import { FooterComponent } from './app_common_components/footer/footer.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ exampleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
