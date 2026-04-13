import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './product.html'
})
export class ProductComponent {
  categories = [
    { name: 'Camisetas', count: 12, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400' },
    { name: 'Pantalones', count: 8, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Abrigos', count: 5, img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=400' },
    { name: 'Accesorios', count: 15, img: 'https://images.unsplash.com/photo-1511499767390-90342f16b127?auto=format&fit=crop&q=80&w=400' }
  ];

  features = [
    { title: 'Algodón Orgánico', desc: 'Certificado GOTS para máxima suavidad y respeto al medio ambiente.' },
    { title: 'Corte Moderno', desc: 'Diseñado para adaptarse a cualquier silueta con elegancia.' },
    { title: 'Durabilidad', desc: 'Costuras reforzadas y tintes naturales que no pierden color.' }
  ];
}
