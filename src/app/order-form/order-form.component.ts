import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../service/cart.service';
import {StorageService} from '../service/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;
  basketProducts;

  constructor(
    private service: CartService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storageService.getProduct();
    this.storageService.basketProducts$.subscribe(data => this.basketProducts = data);
    console.log(typeof this.basketProducts);

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      number: new FormControl(null, [Validators.required]),
      street: new FormControl(null, Validators.required),
      postcode: new FormControl(null, [Validators.required]),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      cardType: new FormControl(null),
      cardNumber: new FormControl(null, [Validators.required]),
      expiryMonth: new FormControl(null, [Validators.required]),
      expiryYear: new FormControl(null, [Validators.required]),
    });
  }

  isInputNumber(e): void {
    return this.service.isInputNumber(e);
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.storageService.setOrderDetails(this.form.value);
    this.router.navigate(['/invoice']);
  }

}
