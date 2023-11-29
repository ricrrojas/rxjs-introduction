import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './pages/current-time/current-time.component';
import { LettersCounterComponent } from './pages/letters-counter/letters-counter.component';
import { TypeAheadComponent } from './pages/typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    LettersCounterComponent,
    TypeAheadComponent,
    CurrentTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
