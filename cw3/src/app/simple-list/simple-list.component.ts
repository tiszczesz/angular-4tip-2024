import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-simple-list',
  standalone: true,
  imports: [],
  templateUrl: './simple-list.component.html',
  styleUrl: './simple-list.component.css'
})
export class SimpleListComponent {
  handleClick(todo: HTMLInputElement) {    
    this.todos.update(todos => [...todos, todo.value]);
    todo.value = '';
  }
  todos = signal<string[]>(['zjeść', 'umyć się', 'pospać']); //ustawienie początkowej wartości na pustą tablicę
}
