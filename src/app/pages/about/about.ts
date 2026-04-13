import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html'
})
export class AboutComponent {
  values = [
    { title: 'Sostenibilidad', desc: 'Utilizamos fibras naturales y procesos de bajo impacto hídrico.', icon: 'Check' },
    { title: 'Ética Laboral', desc: 'Trabajamos con talleres locales que garantizan salarios justos.', icon: 'Check' },
    { title: 'Calidad Radical', desc: 'Nuestras prendas están hechas para durar décadas, no meses.', icon: 'Check' }
  ];
}
