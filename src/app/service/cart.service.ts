import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = [
    {
      name: 'Carrots',
      description: 'not just for rabbits',
      units: '1kg',
      price: 0.99,
      category: 'Vegetable',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/carrots.jpg'
    },
    {
      name: 'Bananas',
      description: 'Yellow and banana-shaped',
      units: '500g',
      price: 1.29,
      category: 'Fruits',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/bananas.jpg'
    },
    {
      name: 'Coconut',
      description: 'That exotic stuff',
      units: '1',
      price: 2.99,
      category: 'Seed',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/coconuts.jpg'
    },
    {
      name: 'Apples',
      description: 'Red, sweet and juicy',
      units: '1kg',
      price: 1.49,
      category: 'Fruits',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/apples.jpeg'
    },
    {
      name: 'Cherries',
      description: 'Cherry pancake anyone?',
      units: '500g',
      price: 1.99,
      category: 'Fruits',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/cherries.jpg'

    },
    {
      name: 'Tomatoes',
      description: 'Red and ripe',
      units: '500g',
      price: 1.99,
      category: 'Vegetable',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/tomatoes.jpg'

    },
    {
      name: 'Potatoes',
      description: 'Boil them, bake them, mash them...',
      units: '1kg',
      price: 0.99,
      category: 'Vegetable',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/potatoes.jpg'

    },
    {
      name: 'Beans',
      description: 'Green and healthy',
      units: '1kg',
      price: 1.99,
      category: 'Seed',
      quantity: 1,
      isAdded: false,
      imageSrc: './assets/images/beans.jpg'

    },
  ];

  constructor() {
  }

  isInputNumber($event: KeyboardEvent): void {
    const char = String.fromCharCode($event.which);
    if (!(/[0-9-+]/.test(char))) {
      $event.preventDefault();
    }
  }
}
