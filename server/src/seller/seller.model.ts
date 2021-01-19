import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Product } from "../product/product.model";
import { BaseModel } from '../_generic/base.model';

@InputType("SellerInput")
@ObjectType("SellerType")
@Schema({ collection: "sellers", timestamps: true })
export class Seller extends BaseModel {

  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  accountId?: Types.ObjectId; //todo: link

  @Field(() => String, { nullable: false })
  @Prop({ unique: true })
  businessName: string;

  @Field(() => [Product], { nullable: true, defaultValue: null })
  @Prop({ unique: true, default: null, type: Types.ObjectId, ref: Product.name })
  inventories?: [Product]
}



export type SellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);