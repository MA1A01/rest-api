import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, MinDate } from 'class-validator';
export class PersonSchema {
  @IsString()
  name: string;
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MinDate(new Date())
  datanasc: Date;
  @IsString()
  period: string;
  @IsString()
  curso: string;
  @IsDate()
  datacad: Date;
}
