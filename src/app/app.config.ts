import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {
  LucideAngularModule,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Star,
  Check,
  Truck,
  ShieldCheck,
  RefreshCw,
  Play
} from 'lucide-angular';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({
      Facebook,
      Instagram,
      Twitter,
      Linkedin,
      Search,
      ShoppingBag,
      Menu,
      X,
      ArrowRight,
      Star,
      Check,
      Truck,
      ShieldCheck,
      RefreshCw,
      Play
    }))
  ],
};
