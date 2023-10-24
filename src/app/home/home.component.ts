import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section>
      <app-todo *ngFor="let todo of todolist" [todo]="todo"></app-todo>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  todolist: Todo[] = [
    {
      id: 1,
      content: 'coder',
      isDone: true,
    },
    {
      id: 2,
      content: 'drink water',
      isDone: true,
    },
    {
      id: 3,
      content: 'take a nap',
      isDone: false,
    },
    {
      id: 4,
      content: 'draw',
      isDone: false,
    },
    {
      id: 5,
      content: 'send a mail',
      isDone: false,
    },
    {
      id: 6,
      content: 'new action',
      isDone: false,
    },
  ];
}
