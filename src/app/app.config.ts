import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {LucideAngularModule, Facebook, Instagram, Twitter, Linkedin} from 'lucide-angular';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Facebook, Instagram, Twitter, Linkedin }))
  ],
};
