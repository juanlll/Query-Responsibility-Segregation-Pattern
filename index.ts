import { Query } from './Core/Shared/Domain/Query';
import { InMemoryQueryBus } from './Core/Shared/Infrastructure/QueryBus/InMemoryQueryBus';
import { QueryHandlersStore } from './Core/Shared/Infrastructure/QueryBus/QueryHandlersStore';
import { GetTodoQuery } from './Core/Todo/Application/GetTodo/GetTodoQuery';
import { GetTodoQueryHandler } from './Core/Todo/Application/GetTodo/GetTodoQueryHandler';
import { GetTodoUseCase } from './Core/Todo/Application/GetTodo/GetTodoUseCase';
import { FetchTodoPersistenceRepository } from './Core/Todo/Infrastructure/FetchTodoPersistenceRepository';

const handledQuery = new GetTodoQuery(100);
const myQueryHandler = new GetTodoQueryHandler(
  new GetTodoUseCase(new FetchTodoPersistenceRepository())
);
const queryHandlersStore = new QueryHandlersStore([myQueryHandler]);
const queryBus = new InMemoryQueryBus(queryHandlersStore);

queryBus.ask(handledQuery).then(console.log);
