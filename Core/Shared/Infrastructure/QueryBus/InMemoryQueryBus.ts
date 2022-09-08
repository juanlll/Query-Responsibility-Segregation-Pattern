import { Query } from '../../../../Core/Shared/Domain/Query';
import { QueryBus } from '../../../../Core/Shared/Domain/QueryBus';
import { QueryHandlersStore } from '../../../../Core/Shared/Infrastructure/QueryBus/QueryHandlersStore';

export class InMemoryQueryBus implements QueryBus {
  constructor(private queryHandlersStore: QueryHandlersStore) {}

  async ask<R extends Response>(query: Query): Promise<R> {
    const handler = this.queryHandlersStore.search(query);

    return handler.handle(query) as Promise<R>;
  }
}
