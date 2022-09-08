import { QueryHandler } from '../../../../Core/Shared/Domain/QueryHandler';
import { GetTodoQuery } from '../../../../Core/Todo/Application/GetTodo/GetTodoQuery';
import { GetTodoUseCase } from '../../../../Core/Todo/Application/GetTodo/GetTodoUseCase';
import { TodoResponse } from '../../../../Core/Todo/Application/GetTodo/TodoResponse';

export class GetTodoQueryHandler
  implements QueryHandler<GetTodoQuery, TodoResponse>
{
  constructor(private getTodoUseCase: GetTodoUseCase) {}

  public subscribedTo(): string {
    return GetTodoQuery.name;
  }

  async handle(query: GetTodoQuery): Promise<TodoResponse> {
    return new TodoResponse(await this.getTodoUseCase.__invoke(query.id));
  }
}
