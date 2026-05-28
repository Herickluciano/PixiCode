import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  // configurés pour luhamcode@gmail.com
  private SERVICE_ID = 'pixicode_2024';
  private TEMPLATE_ID = 'template_olqexsg';
  private PUBLIC_KEY = '5U56CrryUmTnVD3H9';

  sendEmail(form: NgForm) {
    if (form.invalid) {
      alert('Veuillez remplir correctement tous les champs.');
      return;
    }

    //  données pour le template EmailJS
    const templateParams = {
      name: form.value.userName,
      email: form.value.userEmail,
      message: form.value.userMessage
    };

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    ).then(
      () => {
        alert(' Message envoyé avec succès !');
        form.resetForm();
      },
      (error) => {
        console.error('Erreur EmailJS:', error);
        alert("L'envoi a échoué. Vérifiez votre connexion.");
      }
    );
  }
}
