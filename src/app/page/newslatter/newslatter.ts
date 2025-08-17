import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newslatter',
  imports: [],
  templateUrl: './newslatter.html',
  styleUrl: './newslatter.css'
})
export class NewsletterComponent {
  email: string = '';

  constructor(private http: HttpClient) {}

  subscribeNewsletter(form: any) {
    if (form.valid) {
      this.http.post('http://localhost/pixicode/newsletter.php', { email: this.email })
        .subscribe((res: any) => {
          alert(res.message);
        });
    }
  }
}
