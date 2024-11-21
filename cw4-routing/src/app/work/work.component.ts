import { Component, signal } from '@angular/core';
import { Worker,workers } from '../../Data/data';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  title = 'Work';
  workers = signal<Worker[]>(workers)
}
