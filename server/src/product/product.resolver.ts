import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { SellerService } from '../seller/seller.service';
import * as _ from './product.inputs';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService,
    private readonly sellerService: SellerService) { }

  @Query(() => Product)
  async product(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return await this.productService.getById(_id);
  }

  @Query(() => [Product])
  async products(@Args('filter', { nullable: true }) filter: _.ListProductInput) {
    return await this.productService.list<_.ListProductInput>(filter, { deletedAt: null });
  }

  @Mutation(() => Product)
  async createProduct(@Args('payload') payload: _.CreateProductInput) {
    // todo
    // 1. only continue if sellerId exists on current user context
    // 1.1. user guards to determine if sellerId does not exist on current context
    // 2. after create success, associate this newly created product to current sellerId
    // 2.1 this.sellerService.associateProductToInv()... get sellerId from context
    // how to get sellerId from context again?
    return await this.productService.create<_.CreateProductInput>(payload);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('payload') payload: _.UpdateProductInput) {
    return await this.productService.update(payload._id, payload);
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('payload') payload: _.DeleteProductInput) {
    return await this.productService.deleteByLogic(payload._id, payload);
  }
}
