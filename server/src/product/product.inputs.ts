import { Field, InputType, IntersectionType as it_, OmitType as ot_ } from '@nestjs/graphql';
import { IsOptional, Length } from 'class-validator';
import { Product } from './product.model';
import * as _ from '../_generic/misc.inputs';

@InputType()
export class ListProductInput extends _.OptionalId {
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
  it_(_.RequiredProductCategory, ProductInput) { }

@InputType()
export class UpdateProductInput extends
  it_(_.OptionalProductCategory, it_(_.RequiredId, ProductInput)) { }

@InputType()
export class DeleteProductInput extends _.RequiredId {
  @IsOptional()
  @Length(1, 200, { message: "Delete Reason should be between 1 to 200 characters." })
  @Field(() => String, { nullable: true })
  deleteReason?: string;
}