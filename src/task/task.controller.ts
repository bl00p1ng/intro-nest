import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from "./task.service";
import { Task } from "./task.entity";
import { CreateTaskDTO, UpdateTaskDTO } from "./dto/task.dto";

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

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDTO): Task {
        return this.taskService.updateTask(Number(id), updatedFields);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        // Convertir el id a un numero
        const idToDelete: number = Number(id);

        // Eliminar la tarea con el id especificado
        return this.taskService.deleteTask(idToDelete);
    }
}
