import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TaskService {
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

    getAllTasks()  {
        return this.tasks;
    }

    createTask() {}

    updateTask() {}

    deleteTask() {}
}
