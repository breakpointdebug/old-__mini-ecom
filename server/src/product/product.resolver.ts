import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { Product } from './product.model';
import { ProductService } from './product.service';

import * as _ from './product.inputs';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) { }

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
