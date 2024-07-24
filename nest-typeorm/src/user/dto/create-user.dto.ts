import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '张三',
    description: '姓名',
  })
  name: string;
}
