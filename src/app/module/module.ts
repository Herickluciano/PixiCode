import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// importe directement Home (fais attention au chemin d'import)
import { Home } from '../page/home/home';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Home  // ici on importe le composant standalone
  ],
  exports: [
    Home  // on peut aussi l'exporter si besoin
  ]
})
export class Module {}
