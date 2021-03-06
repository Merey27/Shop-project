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
  pattern = "^[ a-zA-Z'][a-zA-Z ]*$";
  patternExpiryDate = '^([1-9]|1[012])$';
  titleDate = ['Mr', 'Mrs', 'Miss', 'Ms', 'Mx', 'Sir', 'Dr', 'Lady', 'Lord'];
  submitted = false;

  constructor(
    private service: CartService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storageService.getProduct();
    this.storageService.basketProducts$.subscribe(data => this.basketProducts = data);

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      name: new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      surname: new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      number: new FormControl(null, [Validators.required]),
      street: new FormControl(null, Validators.required),
      postcode: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      country: new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      cardType: new FormControl(null),
      cardNumber: new FormControl(null, [Validators.required]),
      expiryMonth: new FormControl(null, [Validators.required, Validators.pattern(this.patternExpiryDate)]),
      expiryYear: new FormControl(null, [Validators.required]),
    });
  }

  isInputNumber(e): void {
    return this.service.isInputNumber(e);
  }

  submit(): void {
    if (this.form.invalid) {
      this.storageService.showWarning('Please complete all fields to continue!');
      return;
    }
    this.storageService.setOrderDetails(this.form.value);
    this.router.navigate(['/invoice']);
  }

}
