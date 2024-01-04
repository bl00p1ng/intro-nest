import { TaskStatus } from "../task.entity";
import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsEnum(TaskStatus)
    @IsOptional()
    status?: TaskStatus;
}

export { CreateTaskDTO, UpdateTaskDTO };