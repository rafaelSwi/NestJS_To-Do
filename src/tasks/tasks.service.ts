import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 123_555,
            title: "Atividade de Teste",
            description: "Descrição de Teste",
            date: `${Date.now()}`,
            priority: 0,
            status: "in progress"
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
        return this.tasks;
    }

    findOne(id: string) {
        return this.tasks.find((task: Task) => task.id === Number(id));
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
        this.tasks.push(cache_task);
        console.log(`New Task Created. ID: ${cache_task.id}`);
    }

    update(id: string, updateTaskDto: any) {
        const indexTask = this.tasks.findIndex(
            task => task.id === Number(id),
        );

        this.tasks[indexTask] = updateTaskDto;
        console.log(`Task Updated. ID: ${updateTaskDto.id}`);
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
