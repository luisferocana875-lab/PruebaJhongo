import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './layout/navbar';
import {FooterComponent} from './layout/footer';
import {WhatsappBubbleComponent} from './components/ui/whatsapp-bubble';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappBubbleComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen pt-20">
      <router-outlet></router-outlet>
    </main>
    <app-whatsapp-bubble></app-whatsapp-bubble>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css',
})
export class App {}
