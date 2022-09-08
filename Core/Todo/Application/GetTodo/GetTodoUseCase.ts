import { TodoPersistenceRepository } from '../../../../Core/Todo/Domain/TodoPersistenceRepository';

export class GetTodoUseCase {
  constructor(private persistenceRepository: TodoPersistenceRepository) {}
  public async __invoke(id: number) {
    return await this.persistenceRepository.get(id);
  }
}
