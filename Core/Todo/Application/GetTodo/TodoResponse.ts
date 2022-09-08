import { Response } from '../../../../Core/Shared/Domain/Response';
import { Todo } from '../../../../Core/Todo/Domain/Todo';

export class TodoResponse implements Response {
  constructor(readonly todo: Todo) {}
}
