import { Resolver, Query, Args } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

// 리솔버를 사용하고 쿼리는 boolean을 리턴한다.
// 레스토랑의 리솔버가 됨
@Resolver((of) => Restaurant) // 직관적으로 표현하기 위함 () 이여도 됨
export class RestaurantsResolver {
  @Query((returns) => [Restaurant]) // graphql 부분
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }
}
