import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { YieldFormulaComponent } from './heroes/heroes.component';
import { HydrationComponent } from './hydration/hydration.component';
import { ReferenceYieldComponent } from './reference-yield/reference-yield.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    YieldFormulaComponent,
    MessagesComponent,
    HeroSearchComponent,
    HydrationComponent,
    ReferenceYieldComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
