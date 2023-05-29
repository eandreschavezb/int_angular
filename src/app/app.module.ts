import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { BotellaComponent } from './botella/botella.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';

import { Perfil1Component } from './perfil1/perfil1.component';

@NgModule({
  declarations: [
    AppComponent,
    BotellaComponent,
    Perfil1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    PanelMenuModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
