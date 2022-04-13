import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
// 레스토랑의 오브젝트 타입 생성
// graphql 입장에서 restaurant의 생김새를 묘사
export class Restaurant {
  @Field((type) => String)
  name: string;

  @Field((type) => Boolean)
  isVegan?: boolean;

  @Field((type) => String)
  address: string;

  @Field((type) => String)
  ownerName: string;
}
