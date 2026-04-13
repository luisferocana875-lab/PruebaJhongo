import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          MNMLST<span class="text-yellow-500">.</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-10">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-foreground font-semibold"
              [routerLinkActiveOptions]="{exact: true}"
              class="text-sm font-medium tracking-widest text-foreground/60 hover:text-foreground transition-colors uppercase"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-6">
          <button class="text-foreground/60 hover:text-foreground transition-colors">
            <lucide-icon name="Search" class="w-5 h-5"></lucide-icon>
          </button>
          <button class="text-foreground/60 hover:text-foreground transition-colors relative group">
            <lucide-icon name="ShoppingBag" class="w-5 h-5"></lucide-icon>
            @if (cartCount() > 0) {
              <span class="absolute -top-1 -right-1 bg-yellow-500 text-[10px] font-bold text-black w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                {{ cartCount() }}
              </span>
            }
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button (click)="toggleMenu()" class="md:hidden text-foreground">
          <lucide-icon [name]="isMenuOpen() ? 'X' : 'Menu'" class="w-6 h-6"></lucide-icon>
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
        <div class="md:hidden bg-background border-b border-foreground/5 px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              (click)="isMenuOpen.set(false)"
              class="block text-lg font-medium tracking-widest text-foreground/60 hover:text-foreground transition-colors uppercase"
            >
              {{ link.label }}
            </a>
          }
          <div class="pt-6 border-t border-foreground/5 flex items-center space-x-6">
            <button class="flex items-center space-x-2 text-foreground/60">
              <lucide-icon name="Search" class="w-5 h-5"></lucide-icon>
              <span>Buscar</span>
            </button>
            <button class="flex items-center space-x-2 text-foreground/60">
              <lucide-icon name="ShoppingBag" class="w-5 h-5"></lucide-icon>
              <span>Carrito ({{ cartCount() }})</span>
            </button>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  private cartService = inject(CartService);
  isMenuOpen = signal(false);
  cartCount = this.cartService.count;

  navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Productos', path: '/product' },
    { label: 'Tienda', path: '/store' },
    { label: 'Nosotros', path: '/about' }
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
