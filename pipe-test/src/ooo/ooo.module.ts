import { Module } from '@nestjs/common';
import { OooService } from './ooo.service';
import { OooController } from './ooo.controller';

@Module({
  controllers: [OooController],
  providers: [OooService],
})
export class OooModule {}
