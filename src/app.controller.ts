import { Controller, Get, Inject, Logger, LoggerService } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@Inject(Logger) private readonly logger: LoggerService) {}

  @Get()
  getHello(): string {
    this.logger.log('Handling GET request');
    this.logger.error('hello world error')
    return 'Hello World!';
  }
}
