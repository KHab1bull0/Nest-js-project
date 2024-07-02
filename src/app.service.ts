import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dtos/todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(id);
  }
}
