import { Query } from '../../../Core/Shared/Domain/Query';

export interface QueryBus {
  ask<R extends Response>(query: Query): Promise<R>;
}
