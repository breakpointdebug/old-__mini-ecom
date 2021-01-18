import { Field, InputType, OmitType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Types } from "mongoose";
import { ProductCategory } from "../product/product.enum";

@InputType()
export class OptionalIdInput {
  @Field(() => String, { nullable: true })
  _id?: Types.ObjectId;
}

@InputType()
export class RequiredIdInput {
  @Field(() => String)
  _id: Types.ObjectId;
}

@InputType()
export class OptionalProductCategoryInput {
  @IsOptional()
  @Field(() => ProductCategory, { nullable: true })
  category?: ProductCategory;
}

@InputType()
export class RequiredProductCategoryInput {
  @Field(() => ProductCategory)
  category: ProductCategory;
}
