import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
handleClick() {
  alert('Button was clicked');
}
  title = 'ex1';
  message = 'Hello from bind atributte';
  color = 'red';
}
