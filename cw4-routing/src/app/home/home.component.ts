import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  names = signal<string[]>([]);
Save(info: HTMLInputElement) {
    this.names.set([...this.names(), info.value]);
    info.value = ""
}

}
