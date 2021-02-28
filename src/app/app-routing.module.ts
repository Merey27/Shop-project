import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {BasketComponent} from './basket/basket.component';
import {OrderFormComponent} from './order-form/order-form.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {InvoiceComponent} from './invoice/invoice.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'products', component: ProductCardComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'order', component: OrderFormComponent},
  {path: 'invoice', component: InvoiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
