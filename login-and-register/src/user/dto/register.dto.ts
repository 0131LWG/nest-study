import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 12)
  @Matches(/^[a-zA-Z0-9#$%_-]+$/, {
    message: '用户名只能包含字母、数字、#、$、%、_、-',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 30)
  password: string;
}
