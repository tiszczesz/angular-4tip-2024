import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-cezar',
  standalone: true,
  imports: [],
  templateUrl: './cezar.component.html',
  styleUrl: './cezar.component.css'
})
export class CezarComponent {
  handleInputKey($event: Event) {
    this.key = signal(parseInt((<HTMLInputElement>$event.target).value));
  }
  handleInput($event: Event) {
    this.text = signal((<HTMLInputElement>$event.target).value);
  }
  text = signal('');
  key = signal(2);
  cezarcompute(text: string, key: number) {
    return text.split('').map((c) => {
      if (c >= 'a' && c <= 'z') {
        return String.fromCharCode((c.charCodeAt(0) - 97 + key) % 26 + 97);
      }
      if (c >= 'A' && c <= 'Z') {
        return String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65);
      }
      return c;
    }).join('');
  }
  resultText = computed(() => this.cezarcompute(this.text(), this.key()));
}
