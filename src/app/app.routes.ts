import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Contact } from './page/contact/contact';
import { NotFound } from './page/not-found/not-found';
import { About } from './page/about/about';
import { Services } from './page/services/services';
import { Confiance } from './page/confiance/confiance';
import { Expertise } from './page/expertise/expertise';
import { Reference } from './page/reference/reference';
import { Mention } from './page/mention/mention';
import { Politique } from './page/politique/politique';
import { Protection } from './page/protection/protection';
import { Cookis } from './page/cookis/cookis';


export const routes: Routes = [
    { path: "", component:Home }, // le path doit rester un champ vide pour le prende au demarage
    { path: "contact", component:Contact },
    { path: "about", component:About },
    { path: "confiance", component:Confiance },
    { path: "expertise", component:Expertise },
    { path: "reference", component:Reference },
    { path: "services", component:Services },
    { path: "mention", component:Mention },
    { path: "politique", component:Politique },
    { path: "protection", component:Protection },
    { path: "cookis", component:Cookis },
    { path: "**", component:NotFound }
];
