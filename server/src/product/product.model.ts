import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { IsOptional, IsPositive, Length } from 'class-validator';
import { ProductCategory } from './product.enum';
import { BaseModel } from '../_generic/base.model';
// https://www.npmjs.com/package/class-validator

registerEnumType(ProductCategory, { name: 'ProductCategory' });

@InputType("ProductInput") // graphql input
@ObjectType("ProductType") // graphql field
@Schema({ collection: "products", timestamps: true }) // mongoose field
export class Product extends BaseModel {

  @IsOptional() // temporary
  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  sellerId?: Types.ObjectId; // temporary, todo: link

  @Field(() => ProductCategory)
  @Prop()
  category: ProductCategory;

  @Length(1, 100, { message: "Product Name should be between 1 to 100 characters." })
  @Field(() => String)
  @Prop()
  name: string;

  @IsOptional()
  @Length(1, 100, { message: "SKU should be between 1 to 100 characters." })
  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  sku?: string;

  @IsOptional()
  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  image?: string;

  @IsOptional()
  @Length(1, 500, { message: "Description should be between 1 to 500 characters." })
  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  description?: string;

  @IsOptional()
  @IsPositive({ message: "Selling Price needs to be a positive number" })
  @Field(() => Number, { defaultValue: 1 })
  @Prop({ default: 1 })
  sellingPrice: number;

  @IsOptional()
  @Field(() => Number, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  avgReviewScore?: number;

  @IsOptional()
  @Length(1, 200, { message: "Delete Reason should be between 1 to 200 characters." })
  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  deleteReason?: string;

  @IsOptional()
  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  deletedAt?: Date;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);

// ProductSchema.methods
// ProductSchema.statics