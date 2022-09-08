import { Todo } from '../../../Core/Todo/Domain/Todo';

export interface TodoPersistenceRepository {
  get(id: number): Promise<Todo>;
}
