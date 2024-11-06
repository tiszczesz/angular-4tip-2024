import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  handleInput($event: Event) {
    console.log('handleChange', $event);
    this.info.set(($event.target as HTMLInputElement).value);
  }
  info = signal('to jest sygnał');
}
