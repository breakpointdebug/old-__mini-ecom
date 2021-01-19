import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Seller } from './seller.model';
import { SellerService } from './seller.service';
import * as _ from './seller.inputs';

@Resolver(() => Seller)
export class SellerResolver {
  constructor(private readonly sellerService: SellerService) { }

  @Query(() => Seller)
  async seller(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return await this.sellerService.getById(_id);
  }

  @Query(() => [Seller])
  async sellers(@Args('filter', { nullable: true }) filter: _.ListSellerInput) {
    return await this.sellerService.list<_.ListSellerInput>(filter);
  }

  @Mutation(() => Seller)
  async createSeller(@Args('payload') payload: _.CreateSellerInput) {
    return await this.sellerService.create<_.CreateSellerInput>(payload);
  }

  @Mutation(() => Seller)
  async updateSeller(@Args('payload') payload: _.UpdateSellerInput) {
    return await this.sellerService.update<_.UpdateSellerInput>(payload._id, payload);
  }

  // TODO: temporary for testing, will remove endpoint later after sellerId is at context
  @Mutation(() => Seller)
  async associateProductToInv(@Args('payload') payload: _.AssociateProductToInvInput) {
    return await this.sellerService.associateProductToInv(payload);
  }

  // @Mutation(() => Seller)
  // async updateProductInv(@Args('payload') payload: _.UpdateStockInvInput) {
  //   return await this.sellerService.updateProductInv(payload);
  // }
}