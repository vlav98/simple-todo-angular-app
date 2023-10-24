import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="todo">
      <p class="todo-content">{{ todo.content }}</p>
      <input type="checkbox" [checked]="todo.isDone" />
    </li>
  `,
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
}
