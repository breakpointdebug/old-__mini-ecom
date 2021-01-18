import { Args, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Seller } from './seller.model';
import { SellerService } from './seller.service';

import * as _ from './seller.inputs';

@Resolver(() => Seller)
export class SellerResolver {
  constructor(private sellerService: SellerService) { }

  @Query(() => Seller)
  async seller(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return await this.sellerService.getById(_id);
  }

  @Query(() => [Seller])
  async sellers(@Args('filter', { nullable: true }) filter: _.ListSellerInput) {
    return await this.sellerService.list(filter);
  }


}
