import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
    @Get()
    helloWold(): string {
        return 'Hello World';
    }
}
