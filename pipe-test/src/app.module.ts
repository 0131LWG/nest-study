import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OooModule } from './ooo/ooo.module';

@Module({
  imports: [OooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
