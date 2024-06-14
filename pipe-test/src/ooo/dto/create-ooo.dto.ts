import { IsInt } from 'class-validator';

export class CreateOooDto {}

export class Ooo {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
  hobbies: Array<string>;
}
