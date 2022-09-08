import { Query } from '../../../Core/Shared/Domain/Query';

export interface QueryHandler<Q extends Query, R extends Response> {
  subscribedTo(): string;
  handle(query: Q): Promise<R>;
}
