import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgIf} from "./ngif/ngif";
import { AppleComponent } from './apple/apple.component';
import { MarketComponent } from './market/market.component';
import { BadabazarComponent } from './badabazar/badabazar.component'
@NgModule({
  declarations: [
    AppComponent,NgIf, AppleComponent, MarketComponent, BadabazarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
