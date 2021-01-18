import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Types } from "mongoose";
import { ProductCategory } from "../product/product.enum";

@InputType()
export class OptionalId {
  @Field(() => String, { nullable: true })
  _id?: Types.ObjectId;
}

@InputType()
export class RequiredId {
  @Field(() => String)
  _id: Types.ObjectId;
}

@InputType()
export class OptionalProductCategory {
  @IsOptional()
  @Field(() => ProductCategory, { nullable: true })
  category?: ProductCategory;
}

@InputType()
export class RequiredProductCategory {
  @Field(() => ProductCategory)
  category: ProductCategory;
}
