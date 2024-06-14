import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  ParseFloatPipe,
  Query,
  Param,
  ParseBoolPipe,
  ParseArrayPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aa')
  aa(
    @Query(
      'aa',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    aa: string,
  ): string {
    return aa + 1;
  }

  @Get('bb')
  bb(
    @Query(
      'bb',
      new ParseIntPipe({
        exceptionFactory: (msg) => {
          console.log(msg);
          throw new HttpException('xxx ' + msg, HttpStatus.NOT_IMPLEMENTED);
        },
      }),
    )
    bb: string,
  ): string {
    return bb + 1;
  }

  @Get('cc')
  cc(@Query('cc', ParseFloatPipe) cc: number) {
    return cc + 1;
  }

  @Get('dd')
  dd(@Query('dd', ParseBoolPipe) dd: boolean) {
    return typeof dd;
  }

  @Get('ee')
  ee(
    @Query(
      'ee',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    ee: Array<number>,
  ) {
    return ee.reduce((total, item) => total + item, 0);
  }

  @Get('ff')
  ff(
    @Query(
      'ff',
      new ParseArrayPipe({
        separator: '..',
        optional: true,
      }),
    )
    ff: Array<string>,
  ) {
    return ff;
  }

  @Get('nnn/:bbb')
  nnn(@Query('aaa', AaaPipe) aaa: string, @Param('bbb', AaaPipe) bbb: number) {
    return aaa + bbb;
  }
}
