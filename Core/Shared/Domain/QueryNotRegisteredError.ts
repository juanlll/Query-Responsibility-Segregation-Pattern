import { Query } from '../../../Core/Shared/Domain/Query';

export class QueryNotRegisteredError extends Error {
  constructor(query: Query) {
    super(
      `The query <${query.constructor.name}> hasn't a query handler associated`
    );
  }
}
