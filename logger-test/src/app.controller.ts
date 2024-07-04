import { Injectable, Controller, Get, Logger, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class MyService {
  getHello(): string {
    return 'Hello World1';
  }
}

@Controller()
export class AppController {
  private logger = new Logger();

  constructor(
    private readonly appService: AppService,
    @Inject('person3') private readonly person3: { name: string; desc: string },
  ) {}

  @Inject()
  private readonly myService: MyService;

  @Get()
  getHello(): string {
    this.logger.debug('aaa', AppController.name);
    this.logger.error('bbb', AppController.name);
    this.logger.log('ccc', AppController.name);
    this.logger.verbose('ddd', AppController.name);
    this.logger.warn('eee', AppController.name);

    return this.appService.getHello();
  }

  @Get('my')
  getMy(): string {
    return this.myService.getHello();
  }

  @Get('person3')
  getPerson3(): { name: string; desc: string } {
    return this.person3;
  }
}
