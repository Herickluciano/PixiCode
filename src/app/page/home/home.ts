import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  email: string = '';
  messageStatus: string = '';

  constructor(private http: HttpClient) {}

  // --- Envoi EmailJS ---
  sendEmailJS() {
    if (!this.email) {
      this.messageStatus = 'Veuillez saisir un email.';
      return;
    }

    emailjs.send("pixicode_2024", "template_olqexsg", {
      email: this.email
    }, "5U56CrryUmTnVD3H9")
    .then(() => {
      this.messageStatus = "Email envoyé avec EmailJS";
    })
    .catch(() => {
      this.messageStatus = "Erreur lors de l'envoi EmailJS";
    });
  }

  // --- Sauvegarde MySQL ---
  saveToMySQL() {
    if (!this.email) {
      this.messageStatus = 'Veuillez saisir un email.';
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post<any>(
      'http://localhost/pixicode/newsletter.php',
      { email: this.email },
      { headers }
    ).subscribe({
      next: res => {
        this.messageStatus = res.message;
      },
      error: () => {
        this.messageStatus = 'Erreur serveur MySQL ❌';
      }
    });
  }

  // --- Méthode combinée ---
  subscribe() {
    this.sendEmailJS();
    this.saveToMySQL();
  }
}
