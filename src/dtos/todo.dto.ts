export class CreateTodoDto {
    title: string;
    completed?: boolean;
  }
  
  export class UpdateTodoDto {
    title?: string;
    completed?: boolean;
  }
  