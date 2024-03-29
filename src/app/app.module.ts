import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { BotellaComponent } from './botella/botella.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';

import { Perfil1Component } from './perfil1/perfil1.component';
import { ThirdtryComponent } from './thirdtry/thirdtry.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { LanguageOptionComponent } from './language-option/language-option.component';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    BotellaComponent,
    Perfil1Component,
    ThirdtryComponent,
    LanguageOptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    AvatarModule,
    TableModule,
    OverlayPanelModule,
    PanelMenuModule,
    SplitButtonModule,
    MenubarModule,
    StyleClassModule,
    MenuModule,
    BadgeModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    OverlayPanelModule,
    SplitButtonModule,
    MenubarModule,
    StyleClassModule,
    MenuModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
