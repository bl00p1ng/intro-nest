import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { log } from 'console';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
    // Arreglo que simula las tareas existentes en la base de datos
    private tasks: Task[] = [
        {
            id: 1,
            title: 'Do the dishes',
            description: 'Wash the dishes',
            status: TaskStatus.PENDING
        },
        {
            id: 2,
            title: 'Do the laundry',
            description: 'Wash the laundry',
            status: TaskStatus.PENDING
        },
        {
            id: 3,
            title: 'Do the shopping',
            description: 'Buy the shopping',
            status: TaskStatus.PENDING
        }
    ];

    /**
     * Obtiene todas las tareas existentes en la base de datos
     * @returns {Task[]} Retorna todas las tareas existentes en la base de datos
     */
    getAllTasks(): Task[]  {
        return this.tasks;
    }

    /**
     * Obtener una tarea por su id
     * @param id Id de la tarea a buscar
     */
    getTaskById(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }

    /**
     * Crear una nueva tarea
     * @param title Titulo de la tarea
     * @param description Descripcion de la tarea
     */
    createTask(title: string, description: string): Task {
        // Definir una nueva tarea
        const task: Task = {
            id: this.tasks.length + 1,
            title,
            description,
            status: TaskStatus.PENDING
        };

        // Agregar la tarea al arreglo de tareas
        this.tasks.push(task);

        return task;
    }

    /**
     * Actualiza una tarea por su id
     * @param id Id de la tarea a actualizar
     * @param updatedFields Campos a actualizar
     */
    updateTask(id: number, updatedFields: UpdateTaskDTO) {
        // Bucar la tarea a actualizar
        const task = this.getTaskById(id);

        // Actualizar la tarea
        const newTask = Object.assign(task, updatedFields);

        // Actualizar el arreglo de tareas
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task);

        return newTask;
    }

    /**
     * Elimina una tarea por su id
     * @param id Id de la tarea a eliminar
     */
    deleteTask(id: number) {
        // Eliminar la tarea con el id especificado
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
