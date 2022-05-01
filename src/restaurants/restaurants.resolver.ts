import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';

// 리솔버를 사용하고 쿼리는 boolean을 리턴한다.
// 레스토랑의 리솔버가 됨 (entity)
@Resolver((of) => Restaurant) // 직관적으로 표현하기 위함 () 이여도 됨
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantsService) {}
  @Query((returns) => [Restaurant]) // graphql 부분
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }
  @Mutation((returns) => Boolean)
  createRestaurnats(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
