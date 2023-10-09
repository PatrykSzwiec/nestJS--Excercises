/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  client: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

}