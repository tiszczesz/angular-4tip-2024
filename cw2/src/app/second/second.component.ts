import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
handleInput($event:Event) {
    this.message = ($event.target as HTMLTextAreaElement).value.toUpperCase();
}
  title = 'cw2';
  message = 'This is the Second Component without signals';
}
