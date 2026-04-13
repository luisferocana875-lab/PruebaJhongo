import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './layout/navbar';
import {FooterComponent} from './layout/footer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen pt-20">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css',
})
export class App {}
