import { TaskStatus } from "../task.entity";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

class UpdateTaskDTO {
    title?: string;
    description?: string;
    status?: TaskStatus;
}

export { CreateTaskDTO, UpdateTaskDTO };