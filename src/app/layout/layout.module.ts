import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EstruturaComponent } from './components/estrutura/estrutura.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menu-item/menuitem.component';


@NgModule({
    declarations: [
      EstruturaComponent,
      FooterComponent,
      TopBarComponent,
      SideBarComponent,
      MenuComponent,
      MenuitemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        CommonModule
    ],
    exports: [EstruturaComponent]
})
export class LayoutModule { }
