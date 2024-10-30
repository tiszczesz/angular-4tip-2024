import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  time: string = new Date().toLocaleTimeString();
  
  constructor() {   
    this.updateTime();
  }
  updateTime() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    },1000);
  }
}
