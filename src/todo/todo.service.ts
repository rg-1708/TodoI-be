import { Injectable, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todoRepository.find();
  }

  async findById(id: string) {
    const todo = await this.todoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
    return todo;
  }

  create(title: string, description: string) {
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    return this.todoRepository.save(todo);
  }

  async update(id: string, title: string, description: string, status: string) {
    const todo = await this.todoRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
    if (todo) {
      if (status?.length > 0) todo.status = status;
      if (description?.length > 0) todo.description = description;
      if (title?.length > 0) todo.title = title;
      return this.todoRepository.save(todo);
    }
    return null;
  }

  delete(_id: string) {
    return this.todoRepository.delete(_id);
  }
}
