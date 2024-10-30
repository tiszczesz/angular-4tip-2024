import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComp } from '../app-mycomp';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComp,FirstComponent,SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cw1';
  message = 'Hello World';
  firstName = 'John';
  lastName = 'Doe';
  year = new Date().getFullYear();
}
