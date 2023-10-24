import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todoList: Todo[] = [
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

  getAllTodo(): Todo[] {
    return this.todoList;
  }

  getTodoById(id: number): Todo | undefined {
    return this.todoList.find((todo) => todo.id === id);
  }
}
