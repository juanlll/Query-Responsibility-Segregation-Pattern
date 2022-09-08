import { Todo } from '../../../Core/Todo/Domain/Todo';
import { TodoPersistenceRepository } from '../../../Core/Todo/Domain/TodoPersistenceRepository';

export class FetchTodoPersistenceRepository
  implements TodoPersistenceRepository
{
  async get(id: number): Promise<Todo> {
    const data: any = await fetch(
      'https://jsonplaceholder.typicode.com/todos/' + id
    ).then((response) => response.json());
    return new Todo(data.completed, data.id, data.title, data.userId);
  }
}
