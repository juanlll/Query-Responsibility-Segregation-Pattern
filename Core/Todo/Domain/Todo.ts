export class Todo {
  constructor(
    public completed: boolean = false,
    public id: number = 1,
    public title: string = 'delectus aut autem',
    public userId: number = 12
  ) {}
}
