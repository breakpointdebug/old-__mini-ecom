import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsOptional, Length } from 'class-validator';
import * as _ from '../_misc/base.inputs';
import { ProductCategory } from './product.enum';
import { Product } from './product.model';

@InputType()
export class ListProductInput extends _.OptionalIdInput {
  @IsOptional()
  @Length(1, 100, { message: "Product Name should be between 1 to 100 characters." })
  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class CreateProductInput extends
  OmitType(Product, ['_id', 'avgReviewScore', 'deleteReason', 'deletedAt', 'createdAt', 'updatedAt'] as const) { }

@InputType()
export class UpdateProductInput extends
  OmitType(Product, ['category', 'avgReviewScore', 'deleteReason', 'deletedAt', 'createdAt', 'updatedAt'] as const) {

  @IsOptional()
  @Field(() => ProductCategory, { nullable: true })
  category?: ProductCategory;
}

@InputType()
export class DeleteProductInput extends _.RequiredIdInput {
  @IsOptional()
  @Length(1, 200, { message: "Delete Reason should be between 1 to 200 characters." })
  @Field(() => String, { nullable: true })
  deleteReason?: string;
}