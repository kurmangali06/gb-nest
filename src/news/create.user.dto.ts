import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty()
  @IsString({
    message: 'поля Title обязательно и должен быть строкой',
  })
  title: string;

  @ApiProperty()
  @IsString({
    message: 'поля description обязательно и должен быть строкой',
  })
  description: string;

  @ApiProperty()
  @IsString({
    message: 'поля автор обязательно и должен быть строкой',
  })
  author: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  countView?: string;
}
