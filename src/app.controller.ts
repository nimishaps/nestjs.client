import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: MathService) {}

  // Map the 'POST /add' route to this method
  @Post('add')
  async accumulate(@Body('data') data: number[])  {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }

  // Map the 'POST /multiply' route to this method
  @Post('multiply')
  async multiply(@Body('data') data: number[])  {
    this.logger.log('Multiplying ' + data.toString());
    return this.mathService.multiply(data);
  }
}
