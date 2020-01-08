import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgIf} from "./ngif/ngif";
import { AppleComponent } from './apple/apple.component';
import { MarketComponent } from './market/market.component';
import { BadabazarComponent } from './badabazar/badabazar.component';
import { MangoComponent } from './mango/mango.component';
import { OrangeComponent } from './orange/orange.component';
import { LimeComponent } from './lime/lime.component';
import { PineappleComponent } from './pineapple/pineapple.component';
import { TomatoComponent } from './tomato/tomato.component';
import { LimesComponent } from './limes/limes.component';
import { TomatosComponent } from './tomatos/tomatos.component';
import { PotatosComponent } from './potatos/potatos.component';
import { SweettomatosComponent } from './sweettomatos/sweettomatos.component'
@NgModule({
  declarations: [
    AppComponent,NgIf, AppleComponent, MarketComponent, BadabazarComponent, MangoComponent, OrangeComponent, LimeComponent, PineappleComponent, TomatoComponent, LimesComponent, TomatosComponent, PotatosComponent, SweettomatosComponent
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
