import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { ObjectId } from 'mongodb';

@Controller('/api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.todoService.create(title, description);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
  ) {
    return this.todoService.update(id, title, description, status);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const res = await this.todoService.delete(id);
    console.log('res:', res);
    if (res.raw.deletedCount === 1) return { _id: id };
    else return null;
  }
}
