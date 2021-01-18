import { Field, InputType, IntersectionType as it_, OmitType as ot_ } from '@nestjs/graphql';
import { IsOptional, Length } from 'class-validator';
import * as _ from '../_misc/base.inputs';

import { Product } from './product.model';

@InputType()
export class ListProductInput extends _.OptionalIdInput {
  @IsOptional()
  @Length(1, 100, { message: "Product Name should be between 1 to 100 characters." })
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
class ProductInput extends
  ot_(Product, ['_id', 'category', 'avgReviewScore', 'deletedAt', 'deleteReason', 'createdAt', 'updatedAt'] as const) { }

@InputType()
export class CreateProductInput extends
  it_(_.RequiredProductCategoryInput, ProductInput) { }

@InputType()
export class UpdateProductInput extends
  it_(_.OptionalProductCategoryInput, it_(_.RequiredIdInput, ProductInput)) { }

@InputType()
export class DeleteProductInput extends _.RequiredIdInput {
  @IsOptional()
  @Length(1, 200, { message: "Delete Reason should be between 1 to 200 characters." })
  @Field(() => String, { nullable: true })
  deleteReason?: string;
}