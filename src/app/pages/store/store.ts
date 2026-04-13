import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CartService, Product } from '../../services/cart.service';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './store.html'
})
export class StoreComponent {
  private cartService = inject(CartService);
  
  selectedCategory = signal('Todos');
  categories = ['Todos', 'Hombre', 'Mujer', 'Accesorios', 'Nuevo'];

  products = PRODUCTS;

  addToCart(event: Event, product: Product) {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }

  get filteredProducts() {
    if (this.selectedCategory() === 'Todos') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory());
  }
}
