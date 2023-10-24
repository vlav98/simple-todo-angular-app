import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      todo-list works!
    </p>
  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

}
