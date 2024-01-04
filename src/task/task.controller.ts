import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from "./task.service";
import { log } from 'console';
import { CreateTaskDTO } from "./dto/task.dto";

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        // Crear una nueva tarea
        return this.taskService.createTask(newTask.title, newTask.description)
    }
}
