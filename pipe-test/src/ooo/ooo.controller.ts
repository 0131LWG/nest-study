import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { OooService } from './ooo.service';
import { CreateOooDto, Ooo } from './dto/create-ooo.dto';
import { UpdateOooDto } from './dto/update-ooo.dto';

@Controller('ooo')
export class OooController {
  constructor(private readonly oooService: OooService) {}

  @Post()
  create(@Body() createOooDto: CreateOooDto) {
    return this.oooService.create(createOooDto);
  }

  @Get()
  findAll() {
    return this.oooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oooService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOooDto: UpdateOooDto) {
    return this.oooService.update(+id, updateOooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oooService.remove(+id);
  }

  @Post('ooo')
  ooo(@Body(new ValidationPipe()) obj: Ooo) {
    console.log(obj);
  }
}
