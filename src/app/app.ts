import { Component } from '@angular/core'; 
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RouterModule, RouterLink], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pixicode';
  constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    console.log('Navigation event:', event);
  });
}
}
