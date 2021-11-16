import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  removeProduct = (productId: number): void => {
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity = (element: any) => {
    console.log('element', element)
  }

}
