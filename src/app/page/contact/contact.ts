import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import obligatoire pour ngModel
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // ✅ Ajoute FormsModule ici
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
subscribe() {
throw new Error('Method not implemented.');
}
  title: any;
  name: any;
  time: any;
  message: any;
  email: any;
messageStatus: any;

  sendEmail(form: any) {
    emailjs.send(
      'pixicode_2024',
      'template_olqexsg',
      {
        title: this.title,
        name: this.name,
        time: this.time,
        message: this.message,
        email: this.email
      },
      '5U56CrryUmTnVD3H9'
    ).then(() => {
      alert('Message envoyé !');
      form.resetForm();
    }).catch((err) => {
      console.error(err);
      alert('Erreur lors de l’envoi');
    });
  }
}
