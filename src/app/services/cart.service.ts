import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
  description: string;
  features?: string[];
  specs?: { label: string; value: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<Product[]>([]);

  // Computed signals for derived state
  count = computed(() => this.cartItems().length);
  total = computed(() => this.cartItems().reduce((acc, item) => acc + item.price, 0));
  items = computed(() => this.cartItems());

  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
  }

  removeFromCart(productId: string) {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
