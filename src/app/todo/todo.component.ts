import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>todo works!</p> `,
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
}
