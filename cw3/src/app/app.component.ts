import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleListComponent } from './simple-list/simple-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SimpleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cw3';
}
