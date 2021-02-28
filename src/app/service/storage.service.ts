import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  prodArr = [];
  productsStore$ = new BehaviorSubject(null);
  basketProducts$ = new BehaviorSubject(null);
  orderDetails$ = new BehaviorSubject(null);

  setProduct(product): void {
    this.prodArr.push(product);
    localStorage.setItem(product.name, JSON.stringify(product));
    this.productsStore$.next(localStorage);
  }

  deleteProduct(product): void {
    localStorage.removeItem(product.name);
    this.prodArr = this.prodArr.filter((i) => i.name !== product.name);
    this.productsStore$.next(localStorage);
  }

  getProduct(): void {
    const products = [];
    for (let i = 0; i < localStorage.length; i++) {
      products.push(JSON.parse(Object.values(localStorage)[i]));
    }
    this.basketProducts$.next(products);
  }

  setOrderDetails(data): void {
    this.orderDetails$.next(data);
    sessionStorage.setItem('OrderDetails', JSON.stringify(data));
  }

  getOrderDetails(): void {
    this.orderDetails$.next(JSON.parse(sessionStorage.getItem('OrderDetails')));
  }

  totalPrice(item): string {
    return (item.price * item.quantity).toFixed(2);
  }

  showSuccess(data): void {
    const x = document.getElementById('snackbar');
    x.innerHTML = `${data.name} was added`;
    x.className = 'show';
    x.style.background = '#19ab4b';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 1000);
  }

  showError(data): void {
    const x = document.getElementById('snackbar');
    x.innerHTML = `${data.name} was removed`;
    x.className = 'show';
    x.style.background = '#fa3939';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 1000);
  }

}
