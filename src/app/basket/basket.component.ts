import {Component, OnInit} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket = [];
  totalSum = [];

  constructor(
    private storageService: StorageService,
    private service: CartService
  ) { }

  ngOnInit(): void {
    this.storageService.getProduct();
    this.storageService.basketProducts$.subscribe(data => {
      this.basket = data;
    });
    this.totalSumFunc();
  }

  decreaseQt(item): void {
    if (item.quantity < 1) {
      return;
    }
    item.quantity--;
    this.storageService.setProduct(item);
    this.totalSumFunc();
  }

  increaseQt(item): void {
    item.quantity++;
    this.storageService.setProduct(item);
    this.totalSumFunc();
  }

  changeQt(item): void {
    this.storageService.setProduct(item);
    this.totalSumFunc();
  }

  isInputNumber(e): void {
    return this.service.isInputNumber(e);
  }

  totalPrice(item): string {
    return this.storageService.totalPrice(item);
  }

  deleteProd(item): void {
    this.storageService.deleteProduct(item);
    this.storageService.getProduct();
  }

  clearBasket(): void {
    localStorage.clear();
    location.reload();
  }

  totalSumFunc() {
    let totalSum;
    let total = 0;
    this.basket.map(data => this.totalSum.push(this.totalPrice(data)));
    this.totalSum.map(i => total += Number(i));
    this.totalSum = [];
    totalSum = {
      totSum: total.toFixed(2),
      vatSum: (total - total / 1.175).toFixed(2),
      noVatSum: (total / 1.175).toFixed(2)
    };
    return totalSum;
  }
}
