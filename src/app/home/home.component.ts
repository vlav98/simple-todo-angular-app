import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
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
  todolist: Todo[] = [];
  todoService: TodoService = inject(TodoService);

  constructor() {
    this.todolist = this.todoService.getAllTodo();
  }
}
