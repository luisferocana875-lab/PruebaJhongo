import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-foreground text-background py-20 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="space-y-6">
          <h2 class="text-2xl font-bold tracking-tighter">MNMLST<span class="text-yellow-500">.</span></h2>
          <p class="text-background/60 text-sm leading-relaxed max-w-xs">
            Redefiniendo la elegancia a través de la simplicidad. Moda consciente para el individuo moderno.
          </p>
          <div class="flex items-center space-x-4">
            <a href="#" class="hover:text-yellow-500 transition-colors"><lucide-icon name="Instagram" class="w-5 h-5"></lucide-icon></a>
            <a href="#" class="hover:text-yellow-500 transition-colors"><lucide-icon name="Facebook" class="w-5 h-5"></lucide-icon></a>
            <a href="#" class="hover:text-yellow-500 transition-colors"><lucide-icon name="Twitter" class="w-5 h-5"></lucide-icon></a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-xs font-bold uppercase tracking-widest mb-6 text-yellow-500">Explorar</h3>
          <ul class="space-y-4 text-sm text-background/60">
            <li><a href="#" class="hover:text-background transition-colors">Colección 2024</a></li>
            <li><a href="#" class="hover:text-background transition-colors">Lo más vendido</a></li>
            <li><a href="#" class="hover:text-background transition-colors">Nuevas llegadas</a></li>
            <li><a href="#" class="hover:text-background transition-colors">Sostenibilidad</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-xs font-bold uppercase tracking-widest mb-6 text-yellow-500">Soporte</h3>
          <ul class="space-y-4 text-sm text-background/60">
            <li><a href="#" class="hover:text-background transition-colors">Envíos y Devoluciones</a></li>
            <li><a href="#" class="hover:text-background transition-colors">Guía de Tallas</a></li>
            <li><a href="#" class="hover:text-background transition-colors">Preguntas Frecuentes</a></li>
            <li><a href="#" class="hover:text-background transition-colors">Contacto</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xs font-bold uppercase tracking-widest mb-6 text-yellow-500">Newsletter</h3>
          <p class="text-sm text-background/60 mb-6">Suscríbete para recibir actualizaciones exclusivas y ofertas.</p>
          <form class="flex border-b border-background/20 pb-2">
            <input
              type="email"
              placeholder="Tu email"
              class="bg-transparent border-none outline-none text-sm w-full placeholder:text-background/30"
            />
            <button type="submit" class="hover:text-yellow-500 transition-colors">
              <lucide-icon name="ArrowRight" class="w-5 h-5"></lucide-icon>
            </button>
          </form>
        </div>
      </div>

      <div class="max-w-7xl mx-auto mt-20 pt-8 border-t border-background/10 flex flex-col md:row items-center justify-between text-[10px] uppercase tracking-widest text-background/40">
        <p>© 2024 MNMLST. Todos los derechos reservados.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-background transition-colors">Privacidad</a>
          <a href="#" class="hover:text-background transition-colors">Términos</a>
          <a href="#" class="hover:text-background transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
