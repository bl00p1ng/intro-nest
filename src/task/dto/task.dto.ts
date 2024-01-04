import { TaskStatus } from "../task.entity";

class CreateTaskDTO {
    title: string;
    description: string;
}

class UpdateTaskDTO {
    title?: string;
    description?: string;
    status?: TaskStatus;
}

export { CreateTaskDTO, UpdateTaskDTO };