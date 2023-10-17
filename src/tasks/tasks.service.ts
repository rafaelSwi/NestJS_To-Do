import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 1,
            title: "Atividade",
            description: "Descrição",
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

    create(createTaskDto: any) {
        this.tasks.push(createTaskDto);
    }

    update(id: string, updateTaskDto: any) {
        const indexTask = this.tasks.findIndex(
            task => task.id === Number(id),
        );

        this.tasks[indexTask] = updateTaskDto;
    }

    remove(id: string) {
        const indexTask = this.tasks.findIndex(
            task => task.id === Number(id),
        );

        if (indexTask >= 0) {
            this.tasks.splice(indexTask, 0);
        }
    }



}
