import { Injectable } from '@nestjs/common';
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
        let id = (Math.floor(Math.random() * (100_000_000 - 100 + 1)) + 100);
        while (this.doesItExist(`${id}`) == true) {
            id = (Math.floor(Math.random() * (100_000_000 - 100 + 1)) + 100);
        }
        return id;
    }

    create(createTaskDto: any) {
        const cache_task: Task = createTaskDto;
        cache_task.id = this.generateId()
        cache_task.status = "standby";
        return this.taskRepository.save(cache_task);
        console.log(`New Task Created. ID: ${cache_task.id}`);
    }

    update(id: string, updateTaskDto: any) {
        const taskId = parseInt(id, 10);
        return this.taskRepository.update(
            { id: taskId },
            updateTaskDto
            )
    }

    remove(id: string) {
        const indexTask = this.tasks.findIndex(
            task => task.id === Number(id),
        );
        if (indexTask >= 0) {
            this.tasks.splice(indexTask, 0);
        }
        console.log(`Task Removed. ID: ${id}`);
    }

}
