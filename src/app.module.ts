import { Module } from '@nestjs/common';
import { TodosController } from './app.controller';
import { TodosService } from './app.service';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [ TodosService],
})
export class AppModule {}
