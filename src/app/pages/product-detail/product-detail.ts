import { Component, inject, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { PRODUCTS } from '../../data/products';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './product-detail.html'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);
  private platformId = inject(PLATFORM_ID);
  
  product = signal<Product | undefined>(undefined);
  selectedSize = signal<string>('M');
  isAdded = signal(false);

  sizes = ['S', 'M', 'L', 'XL'];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const foundProduct = PRODUCTS.find(p => p.id === id);
    this.product.set(foundProduct);

    // Scroll to top on init
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  addToCart() {
    const p = this.product();
    if (p) {
      this.cartService.addToCart(p);
      this.isAdded.set(true);
      setTimeout(() => this.isAdded.set(false), 2000);
    }
  }
}
