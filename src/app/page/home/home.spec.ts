import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { HttpClient } from '@angular/common/http';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





export class NewsletterComponent {
  email = '';
  message = '';

  constructor(private http: HttpClient) {}

  subscribe() {
    if (!this.email) {
      this.message = "Adresse e-mail obligatoire.";
      return;
    }

    this.http.post<any>('http://localhost/page/home.php', {
      email: this.email
    }).subscribe(response => {
      if (response.status === 'ok') {
        this.message = 'Merci pour votre inscription !';
        this.email = ''; // reset champ
      } else {
        this.message = 'Erreur : ' + response.message;
      }
    }, error => {
      this.message = "Erreur de connexion au serveur.";
    });
  }
}
