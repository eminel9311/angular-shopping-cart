import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartHeaderComponent } from './checkout/cart-header/cart-header.component';
import { CartSummaryComponent } from './checkout/cart-summary/cart-summary.component';
import { ProductListComponent } from './checkout/product-list/product-list.component';
import { PromoCodeComponent } from './checkout/promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartHeaderComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
