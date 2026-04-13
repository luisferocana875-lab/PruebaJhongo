import { Component, AfterViewInit, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { animate } from 'motion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './home.html'
})
export class HomeComponent implements AfterViewInit {
  heroRef = viewChild<ElementRef>('hero');
  valuePropRef = viewChild<ElementRef>('valueProp');
  collectionsSectionRef = viewChild<ElementRef>('collectionsSection');

  ngAfterViewInit() {
    // Initial animations
    const hero = this.heroRef()?.nativeElement;
    if (hero) {
      const title = hero.querySelector('h1');
      const subtitle = hero.querySelector('p');
      const btn = hero.querySelector('button');
      const img = hero.querySelector('.hero-img');

      animate(title, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, ease: 'easeOut' });
      animate(subtitle, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.2 });
      animate(btn, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 0.4 });
      animate(img, { opacity: [0, 1], scale: [1.1, 1] }, { duration: 1.2, ease: 'easeOut' });
    }
  }

  collections = [
    { title: 'Esenciales de Verano', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800', category: 'Hombre' },
    { title: 'Elegancia Atemporal', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800', category: 'Mujer' },
    { title: 'Accesorios Premium', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', category: 'Unisex' }
  ];

  popularProducts = [
    { name: 'Camiseta de Lino Orgánico', price: '45€', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400' },
    { name: 'Pantalón Chino Slim', price: '89€', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Vestido Minimalista Seda', price: '120€', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=400' },
    { name: 'Gafas de Sol Aviador', price: '155€', img: 'https://images.unsplash.com/photo-1511499767390-90342f16b127?auto=format&fit=crop&q=80&w=400' }
  ];

  testimonials = [
    { name: 'Elena R.', text: 'La calidad de las prendas es excepcional. El minimalismo llevado a su máxima expresión.', role: 'Diseñadora' },
    { name: 'Marco S.', text: 'Buscaba ropa duradera y con estilo. MNMLST superó mis expectativas.', role: 'Arquitecto' },
    { name: 'Sofía L.', text: 'El servicio al cliente y la presentación del paquete son de otro nivel. Muy recomendado.', role: 'Fotógrafa' }
  ];

  instagramPosts = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=300'
  ];
}
