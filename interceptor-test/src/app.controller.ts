import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(TimeoutInterceptor)
  async getHello() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return this.appService.getHello();
  }

  @Get('eee')
  async eee() {
    return 'eee';
  }
}
