import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './store.html'
})
export class StoreComponent {
  selectedCategory = signal('Todos');
  categories = ['Todos', 'Hombre', 'Mujer', 'Accesorios', 'Nuevo'];

  products = [
    { name: 'Camiseta Básica Blanca', price: '35€', category: 'Hombre', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400' },
    { name: 'Vestido Lino Negro', price: '95€', category: 'Mujer', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400' },
    { name: 'Gorra Minimalista', price: '25€', category: 'Accesorios', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sudadera Oversize', price: '65€', category: 'Nuevo', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400' },
    { name: 'Pantalón Cargo', price: '75€', category: 'Hombre', img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bolso de Piel', price: '145€', category: 'Accesorios', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400' },
    { name: 'Chaqueta Denim', price: '110€', category: 'Mujer', img: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Zapatillas Blancas', price: '120€', category: 'Nuevo', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400' }
  ];

  get filteredProducts() {
    if (this.selectedCategory() === 'Todos') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory());
  }
}
