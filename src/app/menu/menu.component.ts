import { Component, OnInit } from '@angular/core';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.storageService.productsStore$.next(localStorage);

    this.storageService.productsStore$.subscribe(data => {
      this.items = data?.length;
    });
  }

  cleanAll(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
