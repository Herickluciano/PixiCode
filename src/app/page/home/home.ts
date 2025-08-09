import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [FormsModule]
})
export class Home implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
    });
  }

  subscribeNewsletter(form: NgForm) {
    if (!this.email) {
      alert("Merci d'entrer un email valide !");
      return;
    }

    emailjs.send(
      'pixicode_2024',
      'template_olqexsg',
      {
        email: this.email,
        name: `Abonné Newsletter Email : ${this.email}`
      },
      '5U56CrryUmTnVD3H9'
    ).then(() => {
      alert('Merci pour votre inscription à la newsletter chez PixiCode !');
      form.resetForm();
      this.email = '';
    }).catch((error) => {
      console.error('Erreur EmailJS:', error);
      alert("Erreur lors de l'envoi, veuillez réessayer plus tard.");
    });
  }
}
