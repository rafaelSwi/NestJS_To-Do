import { Module } from '@nestjs/common';
import { TaskController } from 'src/task/task.controller';
import { TasksService } from './tasks.service';

@Module({
    controllers: [TaskController],
    providers: [TasksService],
})
export class TasksModule {}
