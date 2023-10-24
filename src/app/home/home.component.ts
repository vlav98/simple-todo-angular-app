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
      <app-todo [todo]="todo"></app-todo>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  todo: Todo = {
    id: 1,
    content: 'coder',
    isDone: true,
  };
}
