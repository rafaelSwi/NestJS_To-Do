import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

constructor (
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
) {}

    private tasks: Task[] = [
        {
            id: 123_555,
            title: "Atividade de Teste",
            description: "Descrição de Teste",
            date: `${Date.now()}`,
            priority: 0,
            status: "standby"
        },
    ];

    doesItExist(id: string): Boolean {
        if (!this.findOne(id)) {
            return false
        } else {
            return true
        }
    }

    findAll() {
        return this.taskRepository.find();
    }

    findOne(id: string) {
        const taskId = parseInt(id, 10);
        const result = this.taskRepository.findBy({ id: taskId });
        return result;
    }

    generateId(): number {
        return Math.floor(Math.random() * 5_000_000);
    }

    create(createTaskDto: any) {
        const cache_task: Task = createTaskDto;
        cache_task.id = this.generateId()
        cache_task.status = "standby";
        console.log(`New Task Created. ID: ${cache_task.id}`);
        return this.taskRepository.save(cache_task);
    }

    update(id: string, updateTaskDto: any) {
        const taskId = parseInt(id, 10);
        return this.taskRepository.update(
            { id: taskId },
            updateTaskDto
            )
    }

    async remove(id: string) {
        const taskToRemove = await this.findOne(id);
        if (!taskToRemove) {
            throw new HttpException(`Task with ID ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return this.taskRepository.remove(taskToRemove);
    }
    

}
