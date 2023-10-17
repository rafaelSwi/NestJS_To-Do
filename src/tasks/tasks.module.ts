import { Module } from '@nestjs/common';
import { TaskController } from 'src/task/task.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    exports: [TasksModule],
    controllers: [TaskController],
    providers: [TasksService],
})
export class TasksModule {}
