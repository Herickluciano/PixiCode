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
import { Italy } from './page/italy/italy';
import { Chisiamo } from './page/chisiamo/chisiamo';
import { Competenze } from './page/competenze/competenze';
import { Fiducia } from './page/fiducia/fiducia';
import { Riferimenti } from './page/riferimenti/riferimenti';
import { Servizi } from './page/servizi/servizi';
import { Contatto } from './page/contatto/contatto';



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
    { path: "italy", component:Italy },
    { path: "chisiamo", component:Chisiamo },
    { path: "competenze", component:Competenze },
    { path: "fiducia", component:Fiducia},
    { path: "riferimenti", component:Riferimenti},
    { path: "servizi", component:Servizi},
    { path: "contatto", component:Contatto},
    { path: "**", component:NotFound }
];
