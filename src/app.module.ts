import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...require('../config/typeorm.config'),
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
