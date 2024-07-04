import { Module } from '@nestjs/common';
import { AppController, MyService } from './app.controller';
import { AppService } from './app.service';

import { AppLogger } from './AppLogger';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    AppLogger,
    MyService,
    {
      provide: 'person',
      useValue: {
        name: 'GUAN',
      },
    },
    {
      provide: 'person3',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
  ],
})
export class AppModule {}
