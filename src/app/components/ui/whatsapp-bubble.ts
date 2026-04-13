import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-whatsapp-bubble',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <lucide-icon name="Menu" class="w-6 h-6"></lucide-icon>
      <span class="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
        ¿Necesitas ayuda?
      </span>
    </a>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class WhatsappBubbleComponent {}
