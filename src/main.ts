import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { Home } from './app/page/home/home'; // adapte le chemin

bootstrapApplication(Home, {
  providers: [
    provideHttpClient(withFetch()),  // <-- active fetch pour HttpClient
  ]
}).catch(err => console.error(err));
