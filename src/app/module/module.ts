// app.module.ts ou main.server.ts (selon config SSR)
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch())  
  ]
})
export class AppModule {}
