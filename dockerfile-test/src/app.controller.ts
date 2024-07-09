import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  arrs: string[];
  constructor(private readonly appService: AppService) {
    this.arrs = [];
  }

  @Get()
  getHello(): string {
    const str = 'asdasdasdasdsadasdasdasdasdddsdsdasdasdasdasd';
    for (let i = 0; i < 100000; i++) {
      this.arrs.push(str);
    }
    return this.appService.getHello();
  }
}
