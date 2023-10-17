import { Controller, Get, Post, Body, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto/create-task.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto/update-task.dto';
import { TasksService } from 'src/tasks/tasks.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAll() {
        return this.tasksService.findAll()
    }

    @Get(':id')
    findOne(@Param() params) {

        if (this.tasksService.doesItExist(params.id) == true) {
            return this.tasksService.findOne(params.id)
        } else {
            throw new HttpException(`Task ${params.id} not found`, HttpStatus.NOT_FOUND);
        }

    }

    @Post()
    create(@Body() CreateTaskDto: CreateTaskDto) {
        this.tasksService.create(CreateTaskDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {

        if (this.tasksService.doesItExist(id) == true) {
            this.tasksService.update(id, updateTaskDto);
        } else {
            throw new HttpException(`Task ${id} not found`, HttpStatus.NOT_FOUND);
        }

    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        
        if (this.tasksService.doesItExist(id) == true) {
            this.remove(id);
        } else {
            throw new HttpException(`Task ${id} not found`, HttpStatus.NOT_FOUND);
        }

    }

}
