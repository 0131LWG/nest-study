import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HelloFilter } from './hello.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(HelloFilter)
  getHello(): string {
    console.log('------------------------');
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }
}
