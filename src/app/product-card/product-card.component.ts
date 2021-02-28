import {Component, OnInit} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products: any;
  search: any;
  searchCategory: any;
  categoryList = new Set();

  constructor(
    private storageService: StorageService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.products = this.cartService.products;

    this.products.map(product => {
      this.categoryList.add(product.category);
    });
  }

  addToBasket(product): void {
    if (product.quantity == 0 || product.quantity === '') {
      alert('Please, set correct value');
      product.quantity = 1;
      return;
    } else {
      product.isAdded = true;
      this.storageService.setProduct(product);
      this.storageService.showSuccess(product);
    }
  }

  removeProduct(product: any): void {
    product.isAdded = false;
    this.storageService.deleteProduct(product);
    this.storageService.showError(product);
  }

  decreaseQu(product): void {
    if (product.quantity <= 1) {
      return;
    }
    product.quantity--;
  }

  increaseQu(product): void {
    product.quantity++;
  }

  isInputNumber(e): void {
    return this.cartService.isInputNumber(e);
  }

}
