import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BasketComponent } from './basket/basket.component';
import { MenuComponent } from './menu/menu.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { OrderFormComponent } from './order-form/order-form.component';
import {FilterCategoryPipe, FilterPipe} from './service/filter.pipe';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    BasketComponent,
    MenuComponent,
    ProductCardComponent,
    OrderFormComponent,
    FilterPipe,
    FilterCategoryPipe,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
