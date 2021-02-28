import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  basket = [];
  totalSum = [];
  orderDetails;
  cardNumber;

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.storageService.getProduct();
    this.storageService.getOrderDetails();

    this.storageService.basketProducts$.subscribe(data => {
      this.basket = data;
    });

    this.storageService.orderDetails$.subscribe(data => {
      this.orderDetails = data;
      this.cardNumber = data?.cardNumber.substring(15);
    });
  }

  totalPrice(item): string {
    return this.storageService.totalPrice(item);
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
