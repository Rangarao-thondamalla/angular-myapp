import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';


import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MatSliderModule
   ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, FooterComponent, MainContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
