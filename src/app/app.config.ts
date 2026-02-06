import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router'; // <--- 1. Importă asta

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 2. Adaugă withHashLocation() aici, separat prin virgulă
    provideRouter(routes, withHashLocation())
  ]
};
