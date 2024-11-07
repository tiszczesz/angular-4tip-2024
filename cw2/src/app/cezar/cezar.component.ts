import { Component, computed,  signal } from '@angular/core';

@Component({
  selector: 'app-cezar',
  standalone: true,
  imports: [],
  templateUrl: './cezar.component.html',
  styleUrl: './cezar.component.css'
})
export class CezarComponent {
  handleInputKey($event: Event) {
    this.key.set(parseInt((<HTMLInputElement>$event.target).value));
  }
  handleInput($event: Event) {
    this.text.set((<HTMLInputElement>$event.target).value);
  }
  text = signal<string>('');
  key = signal<number>(2);
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
