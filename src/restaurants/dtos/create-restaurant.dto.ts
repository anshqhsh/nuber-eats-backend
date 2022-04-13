// dto처럼 사용

import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

// InputType 하나의 객체로 생성
@ArgsType() // 각각의 값들을 하나의 객체로 담지않고 보냄
export class CreateRestaurantDto {
  @Field((type) => String)
  @IsString() // validation
  @Length(5, 10)
  name: string;

  @Field((type) => Boolean)
  @IsBoolean()
  isVegan?: boolean;

  @Field((type) => String)
  @IsString()
  address: string;

  @Field((type) => String)
  @IsString()
  ownerName: string;
}
