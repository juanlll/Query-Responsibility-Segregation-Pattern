import { Query } from '../../../../Core/Shared/Domain/Query';

export class GetTodoQuery implements Query {
  constructor(public id: number) {}
}
