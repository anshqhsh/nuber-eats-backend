import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
// 레스토랑의 오브젝트 타입 생성
// graphql 입장에서 restaurant의 생김새를 묘사
export class Restaurant {
  @Field((is) => String)
  name: string;
  @Field((is) => Boolean, { nullable: true })
  isGood?: boolean;
}
